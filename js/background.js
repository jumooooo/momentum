const images = ["0.jpeg", "1.jpeg", "2.jpeg"];
const chosenImage = `${Math.floor(Math.random() * images.length)}`;

document.body.style.backgroundImage = `url(img/${chosenImage}.jpeg)`;