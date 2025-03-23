const header = document.querySelector("header");
const menuBtn = document.querySelector(".menu-btn");
const menuIcon = document.getElementById("menu-icon");
const navItems = document.querySelector(".nav-items");
const themeBtn = document.querySelector(".theme-mode");
const themeIcon = document.querySelector(".theme-mode i");
const mainContainer = document.querySelector(".main-bg");
const mainContent = document.querySelector(".content");

function showMenu() {
  header.classList.add("bg-purple-200", "nav-dark-theme", "menu");
  menuBtn.classList.toggle("closed");
  navItems.classList.toggle("hidden");
  menuIcon.className = "fa-solid fa-xmark pe-3";
  document.body.classList.add("overflow-hidden");
}

function hideMenu() {
  header.classList.remove("bg-purple-200", "nav-dark-theme", "menu");
  menuBtn.classList.toggle("closed");
  navItems.classList.toggle("hidden");
  menuIcon.className = "fa-solid fa-bars";
  document.body.classList.remove("overflow-hidden");
}

menuBtn.addEventListener("click", function () {
  if (this.classList.contains("closed")) {
    showMenu();
  } else {
    hideMenu();
  }
});

function switchThemeMode() {
  if (this.classList.contains("light")) {
    themeIcon.className = "fa-solid fa-sun";
    this.classList.toggle("light");
    mainContainer.classList.remove("light-theme");
    mainContent.classList.add("dark-theme");
    document.body.classList.toggle("dark");
  } else {
    themeIcon.className = "fa-solid fa-moon";
    this.classList.toggle("light");
    mainContainer.classList.add("light-theme");
    mainContent.classList.remove("dark-theme");
    document.body.classList.toggle("dark");
  }
}

themeBtn.addEventListener("click", switchThemeMode);
