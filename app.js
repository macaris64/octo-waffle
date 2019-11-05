const http = require('http');
const socketio = require('socket.io');
const server = http.createServer((req, res) => {
    res.end('hey!');
});
server.listen(3000);

const io = socketio.listen(server);
io.sockets.on('connection', (socket) => {
    console.log('User Connected!');

    socket.on('disconnect', () => {
        console.log('User Disconnected');
    });
});