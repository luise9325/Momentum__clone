const API_KEY = "42272d3aafa021ed1d88066da537bf71";

function GeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    //api사이트에서 계정 승인확인중~
    fetch(url).then(response => response.json()).then(data => {
        const weatherContainer = document.querySelector(".weather span:first-child");
        const cityContainer = document.querySelector(".weather span:last-child");
        cityContainer.innerText = data.name;
        weatherContainer.innerText = `${data.weather[0].main} / ${data.main.temp}deg`;
    });
}
function GeoError() {
    alert("Can't find you");
}

navigator.geolocation.getCurrentPosition(GeoOk, GeoError);

