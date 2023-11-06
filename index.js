"use strict";

const menuIcon = document.querySelector(".menu-icon");
const menuList = document.querySelector("nav");
const hamburgerIcon = document.querySelector(".fa-bars");
const modalDiv = document.querySelector(".message-modal");
const modalParagraph = document.createElement("p");
const submitBtn = document.querySelector(".submit-btn");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const textArea = document.querySelector("#text-area");

const divTimeOut = () => {
  setTimeout(() => {
    modalDiv.style.display = "none";
    modalDiv.classList.add("text-blur-out");
    modalDiv.classList.remove("div-focus-in");
  }, 2000);
};

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modalDiv.classList.add("div-focus-in");
  modalDiv.style.display = "block";
  console.log("clicked");
  nameInput.value = "";
  emailInput.value = "";
  textArea.value = "";

  divTimeOut();
});

menuIcon.addEventListener("click", () => {
  hamburgerIcon.classList.toggle("fa-times");
  menuList.style.display =
    menuList.style.display === "block" ? "none" : "block";
});

let prevScrollPos = window.scrollY;

window.addEventListener("scroll", function () {
  // current scroll position
  const currentScrollPos = window.scrollY;

  if (prevScrollPos > currentScrollPos) {
    // user has scrolled up
    document.querySelector(".header").style.top = "0";
  } else {
    // user has scrolled down
    document.querySelector(".header").style.top = "-100px";
  }

  // update previous scroll position
  prevScrollPos = currentScrollPos;
});
