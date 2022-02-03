const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const menuList = hamburger.addEventListener("click", openMenu);

function openMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

/*
const navLink = document.getElementsByClassName("nav__link");
Array.from(navLink).forEach((n) => n.addEventListener("click", closeMenu));
*/

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

function openTnjMenu() {}

function opemCodexMenu() {}
