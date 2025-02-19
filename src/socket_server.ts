import http from "http";
import { Server } from "socket.io";
export default (server: http.Server) => {
  const io = new Server(server, {
    cors: {
      methods: ["GET", "POST"],
      allowedHeaders: ["my-custom-header"],
      credentials: true,
    },
  })
  io.on("connection", (socket) => {
    console.log("user connected");
    socket.on("join", (peerId,roomId,video) => {
        socket.join(roomId)
        console.log(peerId)
        console.log(video)
        socket.broadcast.to(roomId).emit("user-connected",peerId)
        socket.on("new-message",(writer,content)=>{
            socket.broadcast.to(roomId).emit("recieve-message",writer,content)
          })
        socket.on("disconnect",()=>{
            socket.broadcast.to(roomId).emit("user-leave",peerId)
            console.log("v-",peerId)
        })
      });
      
      
  });


  return io;
};
