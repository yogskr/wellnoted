"use strict";

// NOTE: navbar fixed
const header = document.querySelector("header");
const fixedNav = header.offsetTop;

window.onscroll = () => {
  if (window.scrollY > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// NOTE: scroll up button
const scrollBtn = document.querySelector("#scroll-button");
const bodyElement = document.body;
const docElement = document.documentElement;
const showOnPx = 800;

const scrollContainer = () => {
  return docElement || bodyElement;
};

document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showOnPx) {
    scrollBtn.classList.remove("hidden");
  } else {
    scrollBtn.classList.add("hidden");
  }
});

// NOTE: go back to top when the scroll button is clicked
scrollBtn.addEventListener("click", () => {
  bodyElement.scrollIntoView();
});
