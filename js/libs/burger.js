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
