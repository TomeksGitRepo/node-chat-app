const path = require("path");
const express = require("express");
const socketIO = require("socket.io");
const http = require("http");

const publicPath = path.join(__dirname, "../public");
const port = process.env.PORT || 3000;
let app = express();
var server = http.createServer(app);
let io = socketIO(server);

app.use(express.static(publicPath));

io.on("connection", socket => {
  console.log("New user connected");

  socket.emit('newMessage', {
      from: 'miki@example.com',
      text: 'See you then',
      createdAt: 1231231
  });

 socket.on('createMessage', (message) => {
    console.log('createMessage', message)
 });

  socket.on("disconnect", () => {
    console.log("User disconnected.");
  });
});



server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
