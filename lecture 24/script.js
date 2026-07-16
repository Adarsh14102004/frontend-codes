loadtodos();

async function loadtodos() {
    const response = await fetch("/todos");
    const todos = await response.json();

    const div = document.getElementById("todos");
    div.innerHTML = "";

    todos.forEach(todo => {
        div.innerHTML += `
        <div>
            <span>${todo.title}</span>

            <div>
                <button onclick="edittodo('${todo._id}','${todo.title}')">
                    Edit
                </button>

                <button onclick="deletetodo('${todo._id}')">
                    Delete
                </button>
            </div>
        </div>
        `;
    });
}