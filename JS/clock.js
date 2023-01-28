const clock1 = document.querySelector(".clock1");
const clock2 = document.querySelector(".clock2");

function clock_now() {
    const date = new Date();
    const day = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednsday",
        "Thursday",
        "Friday",
        "Saturday"
    ]
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock1.innerText = `${date.getFullYear()}. ${date.getMonth()+1}. ${date.getDate()}. ${day[date.getDay()]}`;
    clock2.innerText = `${hours}:${minutes}:${seconds}`;
}

setInterval(clock_now, 1000);