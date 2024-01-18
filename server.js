const { Server } = require('socket.io')
const express = require('express')
const http = require('http')
const app = express()
const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: '*',
    }
})
server.listen(5000, () => {
    console.log('servidor ta ouvindo no 5000')
})


io.on('connection', (socket) => {
    console.log('A user connected with id:', socket.id);

    socket.on('disconnect', () => {
        console.log('User disconnected with id:', socket.id);
    });

   
});