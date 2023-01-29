const loginForm = document.querySelector(".login-form");
const loginScreen = document.querySelector(".login-screen");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

const HiddenClassName = "hidden";

const SavedUserId = localStorage.getItem("UserId");

const welcome = document.querySelector(".welcome");
const show_off = document.querySelector(".show_off");

if (SavedUserId === null) {
    //로컬스토리지에 사용지 ID가 없을경우
    loginScreen.classList.remove(HiddenClassName);
    loginButton.addEventListener("click", loginButtonClick);
    function loginButtonClick(event) {
        const UserId = loginInput.value;
        localStorage.setItem("UserId", UserId);
        welcome.innerText = `Welcome ${UserId}`;
        loginScreen.classList.add(HiddenClassName);
        show_off.classList.remove(HiddenClassName);
    }
} else {
    //로컬스토리지에 사용자 ID가 있음 -> welcome화면 
    welcome.innerText = `Welcome ${SavedUserId}`;
    show_off.classList.remove(HiddenClassName);
}