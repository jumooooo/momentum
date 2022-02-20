const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const greetings = document.querySelector(".greetings");
const mainGreeting = document.querySelector(".main-display span");

const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  const savedUsername = localStorage.getItem(USERNAME_KEY);
  mainGreeting.innerText = `Good evening, ${savedUsername}`;
  loginForm.classList.add("hidden");
  greetings.classList.remove("hidden");
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  mainGreeting.innerText = `Good evening, ${savedUsername}`;
  loginForm.classList.add("hidden");
  greetings.classList.remove("hidden");
}

