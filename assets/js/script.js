"use strict";

// Grab Elements
const selectElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) return element;
  throw new Error(
    `Something went wrong, make sure that ${selector} exists or is typed correctly.`
  );
};

// Nav styles on scroll
const scrollHeader = () => {
  if (this.scrollY >= 15) {
    headerElement.classList.add("activated");
  } else {
    headerElement.classList.remove("activated");
  }
};

window.addEventListener("scroll", scrollHeader);

// Open the hamburger menu, toggle the hamburger menu icon with the close menu icon
const hamburgerBtn = selectElement("#hamburger-btn");
const closeBtn = selectElement("#close-btn");
const menuShow = selectElement(".menu-show");

const toggleMenuBtn = () => {
  hamburgerBtn.classList.toggle("active");
  closeBtn.classList.toggle("active");
  menuShow.classList.toggle("active");
};

hamburgerBtn.addEventListener("click", toggleMenuBtn);

closeBtn.addEventListener("click", toggleMenuBtn);

// Toggle the dark/light theme and add to local storage
const bodyElement = document.body;
const headerElement = selectElement("#header");
const themeToggleBtn = selectElement("#theme-toggle-btn");
// const menuBarItems = document.querySelectorAll(".menu-bar-items");
// const heroText = selectElement(".hero-text");

const currentTheme = localStorage.getItem("currentTheme");

if (currentTheme) {
  bodyElement.classList.add("dark-theme");
  headerElement.classList.add("dark-theme");
  // menuBarItems.forEach((menuBarItems) => {
  //   menuBarItems.classList.add("dark-theme");
  // });
  // heroText.classList.add("dark-theme");
}

themeToggleBtn.addEventListener("click", () => {
  bodyElement.classList.toggle("dark-theme");
  headerElement.classList.toggle("dark-theme");
  // heroText.classList.toggle("dark-theme");

  if (
    bodyElement.classList.contains("dark-theme") &&
    headerElement.classList.contains("dark-theme")
  ) {
    localStorage.setItem("currentTheme", "themeActive");
  } else {
    localStorage.removeItem("currentTheme");
  }
});
