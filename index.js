"use strict";
const dottBtn = document.getElementById("dott-icon");
const headerList = document.getElementById("ul-id");

dottBtn.addEventListener("click", function () {
  headerList.classList.toggle("hidden-ul");
  console.log("BtnClicked");
});
