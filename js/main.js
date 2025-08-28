// sale toggle logics
// sale toggle triggers
var triggerMin = document.getElementById("toggle-min");
var triggerMid = document.getElementById("toggle-mid");
var triggerMax = document.getElementById("toggle-max");
// sale toggle content
var contentMin = document.getElementById("table-min");
var contentMid = document.getElementById("table-mid");
var contentMax = document.getElementById("table-max");

triggerMin.onclick = function () {
  this.classList.toggle("active");
  contentMin.classList.toggle("active");
};

triggerMid.onclick = function () {
  this.classList.toggle("active");
  contentMid.classList.toggle("active");
};

triggerMax.onclick = function () {
  this.classList.toggle("active");
  contentMax.classList.toggle("active");
};
