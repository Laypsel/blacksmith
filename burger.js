let hamburger = document.querySelector(".menu_burger") 
let menu = document.querySelector(".menu_list")
let body = document.querySelector("body")

hamburger.onclick = function () {
  body.classList.toggle ("noscroll")
  menu.classList.toggle ("active-burger")
  hamburger.classList.toggle ("menu-burger-open")
}