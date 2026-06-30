let todos = [];

function addTodo() {

    let input = document.getElementById("todoInput");

    if (input.value === "") {
        alert("Please Enter Todo");
        return;
    }

    todos.push(input.value);

    input.value = "";

    displayTodo();

}

function displayTodo() {

    let list = document.getElementById("todoList");

    list.innerHTML = "";

    todos.forEach((todo, index) => {

        list.innerHTML += `

<li>

<span>${todo}</span>

<div class="actions">

<button class="edit" onclick="editTodo(${index})">
Edit
</button>

<button class="delete" onclick="deleteTodo(${index})">
Delete
</button>

</div>

</li>

`;

    });

}

function deleteTodo(index) {

    todos.splice(index, 1);

    displayTodo();

}

function editTodo(index) {

    let newTodo = prompt("Edit Todo", todos[index]);

    if (newTodo !== null && newTodo != "") {

        todos[index] = newTodo;

        displayTodo();

    }

}