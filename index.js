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
