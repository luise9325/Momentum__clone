const loginForm = document.querySelector(".login-form");
const loginScreen = document.querySelector(".login-screen");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

const HiddenClassName = "hidden";
const FlexClassName = "flex";
const Flex2ClassName = "flex2";

const SavedUserId = localStorage.getItem("UserId");

const welcome = document.querySelector(".welcome");
const show_off = document.querySelector(".show_off");

const open_id = document.querySelector(".open_id");
const open_id2 = document.querySelector(".open_id2");
const open_id3 = document.querySelector(".open_id3");

const todoBox = document.querySelector(".todo_box");

if (SavedUserId === null) {
    //로컬스토리지에 사용지 ID가 없을경우
    open_id.classList.add(HiddenClassName);
    open_id2.classList.add(HiddenClassName);
    todoBox.classList.add(HiddenClassName);
    loginScreen.classList.remove(HiddenClassName);
    loginScreen.classList.add(Flex2ClassName);
    loginButton.addEventListener("click", loginButtonClick);
    function loginButtonClick(event) {
        open_id.classList.remove(HiddenClassName);
        open_id2.classList.remove(HiddenClassName);
        todoBox.classList.remove(HiddenClassName);
        const UserId = loginInput.value;
        localStorage.setItem("UserId", UserId);
        open_id3.innerText = UserId;
        welcome.innerText = `WELCOME ${UserId}`;
        loginScreen.classList.add(HiddenClassName);
        loginScreen.classList.remove(FlexClassName);
        show_off.classList.remove(HiddenClassName);
        show_off.classList.add(FlexClassName);
        document.body.appendChild(bgBike);
    }
} else {
    //로컬스토리지에 사용자 ID가 있음 -> welcome화면 
    open_id3.innerText = SavedUserId;
    welcome.innerText = `WELCOME ${SavedUserId}`;
    show_off.classList.remove(HiddenClassName);
    show_off.classList.add(FlexClassName);
    document.body.appendChild(bgBike);
}