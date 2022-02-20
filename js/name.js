const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const mainDisplay = document.querySelector(".main-display");
const mainGreeting = document.querySelector(".main-display span");

const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  location.href="watch.html";
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  location.href="watch.html";
}