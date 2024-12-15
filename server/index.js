const http = require("http");
const express = require("express");
const cors = require("cors");
const socketIo = require("socket.io");

const app = express();
const port = 4500 || process.env.PORT;

app.get("/", (req, res) => {
    res.send("Server is working")
});

app.use(cors());

const server = http.createServer(app);
const io = socketIo(server);
const users = [{}]
io.on("connection", (socket) => {
    console.log("Connection is on");

    socket.on("joined", ({name}) => { 
        users[socket.id] = name 
        console.log(`${name} has joined`);
        socket.broadcast.emit("broadcast", {user:"Admin", message:`${users[socket.id]} User has joined`})


    });

    socket.emit("welcome", {user:"Admin", message:'Welcome to the chat'})
    socket.on("disconnect",() => {
        socket.broadcast.emit("leave", {user:"Admin", message:`${users[socket.id]} left`})
        console.log("user left")
}
    )
});

server.listen(port, () => {
    console.log(`Server is working at port http://localhost:${port}`);
});
