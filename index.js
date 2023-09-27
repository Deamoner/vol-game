const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');
const cors = require('cors');
const { on } = require('node:events');
const app = express();
const server = createServer(app);
const io = new Server(server, {
    cors: {
      origin: '*',
    }
});
app.use(cors())

app.use(express.static(join(__dirname, './client/dist')))

let onlineUsers = {};

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('joinprofile', (data) => {
        socket.profile = data;
        onlineUsers[socket.id] = data;
        io.emit('userjoin', { uid: socket.id, profile: data });
      });
    socket.on('getroster', () => {
        console.log('got roster')
        socket.emit('roster', { roster: onlineUsers });
    });
    socket.on('disconnect', () => {
        delete onlineUsers[socket.id];
        io.emit('userleft', { uid: socket.id });
    });
});

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});