"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_1 = require("socket.io");
exports.default = (server) => {
    const io = new socket_io_1.Server(server, {
        cors: {
            methods: ["GET", "POST"],
            allowedHeaders: ["my-custom-header"],
            credentials: true,
        },
    });
    io.on("connection", (socket) => {
        console.log("user connected");
        socket.on("join", (peerId, roomId, video) => {
            socket.join(roomId);
            console.log(peerId);
            console.log(video);
            socket.broadcast.to(roomId).emit("user-connected", peerId);
        });
    });
    return io;
};
