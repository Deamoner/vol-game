import { serverAddress } from "./constants.js";
import { PeerUser } from "./peeruser.cjs";
import Emitter from "component-emitter";
import { Peer } from "peerjs";

/**
 * Custom game server to manage the socket.io connection, and the peerjs webrtc connections
 * This object extends eventemitter as it will event events for the users and connections to be used throughout the app/ui
 *
 * @extends Emitter
 * @param {string} name - The name of the user
 *
 * @see {@link https://socket.io/docs/v3/client-socket-instance/} - Client library documentation for socket.io
 */
export class GameServer extends Emitter {
  socketId = null; // Socketid of the user, also used as the userid in place of no official user system
  socket = null; // Socket.io client
  name = null; // Name of the user
  score = 0; // Score of the local user initiated
  users = {}; // Object of users connected to the server
  ready = false; // Ready status of the local user
  constructor(name) {
    super();
    this.name = name;
    this.socket = io();
    this.init();
  }

  /**
   * Init function to setup the socket.io listeners
   * @private
   * @returns {void}
   * @memberof GameServer
   */
  init() {
    this.setupListeners();
  }

  /**
   * Function to handle object state changes and easily ready state change progression centrally
   * @private
   * @param {string} newState - The new state of the object
   * @returns {void}
   * @memberof GameServer
   */
  setState(newState) {
    this.state = newState;
    // emit state change
    this.emit("statechange", this.state);
    switch (newState) {
      case "loading":
        this.validateProfile();
        this.setState("connecting");
        break;
      case "connecting":
        this.connect();
        break;
      case "connected":
        break;
      case "ready":
        break;
    }
    return;
  }

  /**
   * Function to validate the profile of the user, if no profile is provided, a default profile will be created.
   * Then the user profile will be shared to the server to join it
   * @private
   * @returns {void}
   * @memberof GameServer
   * @see {@link https://socket.io/docs/v3/emit-cheatsheet/} - Socket.io emit cheatsheet
   */
  initprofile() {
    this.socket.emit("joinprofile", { name: this.name, score: this.score });
  }

  /**
   * Function to get the roster of users connected to the server
   * @private
   * @returns {void}
   * @memberof GameServer
   * @see {@link https://socket.io/docs/v3/emit-cheatsheet/} - Socket.io emit cheatsheet
   */
  getroster() {
    this.socket.emit("getroster");
  }

  /**
   * Function to setup the socket.io listeners
   * @private
   * @returns {void}
   * @memberof GameServer
   * @see {@link https://socket.io/docs/v3/client-socket-instance/} - Client library documentation for socket.io
   */
  setupListeners() {
    // Connection Check for Socket.io, then start peerserver setup
    this.socket.on("connect", async () => {
      this.socketId = this.socket.id;
      await this.setupPeerServer();
      this.initprofile();
      this.getroster();
    });

    // Listener for roster
    this.socket.on("roster", (data) => {
      this.users = data.roster;
      for (const [uid, profile] of Object.entries(data.roster)) {
        this.loadUser(uid, profile);
      }
      this.setState("ready");
    });

    // Listener for users joining
    this.socket.on("userjoin", (data) => {
      this.loadUser(data.uid, data.profile);
    });

    // Listener for users leaving
    this.socket.on("userleft", (data) => {
      delete this.users[data.uid];
    });

    // Disconnection
    this.socket.on("disconnect", () => {
      console.log("disconnected");
    });
  }

  /**
   * Function to load users who are on the server and setup a new p2p user object for them
   * @private
   * @param {string} uid - The user id of the user
   * @param {object} profile - The profile of the user
   * @returns {void}
   * @memberof GameServer
   * @see {@link https://socket.io/docs/v3/emit-cheatsheet/} - Socket.io emit cheatsheet
   * @see {@link https://peerjs.com/docs.html#peer} - Peerjs documentation
   */
  loadUser(uid, profile) {
    if (uid !== this.socketId) {
      const newPeerUser = new PeerUser(uid, profile, this.peer);
      this.users[uid] = { peer: newPeerUser, profile: profile, ready: false };
    }
  }

  /**
   * Function to setup the peerjs server peer
   * @private
   * @returns {Promise}
   * @memberof GameServer
   * @see {@link https://peerjs.com/docs.html#peer} - Peerjs documentation
   * @see {@link https://docs.xirsys.com/?pg=secure-calls-xirsys-api} - Docs for connections to xirsys
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Navigator/getUserMedia} - Docs for getUserMedia
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection} - Docs for RTCPeerConnection
   */
  async setupPeerServer() {
    return new Promise(async (resolve, reject) => {
      const urls = await getURLS();
      this.peer = new Peer(this.socketId, {
        config: {
          iceServers: [urls.v.iceServers],
          pingInterval: 500,
        },
      });
      this.peer.on("open", (id) => {
        // Resolve the functions promise once the server has been opened
        resolve();
      });

      // Handling incoming calls
      this.getUserMedia =
        navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia;
      this.peer.on("call", (call) => {
        // Answer the call, providing our mediaStream
        this.getUserMedia(
          { video: true, audio: true },
          (stream) => {
            call.answer(stream); // Answer the call with an A/V stream.
          },
          function (err) {
            console.log("Failed to get local stream", err);
          },
        );
      });

      // Handling incoming data connections
      this.peer.on("connection", (conn) => {
        // Handling the customer data channel events on p2p
        conn.on("data", (data) => {
          // Updates from remote users
          const event = data.event;
          const uid = data.uid;
          switch (event) {
            case "handshake":
              if (data.data.step === "start") {
                conn.send({
                  uid: this.socketId,
                  event: "handshake",
                  data: { step: "accept" },
                });
              }
              if (data.data.step === "accept") {
                conn.send({
                  uid: this.socketId,
                  event: "handshake",
                  data: { step: "complete" },
                });
              }
              if (data.data.step === "complete") {
                this.userOnline(uid, conn);
              }
              break;
            case "readyupdate":
              this.sendUserEvent(data);
              this.updateUserReady(uid, data.data);
              break;
            case "startgame":
              this.sendUserEvent(data);
              break;
            case "scoreupdate":
              this.sendUserEvent(data);
              this.updateUserScore(uid, data.data);
              break;
            case "gameupdate":
              this.handleGameUpdate(uid, data.data);
              break;
          }
        });
      });
    });
  }

  /**
   * Function to emit user data channel events for consumption to other parts of the app
   * @private
   * @param {object} data - The data to be sent
   * @returns {void}
   * @memberof GameServer
   */
  sendUserEvent(data) {
    this.emit(data.event, data);
  }

  /**
   * Function for users coming online after full negotiation of data channels
   * @private
   * @param {string} uid - The user id of the user
   * @param {object} conn - The connection object of the user
   * @returns {void}
   * @memberof GameServer
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection} - Docs for RTCPeerConnection
   */
  userOnline(uid, conn) {
    if (uid != this.socketId) {
      this.users[uid].connection = conn;
      this.users[uid].ready = false;
      this.emit("p2puseronline", { uid: uid, user: this.users[uid] });
      this.setupUserCall(uid);
    }
  }

  /**
   * Function to setup the media call for the users
   * @private
   * @param {string} uid - The user id of the user
   * @returns {void}
   * @memberof GameServer
   */
  setupUserCall(uid) {
    var getUserMedia =
      navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia;
    getUserMedia(
      { video: true, audio: true },
      (stream) => {
        var call = this.peer.call(uid, stream);
        call.on("stream", (remoteStream) => {
          this.callStart(uid, remoteStream);
        });
      },
      function (err) {
        console.log("Failed to get local stream", err);
      },
    );
  }

  /**
   * Method to start a call as the streams arrive, and update other parts of the app through events
   * @private
   * @param {string} uid - The user id of the user
   * @param {object} mediaStream - The media stream of the user
   * @returns {void}
   * @memberof GameServer
   * @see {@link https://github.com/component/emitter} - Component-emitter docs for local EventEmitter class
   */
  callStart(uid, mediaStream) {
    this.users[uid].stream = mediaStream;
    this.emit("callstart", { uid: uid, stream: mediaStream });
  }

  /**
   * Method to handle game update events arriving on the data channels
   * @private
   * @param {string} uid - The user id of the user
   * @param {object} data - The data of the game update {score: 0, characters: []}
   * @returns {void}
   * @memberof GameServer
   * @see {@link https://github.com/component/emitter} - Component-emitter docs for local EventEmitter class
   */
  handleGameUpdate(uid, data) {
    this.emit("gameupdate", { uid: uid, data: data });
    this.users[uid].profile.score = data.score;
  }

  /**
   * Method to update the status of the user for starting the game
   * @private
   * @param {string} uid - The user id of the user
   * @param {object} data - The data of the ready update {status: true}
   * @returns {void}
   * @memberof GameServer
   * @see {@link https://github.com/component/emitter} - Component-emitter docs for local EventEmitter class
   */
  updateUserReady(uid, data) {
    this.users[uid].ready = data.ready;
    let allReady = false;
    const filteredUsers = Object.keys(this.users).filter((key) => {
      const user = this.users[key];
      return !user.ready && key !== this.socketId && this.ready;
    });

    // When everyone is ready and local user is ready, start the game
    if (!Object.keys(filteredUsers).length) {
      allReady = true;
    }
    this.emit("allready", { data: { status: allReady } });
  }

  /**
   * Method broadcast the start of the game for remote users to start
   * @public
   * @returns {void}
   * @memberof GameServer
   */
  broadcastStartGame() {
    this.broadcast({ uid: this.socketId, event: "startgame", data: {} });
  }

  /**
   * Method to broadcast events to all p2p webrtc users connected
   * @private
   * @param {object} data - The data to be sent
   * @returns {void}
   * @memberof GameServer
   * @see {@link https://peerjs.com/docs/#dataconnection-send} - Peerjs docs for dataconnection send
   */
  broadcast(data) {
    for (const [uid, user] of Object.entries(this.users)) {
      if (user.connection) {
        user.peer.connection.send(data);
      }
    }
  }

  /**
   * Method to update the ready status of the local user
   * @public
   * @param {boolean} ready - The user ready status to be set
   * @returns {void}
   * @memberof GameServer
   * @see {@link https://peerjs.com/docs/#dataconnection-send} - Peerjs docs for dataconnection send
   * @see {@link https://github.com/component/emitter} - Component-emitter docs for local EventEmitter class
   */
  setReady(ready) {
    this.ready = ready;
    let allReady = false;
    if (Object.values(this.users).every((user) => user.ready)) {
      allReady = true;
    }
    this.emit("allready", { data: { status: allReady } });
    this.broadcast({
      uid: this.socketId,
      event: "readyupdate",
      data: { ready: ready },
    });
  }

  /**
   * Method to sendout game update events to all p2p webrtc users connected
   * @public
   * @param {number} score - The score of the local user
   * @param {array} characters - The characters of the local user that are currently on the screen
   * @returns {void}
   * @memberof GameServer
   */
  sendGameUpdateEvent(score, characters) {
    this.broadcast({
      uid: this.socketId,
      event: "gameupdate",
      data: { score: score, characters: characters },
    });
  }
}

/**
 * Simple function to get the stun server urls for the p2p incase Nat traversal is needed
 * @see {@link https://docs.xirsys.com/?pg=secure-calls-xirsys-api} - Docs for connections to xirsys
 */
async function getURLS() {
  return new Promise((resolve, reject) => {
    try {
      let xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function ($evt) {
        try {
          if (xhr.readyState == 4 && xhr.status == 200) {
            let res = JSON.parse(xhr.responseText);
            resolve(res);
          }
        } catch (e) {
          console.log(e);
        }
      };
      xhr.open("PUT", "https://global.xirsys.net/_turn/MyFirstApp", true);
      xhr.setRequestHeader(
        "Authorization",
        "Basic " + btoa("deadener:225b9c68-70eb-11ed-aa8f-0242ac150003"),
      );
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.send(JSON.stringify({ format: "urls" }));
    } catch (e) {
      console.log(e);
      resolve(null);
    }
  });
}
