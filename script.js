const button = document.querySelector("#welcomeButton");
const message = document.querySelector("#message");

button.addEventListener("click", () => {
  message.textContent = "Welcome! My feature branch works.";
});