const todoForm = document.querySelector(".todo_form");
const todoInput = todoForm.querySelector("input")
const todoList = document.querySelector(".todo_list");

todoForm.addEventListener("submit", todoSubmit);

function paintTodo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);
    span.innerText = newTodo;
    todoList.appendChild(li);
}

function todoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    paintTodo(newTodo);
}