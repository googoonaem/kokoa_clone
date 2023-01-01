const socket = io("/");

const sendMessage = (message) => {
  socket.emit("newMessage", { message: message });
  console.log(`You: ${message}`);
};
const setNickname = (nick) => {
  socket.emit("setNickname", { nickname: nick });
  console.log(`your name is ${nick}. set finished`);
};

const handleMessageNotif = (data) => {
  const { message, nickname } = data;
  console.log(`${nickname}: ${message}`);
};

socket.on("messageNotif", handleMessageNotif);
