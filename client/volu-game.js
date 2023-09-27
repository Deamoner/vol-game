import * as THREE from 'three';
import {Text} from 'troika-three-text'
import { GameServer } from './gameserver.cjs';
import { v4 as uuidv4 } from 'uuid';
/**
 * Custom HTML element representing the compartmentalized game
 * Use this element to create and manage a 3D game using the Three.js library.
 *
 * @extends HTMLElement
 * @example
 *  <volu-game></volu-game>
 *
 * @see {@link https://threejs.org/|Three.js} - The Three.js library for 3D graphics.
 */
class VoluGameApp extends HTMLElement {
    appstate = 'loading'; // initializing, objectloading, waitingonname, waitingonopponents, serverloading, loaded, waitinplayersgready, startinggame, remotestarted, gamestarted
    name = null; // The name of the user gotten from the ui
    frameCallback = null; // The callback to call on each frame render by objects such as the compartmentalized game object
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.setAppState('initializing');
    }

    /**
     * Method to handle object state changes and easily ready state change progression centrally
     * @param {string} newState - The new state to set the object to
     * @returns {Promise} - A promise that resolves when the state change is complete
     * @example
     * this.setAppState('ready');
     * @memberof VoluGameApp
     * 
     */
    async setAppState(newState) {
        this.appstate = newState;
        switch (newState) {
            case 'initializing':
                await this.initialize();
                this.setAppState('objectloading');
                break;
            case 'objectloading':
                this.loadInitialObjects();
                this.animateRenderer();
                this.setAppState('waitingonname');
                break;
            case 'waitingonname':
                break;
            case 'waitingonopponents':
                break;
            case 'serverloading':
                this.loadServer();
                this.setAppState('loaded');
                break;
            case 'loaded':
                this.setGlobalCtx();
                this.setAppState('waitinplayersgready');
                break;
            case 'waitinplayersgready':
                break;
            case 'startinggame':
                this.sendoutStartGame();
                this.loadGame();
                this.setAppState('gamestarted');
                break;
            case 'remotestarted':
                this.loadGame();
                this.setAppState('gamestarted');
                break;
            case 'gamestarted':
                break;
        }
        this.dispatchEvent(new CustomEvent('appstatechange', { state: newState }));
        return;
    }

    /**
     * Method to initialize the Three.js scene, camera and renderer
     * @returns {Promise} - A promise that resolves when the scene, camera and renderer are initialized
     * @example
     * await this.initialize();
     * @memberof VoluGameApp
     */
    async initialize() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 0.1, 1000 );
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        this.renderer = renderer;
        
        this.shadowRoot.appendChild( renderer.domElement );
        this.camera.position.z = 5;
        return;
    }

    /**
     * Method to load the initial objects or dom elements for the app 
     * @returns {void}
     * @memberof VoluGameApp
     */
    loadInitialObjects() {
        const nameinputbtn = document.getElementById('nameinputbtn');
        nameinputbtn.addEventListener('click', this.nameInputCallback.bind(this));
        const readybtn = document.getElementById('readybtn');
        readybtn.addEventListener('click', this.readyBtnCallback.bind(this));

        this.camera.position.z = 5;
        this.scene.add( new THREE.AmbientLight( 0xffffff ) );
        const dirLight = new THREE.DirectionalLight( 0xffffff, 1.5 );
        dirLight.position.set( 0, 2, 0 );
        dirLight.castShadow = true;
        dirLight.shadow.camera.near = 1;
        dirLight.shadow.camera.far = 10;

        dirLight.shadow.camera.right = 1;
        dirLight.shadow.camera.left = - 1;
        dirLight.shadow.camera.top	= 1;
        dirLight.shadow.camera.bottom = - 1;

        dirLight.shadow.mapSize.width = 1024;
        dirLight.shadow.mapSize.height = 1024;
        this.scene.add( dirLight );
        const planeGeometry = new THREE.PlaneGeometry( 600, 60, 1, 1 )
        const ground = new THREE.Mesh( planeGeometry,
        new THREE.MeshPhongMaterial( {
        color: 0xa0adaf, shininess: 10 } ) );
        ground.rotation.x = - Math.PI / 2;
        ground.position.y = - 30.5;
        ground.position.z = 2;
        this.scene.add( ground );

        const gridfloorhelper = new THREE.GridHelper( 2000, 100 );
        gridfloorhelper.position.y = - 199;
        gridfloorhelper.material.opacity = 0.25;
        gridfloorhelper.material.transparent = true;
        this.scene.add( gridfloorhelper );

        const gridbackhelper = new THREE.GridHelper( 2000, 100 );
        gridbackhelper.position.z = -400;
        gridbackhelper.rotation.x = - Math.PI / 2;
        gridbackhelper.material.opacity = 0.25;
        gridbackhelper.material.transparent = true;
        this.scene.add( gridbackhelper );
    }

    /**
     * Method to handle the ready button click event
     * @returns {void}
     * @memberof VoluGameApp
     */
    readyBtnCallback() {
        this.ready = true;
        document.getElementById('readybtn').style.display = 'none';
        this.server.setReady(true);
    }

    /**
     * Method to handle the name input button click event
     * @returns {void}
     * @memberof VoluGameApp
     */
    nameInputCallback() {
        const nameinput = document.getElementById('name');
        const name = nameinput.value;
        if(!name) {
            alert('Please enter a name');
            return;
        }
        this.name = name;
        document.getElementById('nameinput').style.display = 'none';
        document.getElementById('waiting').style.display = 'block';
        this.setAppState('serverloading');
    }

    /**
     * Method to animate the renderer and call the frameCallback if it exists
     * @returns {void}
     * @memberof VoluGameApp
     */
    animateRenderer() {
        this.renderer.render( this.scene, this.camera );
        if(this.frameCallback) {
            this.frameCallback();
        }
        requestAnimationFrame( this.animateRenderer.bind(this));
    }

    /**
     * Method to load the game socket.io and p2p servers server plus setup the listener events
     * @returns {void}
     * @memberof VoluGameApp
     */ 
    loadServer() {
        this.server = new GameServer(this.name);
        this.server.on('p2puseronline', this.p2pUserOnlineCallback.bind(this));
        this.server.on('p2puseroffline', this.p2pUserOfflineCallback.bind(this));
        this.server.on('readyupdate', this.readyUpdateCallback.bind(this));
        this.server.on('scoreupdate', this.scoreUpdateCallback.bind(this));
        this.server.on('allready', this.allReadyCallback.bind(this));
        this.server.on('startgame', this.startGameCallback.bind(this));
        this.server.on('gameupdate', this.gameUpdateCallback.bind(this));
        this.server.on('callstart', this.callStartCallback.bind(this));
    }

    /**
     * Method to handle the call start event from the server
     * @param {object} data - The call data object from the server {uid: string, stream: MediaStream}
     * @returns {void}
     * @memberof VoluGameApp
     */
    callStartCallback(data) {
        const videoElm = document.getElementById(`${data.uid}-video`);
        if(!videoElm) {
            const userDiv = document.getElementById(data.uid);
            const video = document.createElement('video');
            video.setAttribute('autoplay', true);
            video.setAttribute('playsinline', true);
            video.setAttribute('muted', false);
            video.setAttribute('id', `${data.uid}-video`);
            video.style.width = '100px';
            video.srcObject = data.stream;
            userDiv.appendChild(video);
        }
    }

    /**
     * Method to handle the game update event from the server
     * @param {object} data - The game update data object from the server {uid: string, data: {score: number, characters: [{char: string, position: {x: number, y: number, z: number}}]}}
     * @returns {void}
     * @memberof VoluGameApp
     */
    gameUpdateCallback(data) {
       this.scoreUpdateCallback(data);
    }

    /**
     * Method to handle the start of the game event from a p2p connection
     * @returns {void}
     * @memberof VoluGameApp
     */
    startGameCallback() {
        this.setAppState('remotestarted');
    }

    /**
     * Method to handle the all ready event from the all readiness checks
     * @param {object} data - The all ready data object from the server {data: {status: boolean}}
     * @returns {void}
     * @memberof VoluGameApp
     */
    allReadyCallback(data) {
        if(data.data.status == true && this.ready == true) {
            this.setAppState('startinggame');
        }
    }

    /**
     * Method to handle user readiness updates to update the gui
     * @param {object} data - The ready update data object from the server {uid: string, data: {ready: boolean}}
     * @returns {void}
     * @memberof VoluGameApp
     */
    readyUpdateCallback(data) {
        const readySpan = document.getElementById(`${data.uid}-status`);
        readySpan.innerText = !!data.data.ready;
    }

    /**
     * Method to handle user score updates to update the gui
     * @param {object} data - The score update data object from the server {uid: string, data: {score: number}}
     * @returns {void}
     * @memberof VoluGameApp
     */
    scoreUpdateCallback(data) {
        const scoreSpan = document.getElementById(`${data.uid}-score`);
        scoreSpan.innerText = Math.round(data.data.score);
    }

    /**
     * Method to handle user offline events to update the gui
     * @param {object} data - The user offline data object from the server {uid: string}
     * @returns {void}
     * @memberof VoluGameApp
     */
    p2pUserOfflineCallback(data) {
        const userDiv = document.getElementById(data.uid);
        userDiv.remove();
    }

    /**
     * Method to handle user online events to update the gui
     * @param {object} data - The user online data object from the server {uid: string, user: PeerUser, ready: boolean}
     * @returns {void}
     * @memberof VoluGameApp
     */
    p2pUserOnlineCallback(data) {
        this.addUserScoreboard(data);
    }

    /**
     * Method to add a user to the scoreboard
     * @param {object} data - The user online data object from the server {uid: string, user: PeerUser, ready: boolean}
     * @returns {void}
     * @memberof VoluGameApp
     */
    addUserScoreboard(data) {
        const userDiv = document.createElement('div');
        userDiv.setAttribute('id', data.uid);
        const userNamelabel = document.createElement('span');
        userNamelabel.innerText = 'Name: ';
        const userName = document.createElement('span');
        userName.innerText = data.user.peer.profile.name;
        const userScorelabel = document.createElement('span');
        userScorelabel.innerText = 'Score: ';
        const userScore = document.createElement('span');
        userScore.setAttribute('id', `${data.uid}-score`);
        userScore.innerText = data.user.peer.profile.score;
        const userStatuslabel = document.createElement('span');
        userStatuslabel.innerText = 'Ready: ';
        const userStatus = document.createElement('span');
        userStatus.setAttribute('id', `${data.uid}-status`);
        userStatus.innerText = !!data.ready;
        userDiv.appendChild(userNamelabel);
        userDiv.appendChild(userName);
        userDiv.insertAdjacentHTML( 'beforeend', '<br>' )
        userDiv.appendChild(userScorelabel);
        userDiv.appendChild(userScore);
        userDiv.insertAdjacentHTML( 'beforeend', '<br>' )
        userDiv.appendChild(userStatuslabel);
        userDiv.appendChild(userStatus);
        const scoreboards = document.getElementById('scoreboards');
        scoreboards.appendChild(userDiv);
    }

    /**
     * Method to set the global context for the app to be shared with sub objects
     * @returns {void}
     * @memberof VoluGameApp
     */
    setGlobalCtx() {
        this.ctx = {
            app: this,
            name: this.name,
            scene: this.scene,
            camera: this.camera,
            renderer: this.renderer,
            game: this.game,
            server: this.server,
        };
    }

    /**
     * Method to send out the start game event to the server
     * @returns {void}
     * @memberof VoluGameApp
     */
    sendoutStartGame() {
        this.server.broadcastStartGame();
    }

    /**
     * Method to load the game object and update the gui to remove waiting elements
     * @returns {void}
     * @memberof VoluGameApp
     */
    loadGame() {
        const waiting = document.getElementById('waiting');
        waiting.style.display = 'none';
        this.game = new VoluGameObject(this.ctx);
    }

    /**
     * Method to set the frame callback to be called on each frame render
     * @public
     * @param {function} callback - The callback to call on each frame render
     * @returns {void}
     */
    setFrameCallback(callback) {
        this.frameCallback = callback;
    }
}

customElements.define('volu-game', VoluGameApp);


/**
 * Class representing the compartmentalized game object
 * @class VoluGameObject
 * @example
 * const game = new VoluGameObject(ctx);
 * @memberof VoluGameApp
 * @param {object} ctx - The global context object for the app
 * @param {object} ctx.app - The app object
 */
class VoluGameObject  {
    state = 'loading';
    render = null;
    server = null;
    scene = null;
    points = 0;
    scoreboard = null;
    missed = 0;
    gameMechanics = {
        fallingCharacters: [],
        startingChars: 3,
        fallingSpeed: 0.001,
        startingy: 3,
    }
    remoteUsersChars = {};
    userVideos = {};
    constructor(ctx) {
        this.ctx = ctx;
        this.render = this.ctx.renderer;
        this.server = this.ctx.server;
        this.scene = this.ctx.scene;
        this.setGameState('loading');
    }

    /**
     * Method to handle object state changes and easily ready state change progression centrally
     * @param {string} newState - The new state to set the object to
     * @returns {Promise} - A promise that resolves when the state change is complete
     * @example
     * this.setGameState('ready');
     * @memberof VoluGameObject
     */
    async setGameState(newState) {
        this.state = newState;

        switch (newState) {
            case 'loading':
                this.setupListeners();
                this.setGameState('startgame');
                break;
            case 'startgame':
                this.startGame();
                this.setGameState('playing');
                break;
            case 'playing':
                break;
            case 'gameover':
                this.drawGameOverMenu();
                break;
        }
    }

    /**
     * Method to setup the listeners for the game object
     * @returns {void}
     * @memberof VoluGameObject
     */
    setupListeners() {
        this.server.on('gameupdate', this.gameUpdateCallback.bind(this));
    }

    /**
     * Method to handle the game update event from the p2p users
     * @param {object} data - The game update data object from the server {uid: string, data: {score: number, characters: [{char: string, position: {x: number, y: number, z: number}}]}}
     * @returns {void}
     * @memberof VoluGameObject
     */
    gameUpdateCallback(data) {
        const remoteChars = data.data.characters;
        const userId = data.uid;
        if(!this.remoteUsersChars[userId]) {
            this.remoteUsersChars[userId] = {};
            this.drawRemoteUsersChars(userId, remoteChars);
            return;
        }
        this.drawRemoteUsersChars(userId, remoteChars);
    }

    /**
     * Method to draw the remote users characters
     * @param {string} uid - The uid of the remote user
     * @param {array} chars - The array of characters to draw
     * @returns {void}
     * @memberof VoluGameObject
     */
    drawRemoteUsersChars(uid, chars) {
        chars.forEach((char) => {
            if(this.remoteUsersChars[uid][char.uid]) {
                this.remoteUsersChars[uid][char.uid].position.x = char.position.x;
                this.remoteUsersChars[uid][char.uid].position.y = char.position.y;
                this.remoteUsersChars[uid][char.uid].position.z = char.position.z;
            } else {
                this.addRemoteUserChar(uid, char);
            }
        });
        for (const [key, value] of Object.entries(this.remoteUsersChars[uid])) {
            const char = chars.find((char) => {
                return char.uid == key;
            });
            if(!char) {
                this.scene.remove(value);
                delete this.remoteUsersChars[uid][key];
            }
        }
    }

    /**
     * Method to add a remote users character to the scene
     * @param {string} uid - The uid of the remote user
     * @param {object} char - The character object to add to the scene
     * @returns {void}
     * @memberof VoluGameObject
     */
    addRemoteUserChar(uid, char) {
        const character = new Text();
        this.scene.add(character);
        const keyChar = char.char;
        character.text = keyChar;
        character.fontSize = 0.2;
        character.position.x = char.position.x;
        character.position.y = char.position.y;
        character.position.z = char.position.z;
        character.color = 0x9966FF;
        character.sync();
        this.remoteUsersChars[uid][char.uid] = character;
    }

    /**
     * Method to draw the game over menu
     * @returns {void}
     * @memberof VoluGameObject
     */
    drawGameOverMenu() {
        const gameOver = document.getElementById('gameover');
        gameOver.style.display = 'block';
        const finalScore = document.getElementById('finalscore');
        finalScore.innerText = Math.round(this.points);
    }

    /**
     * Method to start the game
     * @returns {void}
     * @memberof VoluGameObject
     */
    startGame() {
        this.ctx.app.setFrameCallback(this.frameCallback.bind(this));
        window.addEventListener('keydown', this.keydownCallback.bind(this));
        // Generate a random color for me in hex
        this.myColor = Math.floor(Math.random()*16777215).toString(16);
        this.startGameLoop();
    }

    /**
     * 
     * Method to start the game render loop and initialize the first few falling characters
     * @returns {void}
     * @memberof VoluGameObject
     */
    startGameLoop() {
        this.initUserVideo();
        this.initFallingCharacters(3); 
        this.startIncrease();
        this.updateRemoteUsers();
    }

    /**
     * Method to initialize the user videos into the scene 
     * @returns {void}
     * @memberof VoluGameObject
     */
    initUserVideo() {
        //loop through all users in server.users adding there video in 
        const users = this.server.users;
        for (const [key, value] of Object.entries(users)) {
            if(value.stream) {
                this.addUserVideo(key, value);
            }
        }
    }

    /**
     * Method to add a user video to the scene
     * @param {string} uid - The uid of the user
     * @param {object} user - The user object
     * @returns {void}
     * @memberof VoluGameObject
     */
    addUserVideo(uid, user) {
        //get the users video already showing and use that as the video texture then add it as plane texture
        // user video is at dom element ${data.uid}-video
        const videoElm = document.getElementById(`${uid}-video`);
        const texture = new THREE.VideoTexture(videoElm);
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.colorSpace = THREE.SRGBColorSpace;
        const geometry = new THREE.PlaneGeometry( 2, 2);
        const material = new THREE.MeshBasicMaterial( { map: texture } );
        const mesh = new THREE.Mesh( geometry, material );
        mesh.position.z = -3;
        mesh.position.y = 7;
        mesh.position.x = Math.random() * 10 - 5;
        this.userVideos[uid] = mesh;
        this.scene.add( mesh );
    }

    /**
     * Method to animate the user videos
     * @returns {void}
     * @memberof VoluGameObject
     */
    animateUserVideos() {
        for (const [key, value] of Object.entries(this.userVideos)) {
            let xChange = 0.01;
            if(!value.xdirection) {
                value.xdirection = xChange;
            }

            if(value.position.x > 3 && value.xdirection > 0) {
                value.xdirection = -xChange;
            }
            if(value.position.x < -3 && value.xdirection < 0) {
                value.xdirection = xChange;
            }
            value.position.x += value.xdirection;
        }
    }

    /**
     * Method to initialize a falling character
     * @returns {void}
     * @memberof VoluGameObject
     */
    initFallingCharacters(num) {
        for(let i = 0; i < num; i++) {
            this.initFallingCharacter();
        }
    }

    /**
     * Method to start the increase of the falling speed
     * @returns {void}
     * @memberof VoluGameObject
     */
    startIncrease() {
        setTimeout(() => {
            this.gameMechanics.fallingSpeed += 0.001;
            this.startIncrease();
        }, 500);
    }

    /**
     * Method to initialize a falling character
     * @returns {void}
     * @memberof VoluGameObject
     */
    initFallingCharacter() {
        const character = new Text();
        this.scene.add(character);
        const randomChar = String.fromCharCode(97 + Math.floor(Math.random() * 26));
        character.text = randomChar;
        const randomFontSize = Math.random() * 1.5 + 0.1;
        character.fontSize = randomFontSize;
        character.position.x = Math.random() * 10 - 5;
        const randomz = Math.random() * -2 + 2;
        character.position.z = randomz;
        character.position.y = this.gameMechanics.startingy;
        character.color = 0x00FF00;
        character.sync();
        const speed = Math.random() * 0.015 + 0.005;
        const characterObj = {
            character,
            speed: speed,
            points: 10000,
            uid: uuidv4()
        }
        this.gameMechanics.fallingCharacters.push(characterObj);
    }

    /**
     * Method to handle the frame callback for the game object
     * @returns {void}
     * @memberof VoluGameObject
     */
    frameCallback() {
        if(this.state == 'gameover') {
            this.ctx.app.setFrameCallback(null);
            return;
        }
        this.updateFallingCharacters();
        this.animateUserVideos();
    }

    /**
     * Method to update the falling characters
     * @returns {void}
     * @memberof VoluGameObject
     */
    updateFallingCharacters() {
        // Move all falling characters down
        this.gameMechanics.fallingCharacters.forEach((charObj) => {

            charObj.character.position.y -= charObj.speed + this.gameMechanics.fallingSpeed;
            charObj.points = charObj.points - (charObj.speed * 100);
            if(charObj.character.position.y < -4) {
                // Remove the character from the scene
                this.scene.remove(charObj.character);
                // Remove the character from the array
                this.gameMechanics.fallingCharacters.splice(this.gameMechanics.fallingCharacters.indexOf(charObj), 1);
                this.missed++;
                if(this.missed >= 3) {
                    this.setGameState('gameover');
                }
            }
        });
    }

    /**
     * Method to handle the keydown event for the game object
     * @param {object} event - The keydown event object
     * @returns {void}
     * @memberof VoluGameObject
     */
    keydownCallback(event) {
        const key = event.key;
        // Find the character with the lowest charObj.character.y position in this.gameMechanics.fallingCharacters
        if(this.gameMechanics.fallingCharacters.length != 0) {
            const charObj = this.gameMechanics.fallingCharacters.reduce((prev, current) => {
                return (prev.character.position.y < current.character.position.y) ? prev : current
            });
            if(charObj.character.text == key) {
                // Remove the character from the scene
                this.hitKey(charObj); 
            }
        }
    }

    /**
     * Method to handle the hit key game event 
     * @param {object} charObj - The character object that was hit
     * @returns {void}
     * @memberof VoluGameObject
     */
    hitKey(charObj) {
        charObj.character.color = 0xFF0000;
        charObj.character.sync();
        this.points += charObj.points;
        this.scene.remove(charObj.character);
        this.gameMechanics.fallingCharacters.splice(this.gameMechanics.fallingCharacters.indexOf(charObj), 1);
        this.initFallingCharacter();
        this.updateScore();
    }

    /**
     * Method to update the score in the GUI
     * @returns {void}
     * @memberof VoluGameObject
     */
    updateScore() {
        const points = document.getElementById('points');
        points.innerText = Math.round(this.points);
    }

    /**
     * Method to update the remote users with the game state
     * @returns {void}
     * @memberof VoluGameObject
     */
    updateRemoteUsers() {
        if(this.state == 'gameover') {
            return;
        }
        // map the charObj to [{char: charObj.character, position: {x,y,z} }]
        const remoteCharObjs = this.gameMechanics.fallingCharacters.map((charObj) => {
            return {uid: charObj.uid, char: charObj.character.text, position: {x: charObj.character.position.x, y: charObj.character.position.y, z: charObj.character.position.z}}
        });
        
        // send to server
        this.server.sendGameUpdateEvent(this.points, remoteCharObjs);
        setTimeout(() => {
            this.updateRemoteUsers();
        }, 50);
    }

}


