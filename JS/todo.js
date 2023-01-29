const todoForm = document.querySelector(".todo_form");
const todoInput = todoForm.querySelector("input")
const todoList = document.querySelector(".todo_list");

todoForm.addEventListener("submit", todoSubmit);

function paintTodo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", todoErase)
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newTodo;
    todoList.appendChild(li);
}

function todoErase(event) {
    const li = event.target.parentElement;
    li.remove();
}

function todoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    paintTodo(newTodo);
}