import express from 'express';
import http from 'http';
import { Server as SocketIOServer } from 'socket.io';

// Import express, http, and socket.io for creating a server and enabling real-time communication

const app = express();
const server = http.createServer(app);
const io = new SocketIOServer(server);

// Listen for client connections
io.on('connection', (socket) => {
    console.log('A user connected');

    // Listen for 'chat' messages from the client
    socket.on('chat', (message: string) => {
        io.emit('chat', message);
    });

    // Listen for user disconnection events
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

// Listen on the specified port
server.listen(5174, () => console.log('Server is running on port 5174'));