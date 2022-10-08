const imagesList = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
];

const imageNow = imagesList[Math.floor(Math.random() * imagesList.length)];
const background = document.createElement("img");
background.src = `img/${imageNow}`;

document.body.appendChild(background);