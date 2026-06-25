function addTask() {

    let input = document.getElementById("taskInput");
    let task = input.value.trim();

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = `
        ${task}
        <button class="delete-btn">Delete</button>
    `;

    li.querySelector("button").addEventListener("click", function() {
        li.remove();
    });

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}

// BOM Features

document.getElementById("browser").innerHTML =
    "Browser: " + navigator.userAgent;

document.getElementById("screen").innerHTML =
    "Screen Size: " + screen.width + " x " + screen.height;

function updateTime() {
    let now = new Date();
    document.getElementById("time").innerHTML =
        "Current Time: " + now.toLocaleTimeString();
}

setInterval(updateTime, 1000);
updateTime();

window.onload = function() {
    alert("Welcome to DOM & BOM Task Manager!");
};