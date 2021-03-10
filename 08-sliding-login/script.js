const loginBtn = document.querySelectorAll(".login-btn");
const registerBtn = document.querySelectorAll(".register-btn");
const lostPassBtn = document.querySelectorAll(".lost-pass-btn");
const box = document.querySelector(".box");
const loginForm = document.querySelector(".login-form");
const registerForm = document.querySelector(".register-form");
const lostPasswordForm = document.querySelector(".lost-password-form");

registerBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    box.classList.add("slide-active");
    registerForm.classList.remove("form-hidden");
    loginForm.classList.add("form-hidden");

  })
})

loginBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    box.classList.remove("slide-active");
    registerForm.classList.add("form-hidden");
    loginForm.classList.remove("form-hidden");
  })
})