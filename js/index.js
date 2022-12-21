import fns from "./utils.js"
const {$,$$} = fns
let user = JSON.parse(localStorage.getItem("user"))

$("h1").textContent = "Salom " +  user?.name
document.body.style.backgroundImage = "none"