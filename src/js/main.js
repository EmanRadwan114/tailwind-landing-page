const header = document.querySelector("header");
const menuBtn = document.querySelector(".menu-btn");
const menuIcon = document.getElementById("menu-icon");
const navItems = document.querySelector(".nav-items");
const themeBtn = document.querySelector(".theme-mode");
const themeIcon = document.querySelector(".theme-mode i");
const mainContainer = document.querySelector(".main-bg");
const mainContent = document.querySelector(".content");
const SignInForm = document.getElementById("Sign-in-form");
const SignInBtn = document.getElementById("Sign-in-btn");
const loginBtn = document.getElementById("login-btn");

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

// On page load or when changing themes
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  switchToDarkTheme();
}

function switchToDarkTheme() {
  themeIcon.className = "fa-solid fa-sun";
  themeBtn.classList.remove("light");
  mainContainer.classList.remove("light-theme");
  mainContent.classList.add("dark-theme");
  document.body.classList.add("dark");
  localStorage.theme = "dark";
}

function switchToLightTheme() {
  themeIcon.className = "fa-solid fa-moon";
  themeBtn.classList.add("light");
  mainContainer.classList.add("light-theme");
  mainContent.classList.remove("dark-theme");
  document.body.classList.remove("dark");
  localStorage.theme = "light";
}

themeBtn.addEventListener("click", function () {
  if (this.classList.contains("light")) {
    switchToDarkTheme();
  } else {
    switchToLightTheme();
  }
});

SignInForm?.addEventListener("submit", (e) => {
  e.preventDefault();
});
