"use strict";

// navbar fixed

window.onscroll = () => {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.scrollY > fixedNav) {
    header.classList.add("navbar-fixed");
    dropDownMenu.classList.add("dropdownmenu-scroll");
  } else {
    header.classList.remove("navbar-fixed");
    dropDownMenu.classList.remove("dropdownmenu-scroll");
  }
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const dropDownMenu = document.querySelector("#dropdown-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
  dropDownMenu.classList.toggle("hidden");
});
