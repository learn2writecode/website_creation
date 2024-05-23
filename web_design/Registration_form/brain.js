let btnLogin = document.getElementById("login");
let btnSignUp = document.getElementById("SignUp");

let SignIn = document.querySelector(".SignIn");
let SignUp = document.querySelector(".SignUn");

btnLogin.onclick = function () {
  SignIn.classList.add("active");
  SignIn.classList.add("inactive");
};

btnSignUp.onclick = function () {
  SignIn.classList.remove("active");
  SignIn.classList.remove("inActive");
};
