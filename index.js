"use strict";

const menuIcon = document.querySelector(".menu-icon");
const menuList = document.querySelector("nav");
const hamburgerIcon = document.querySelector(".fa-bars");
// const header = document.querySelector(".header");

// header.addEventListener("click", () => {
//   console.log("clicked");
// });

menuIcon.addEventListener("click", () => {
  hamburgerIcon.classList.toggle("fa-times");
  menuList.style.display =
    menuList.style.display === "block" ? "none" : "block";
});

// checkMediaQuery = () => {
//   if (window.innerWidth > 600) {
//     menuList.style.display = "block";
//   } else {
//     menuList.style.display = "none";
//   }
// };

// window.addEventListener("resize", checkMediaQuery);

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
