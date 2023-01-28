const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

const HiddenClassName = "hidden";

const SavedUserID = localStorage.getItem("UserId");

const welcome = document.querySelector(".welcome");
const show_off = document.querySelector(".show_off");

if (SavedUserID === null) {
    //로컬스토리지에 사용지 ID가 없을경우
    loginForm.classList.remove(HiddenClassName);
    loginButton.addEventListener("click", loginButtonClick);
    function loginButtonClick(event) {
        event.preventDefault();
        const UserId = loginInput.value;
        localStorage.setItem("UserId", UserId);
        welcome.innerText = `Welcome ${UserId}`;
        loginForm.classList.add(HiddenClassName);
        welcome.classList.remove(HiddenClassName);
    }
} else {
    //로컬스토리지에 사용자 ID가 있음 -> welcome화면 
    welcome.innerText = `Welcome ${SavedUserID}`;
    show_off.classList.remove(HiddenClassName);
}