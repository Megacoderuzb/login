import fns from "./utils.js";
const { $, $$ } = fns;

let user = JSON.parse(localStorage.getItem("user"));

if (user) {
  window.location.replace("./index.html");
}

$(".login-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const user = users.find(
    (el) =>
      el.username === $(".login-input").value &&
      el.password === $(".password-input").value
  );

  if (user) {
    window.localStorage.setItem("user", JSON.stringify(user));
    window.location.replace("./index.html");
  } else {
    $(".xato").classList.remove("d-none");
  }
});
let inputs = $(".login-input");
let input2 = $(".password-input");

inputs.addEventListener("focus", (e) => {
  e.preventDefault();
  $(".xato").classList.add("d-none");
});
input2.addEventListener("focus", (e) => {
  e.preventDefault();
  $(".xato").classList.add("d-none");
});
