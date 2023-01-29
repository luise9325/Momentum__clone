const bikes = [
    "cbr1000rr.png"
]

const chosenBike = bikes[Math.floor(Math.random() * bikes.length)];

const bgBike = document.createElement("img");

bgBike.src = `ext/${chosenBike}`;

const bikeClassName = "bike";

bgBike.classList.add(bikeClassName);

//img생성은 로그인 된 상태에서만 하기위해 welcome.js에서 조건 해당할때만 img생성하게함