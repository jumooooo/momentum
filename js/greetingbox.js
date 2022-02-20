const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const mainDisplay = document.querySelector(".main-display");
const mainGreeting = document.querySelector(".main-display span");

const savedUsername = localStorage.getItem("username");

mainGreeting.innerText = `Good evening, ${savedUsername}`;