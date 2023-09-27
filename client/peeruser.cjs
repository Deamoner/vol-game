import "component-emitter";

/**
 * PeerUser Class
 * Custom class to handle the p2p user and connection state
 * @class PeerUser
 * @extends {Emitter}
 * @param {String} uid - The unique id of the user
 * @param {Object} profile - The profile of the user
 * @param {PeerServer} peerServer - The peerjs server instance
 * @fires PeerUser#statechange
 * @fires PeerUser#data
 * @fires PeerUser#connection
 */
export class PeerUser extends Emitter {
  uid = null;
  profile = null;
  state = "loading";
  peer = null;
  connection = null;
  constructor(uid, profile, peerServer) {
    super();
    this.uid = uid;
    this.profile = profile;
    this.peerServer = peerServer;
    this.setState("loading");
  }

  /**
   * Set the state of the user, and manage state progression centrally
   * @param {String} newState - The new state of the user
   * @returns {Promise} - Returns a promise that resolves when the state change is complete
   * @memberof PeerUser
   * @fires PeerUser#statechange
   */
  async setState(newState) {
    this.state = newState;
    switch (newState) {
      case "loading":
        this.validateProfile();
        this.setState("connecting");
        break;
      case "connecting":
        this.connect();
        break;
      case "peernegotiating":
        this.initiatePeerHandshake();
        break;
      case "peerconnected":
        this.setState("ready");
        break;
      case "ready":
        break;
      case "starting":
        break;
      case "playing":
        break;
      case "gameover":
        break;
    }
    this.fire("statechange", this.state);
    return;
  }

  /**
   * Method to add user data and emit events to be used by the game or app gui updates
   * @param {String} eventName - The name of the event to fire
   * @param {Object} data - The data to send with the event
   * @memberof PeerUser
   * @fires PeerUser#data
   */
  fire(eventName, data) {
    this.emit(eventName, { uid: this.uid, ...data });
  }

  /**
   * Method to validate the profile of the user
   * @memberof PeerUser
   */
  validateProfile() {
    if (!this.profile) {
      this.profile = {
        name: "Anonymous",
        score: 0,
      };
    }
  }

  /**
   * Method to connect to the peerjs server instance of this user and setup the listeners
   * @returns {Promise} - Returns a promise that resolves when the connection is established
   * @memberof PeerUser
   */
  async connect() {
    this.connection = await this.peerServer.connect(this.uid);
    this.connection.on("open", (id) => {
      this.setState("peernegotiating");
    });
    this.connection.on("connection", (conn) => {
      this.connection = conn;
      this.setState("peerconnected");
    });
    this.connection.on("data", (data) => {
      const event = data.event;
      const uid = data.uid;
      switch (event) {
        case "handshake":
          if (data.data.step === "accept") {
            this.connection.send({
              uid: this.peerServer._id,
              event: "handshake",
              data: { step: "complete" },
            });
            this.setState("peerconnected");
          }
          break;
      }
    });
  }

  /**
   * Method to initiate the peer handshake
   * @memberof PeerUser
   */
  initiatePeerHandshake() {
    this.connection.send({
      uid: this.peerServer._id,
      event: "handshake",
      data: { step: "start" },
    });
  }
}
