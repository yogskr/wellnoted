"use strict";

// Grab Elements
const hamburgerBtn = document.getElementById("hamburger-btn");
const closeBtn = document.getElementById("close-btn");
const searchBtn = document.getElementById("search-btn");

const selectElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) return element;
  throw new Error(
    `Something went wrong, make sure that ${selector} exists or is typed correctly.`
  );
};

// Toggle the dark/light theme and add to local storage
const bodyElement = document.body;
const headerElement = selectElement("#header");
const searchBox = selectElement(".search-box");
const themeToggleBtn = selectElement("#theme-toggle-btn");
const currentTheme = localStorage.getItem("currentTheme");

if (currentTheme) {
  bodyElement.classList.add("dark-theme");
  headerElement.classList.add("dark-theme");
  searchBox.classList.add("dark-theme");
}

themeToggleBtn.addEventListener("click", () => {
  bodyElement.classList.toggle("dark-theme");
  headerElement.classList.toggle("dark-theme");
  searchBox.classList.toggle("dark-theme");

  if (
    bodyElement.classList.contains("dark-theme") &&
    headerElement.classList.contains("dark-theme") &&
    searchBox.classList.contains("dark-theme")
  ) {
    localStorage.setItem("currentTheme", "themeActive");
  } else {
    localStorage.removeItem("currentTheme");
  }
});
