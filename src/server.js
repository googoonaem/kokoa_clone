import express from "express";
import { join } from "path";
import socketIO from "socket.io";

const PORT = 4000;
const app = express();

app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));
app.use(express.static(join(__dirname, "static")));
app.get("/", (req, res) => res.render("home"));

const handleListening = () =>
  console.log(`Server running: http://localhost:${PORT}!!!`);

const server = app.listen(PORT, handleListening);

const io = socketIO(server);

let sockets = [];

io.on("connection", (socket) => {
  socket.on("newMessage", ({message}) => {
    socket.broadcast.emit("messageNotif", { 
      message,
      nickname: socket.nickname || "anonymous",
    });
  });
  socket.on("setNickname", ({nickname}) => {
    socket.nickname = nickname;
  });
});
