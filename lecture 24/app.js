// const express = require("express");
// const sequelize = require("./config/db.js");
// const student = require("./model/model.js");
// const connection = require("./connection/connection.js");

// async function start() {
//     await connection();

//     await sequelize.sync({ force: true });

//     await student.create({
//         name: "Divya",
//         age: 25
//     });
//     await student.update({ age: 26 }, {
//         where: {
//             name: "ADS"
//         }
//     });


//     const data = await student.findAll();
   console.log(data);
// }

// start();
//APP.JS MAI LIKHNA HAI ISKE NIHE VALA
const express = require("express");
const app = express();

const http = require("http");
const server = http.createServer(app);

const io = require("socket.io")(server);

app.use(express.static("public"));
app.use(express.json());
let userMap = {};

io.on("connection", (socket) => {
    console.log(io.engine.clientsCount);

    socket.on("newuser", async(socketId, name) => {
        userMap[socket.id] = name;

        let clients = [];
        let sockets = await io.fetchSockets();

        sockets.forEach((c) => {
            if (userMap[c.id]) {
                clients.push({
                    id: c.id,
                    name: userMap[c.id]
                });
            }
        });
    });
});
socket.emit("useradded", {
    msg: "User added successfully",
    username: userMap[socket.id],
    clients,
    clientCount: clients.length
});

socket.broadcast.emit("updatedetails", {
    msg: "New user added",
    clients,
    clientCount: clients.length
})