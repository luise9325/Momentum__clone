const todoForm = document.querySelector(".todo_form");
const todoInput = todoForm.querySelector("input")
const todoList = document.querySelector(".todo_list");

let Todos = [];
// newTodo가 여기 array에 들어감 2

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(Todos));
    //Todos array에 들어있는 newTodo를 localStorage에 todos라는 key값으로 stringify해서 저장함 3
}

todoForm.addEventListener("submit", todoSubmit);

function paintTodo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", todoErase)
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newTodo.text;
    todoList.appendChild(li);
}

function todoErase(event) {
    const li = event.target.parentElement;
    li.remove();
}

function todoSubmit(event) {
    event.preventDefault();
    //로컬스토리지에 들어가는 todo를 cosnt로 선언해서 TODO_KEY를 만들면 preventDefault가 오류남 -> ??
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoOBJ = {
        text: newTodo,
        id: Date.now(),
    }
    Todos.push(newTodoOBJ);
    //Todos라는 array에다 newTodo라는 todoInput.value를 집어넣음 1
    saveTodos();
    //로컬에 newTodo를 넣기위해 펑션호출
    paintTodo(newTodoOBJ);
}

const savedTodos = localStorage.getItem("todos");
//로컬스토리지에서 todos라는 키값을 가진것을 savedTodos에 넣음 4

if(savedTodos !== null) {
    // savedTodos가 비어있다면 -> 로컬스토리지에 todos를 키값으로 가진 게 없지 않다면 5
    const parsedTodos = JSON.parse(savedTodos);
    Todos = parsedTodos
    // Todos array를 업데이트 함 (이전에 로컬에있던 값들을 array에 넣어줌)
    parsedTodos.forEach(paintTodo);
}