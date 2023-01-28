const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

const HiddenClassName = "hidden";

function loginButtonClick(event) {
    event.preventDefault();
    const UserId = loginInput.value;
    localStorage.setItem("UserId", UserId);
    welcome.innerText = `Welcome ${UserId}`;

}

const SavedUserID = localStorage.getItem("UserId");

const welcome = document.querySelector(".welcome");

if (SavedUserID === null) {
    //로컬스토리지에 사용지 ID가 없을경우
    loginForm.classList.remove(HiddenClassName);
    loginButton.addEventListener("click", loginButtonClick);
} else {
    //로컬스토리지에 사용자 ID가 있음 -> welcome화면 
    welcome.innerText = `Welcome ${SavedUserID}`;
    welcome.classList.remove(HiddenClassName);
}