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

// scroll-up btn
var goTopBtn = document.querySelector(".page__scroll");

window.addEventListener("scroll", trackScroll);
goTopBtn.addEventListener("click", scrollToTop);

function trackScroll() {
  const scrolled = window.pageYOffset;
  const coords = document.documentElement.clientHeight;

  if (scrolled > coords) {
    goTopBtn.classList.add("show");
  } else {
    goTopBtn.classList.remove("show");
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
