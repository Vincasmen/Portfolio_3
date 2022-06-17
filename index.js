"use strict";

//  !Dott menu and list

const dottBtn = document.getElementById("dott-icon");
const headerList = document.getElementById("ul-id");

dottBtn.addEventListener("click", function () {
  headerList.classList.toggle("hidden-ul");
  console.log("BtnClicked");
});

//  !Sticky scroll nav bar

const navBar = document.getElementById("nav-bar");
const introDiv = document.getElementById("heading-introduction-div");
window.onscroll = function () {
  scrollFunction();
};
const sticky = navBar.offsetTop;

function scrollFunction() {
  if (window.pageYOffset >= sticky) {
    navBar.classList.add("sticky");
    introDiv.classList.add("padding");
  } else {
    navBar.classList.remove("sticky");
    introDiv.classList.remove("padding");
  }
}

// !Info overlay for my projects

const infoIcon = document.getElementById("info-icon-work01");
const infoOverlay = document.getElementById("my-work-info-overlay");

infoOverlay.classList.add("overlay-hidden");

infoIcon.addEventListener("click", function () {
  console.log("clicked");
  infoOverlay.classList.toggle("overlay-hidden");
});
