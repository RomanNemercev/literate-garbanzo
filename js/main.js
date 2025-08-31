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

// swiper
var swiper = new Swiper(".page__slider-wrapper", {
  spaceBetween: 30,
  cssMode: true,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  mousewheel: true,
  keyboard: true,
});

// accordion
new Accordion(".accordion-container");

// burger menu
const header = document.querySelector(".page__header");
const headerMobile = document.querySelector(".page__header-mobile");
const headerBurger = document.querySelector(".page__header-burger");
const headerWrapper = document.querySelector(".page__header-wrapper");
headerBurger.addEventListener("click", () => {
  headerMobile.classList.toggle("active");
  headerBurger.classList.toggle("active");
  headerWrapper.classList.toggle("active");
});
