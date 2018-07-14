var socket = io();

socket.on("connect", function() {
  console.log("Connected to server.");

  socket.emit("createMessage", {
    from: "Andrew",
    text: "Yup, this works for me"
  });
});
socket.on("disconnect", function() {
  console.log("Disconneced from server.");
});

socket.on("newMessage", function(message) {
  console.log("newMessage", message);
});
