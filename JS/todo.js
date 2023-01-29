const todoForm = document.querySelector(".todo_form");
const todoInput = todoForm.querySelector("input")
const todoList = document.querySelector(".todo_list");

todoForm.addEventListener("submit", todoSubmit);

function todoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    paintTodo(newTodo);
}

function paintTodo(newTodo) {

}