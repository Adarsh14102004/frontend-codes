const socket = io();
console.log("connected");

let btn = document.querySelector(".login-btn");

let Inp = document.querySelector(".username");

let login = document.querySelector(".login");

let chatapplication = document.querySelector(".chat-application");
btn.addEventListener("click", () => {
    let username = inp.value.trim();

    if (username.length > 0) {
        socket.emit("newuser", {
            socketId: socket.id,
            name: username
        });
    } else {
        alert("Please enter your username");
    }
});
socket.on("useradded", ({ msg, username, clients, clientCount }) => {

    if (clientCount) {
        document.querySelector(".active-users")
            .innerText = clientCount;
    }

    login.style.display = "none";
    chatapplication.style.display = "block";

    let currentuser = document.querySelector(".current-user");
    currentuser.innerText = username;

});
document.querySelector(".send-button")
    .addEventListener("click", () => {

        let message = document.querySelector(".message-input").value.trim();

        if (message.length > 0) {

            socket.emit("newmsg", {
                socketId: socket.id,
                msg: message
            });

            document.querySelector(".message-input").value = "";
        }

    });
socket.broadcast.emit("updatedetails", {
    msg: "New user added",
    clients,
    clientCount: clients.length
});



socket.on("newmsg", ({ socketId, msg }) => {

    io.emit("msgreceived", {
        msg,
        username: userMap[socketId],
        socketId: socket.id,
        clientCount: io.engine.clientCount
    });

});


server.listen(3000);