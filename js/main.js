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

// calculate prices on sale
// Получаем элементы таблиц
const tableMin = document.getElementById("table-min");
const tableMid = document.getElementById("table-mid");
const tableMax = document.getElementById("table-max");

// Получаем элементы с классом page__btn-sale в каждой таблице
const minButtons = tableMin.querySelectorAll(".page__btn-sale");
const midButtons = tableMid.querySelectorAll(".page__btn-sale");
const maxButtons = tableMax.querySelectorAll(".page__btn-sale");

// Получаем элементы с классом page__price-item в каждом блоке
const minPrice = document.querySelector(".page__min-total .page__price-item");
const midPrice = document.querySelector(".page__mid-total .page__price-item");
const maxPrice = document.querySelector(".page__max-total .page__price-item");

// Получаем итоговое значение количества вакансий
const minTotalQuant = document.querySelector(
  ".page__min-total .page__total-quant"
);
const midTotalQuant = document.querySelector(
  ".page__mid-total .page__total-quant"
);
const maxTotalQuant = document.querySelector(
  ".page__max-total .page__total-quant"
);

// Объявляю множители
let minMultiplier = 1;
let midMultiplier = 1;
let maxMultiplier = 1;

// Добавляем обработчики кликов для множителей
minButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    // Извлекаем текст цены
    const priceText = button.querySelector(".page__item-price").textContent;

    // Используем регулярное выражение для извлечения чисел
    const priceMatch = priceText.match(/[\d\s]+/);
    const priceNumber = priceMatch
      ? parseFloat(priceMatch[0].replace(/\s/g, ""))
      : 0; // Убираем пробелы и преобразуем в число

    // Извлекаем текст множителя
    const quantText = button.querySelector(".page__item-quant").textContent;
    const quantNumber = parseInt(quantText, 10); // Извлекаем число из строки
    minMultiplier = quantNumber; // Присваиваем числовое значение

    // Выводим число в консоль
    console.log(minMultiplier);

    if (minMultiplier === 1) {
      minTotalQuant.textContent = minMultiplier + " вакансия =";
    } else if ([2, 3, 4].includes(minMultiplier)) {
      minTotalQuant.textContent = minMultiplier + " вакансии =";
    } else {
      minTotalQuant.textContent = minMultiplier + " вакансий =";
    }

    // Выводим произведение minMultiplier и minPrice в консоль
    const result = minMultiplier * priceNumber;
    minPrice.textContent = result;
    console.log("Произведение minMultiplier и minPrice:", result);
  });
});

midButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const priceText = button.querySelector(".page__item-price").textContent;

    // Используем регулярное выражение для извлечения чисел
    const priceMatch = priceText.match(/[\d\s]+/);
    const priceNumber = priceMatch
      ? parseFloat(priceMatch[0].replace(/\s/g, ""))
      : 0; // Убираем пробелы и преобразуем в число

    // Извлекаем текст множителя
    const quantText = button.querySelector(".page__item-quant").textContent;
    const quantNumber = parseInt(quantText, 10); // Извлекаем число из строки
    midMultiplier = quantNumber; // Присваиваем числовое значение

    // Выводим число в консоль
    console.log(midMultiplier);

    if (midMultiplier === 1) {
      midTotalQuant.textContent = midMultiplier + " вакансия =";
    } else if ([2, 3, 4].includes(midMultiplier)) {
      midTotalQuant.textContent = midMultiplier + " вакансии =";
    } else {
      midTotalQuant.textContent = midMultiplier + " вакансий =";
    }

    // Выводим произведение minMultiplier и minPrice в консоль
    const result = midMultiplier * priceNumber;
    midPrice.textContent = result;
    console.log("Произведение midMultiplier и midPrice:", result);
  });
});

maxButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const priceText = button.querySelector(".page__item-price").textContent;

    // Используем регулярное выражение для извлечения чисел
    const priceMatch = priceText.match(/[\d\s]+/);
    const priceNumber = priceMatch
      ? parseFloat(priceMatch[0].replace(/\s/g, ""))
      : 0; // Убираем пробелы и преобразуем в число

    // Извлекаем текст множителя
    const quantText = button.querySelector(".page__item-quant").textContent;
    const quantNumber = parseInt(quantText, 10); // Извлекаем число из строки
    maxMultiplier = quantNumber; // Присваиваем числовое значение

    // Выводим число в консоль
    console.log(maxMultiplier);

    if (maxMultiplier === 1) {
      maxTotalQuant.textContent = maxMultiplier + " вакансия =";
    } else if ([2, 3, 4].includes(maxMultiplier)) {
      maxTotalQuant.textContent = maxMultiplier + " вакансии =";
    } else {
      maxTotalQuant.textContent = maxMultiplier + " вакансий =";
    }

    // Выводим произведение minMultiplier и minPrice в консоль
    const result = maxMultiplier * priceNumber;
    maxPrice.textContent = result;
    console.log("Произведение maxMultiplier и maxPrice:", result);
  });
});

// Получаем кнопки с классом page__total-accept
const minAcceptButton = document.querySelector(
  ".page__min-total .page__total-accept"
);
const midAcceptButton = document.querySelector(
  ".page__mid-total .page__total-accept"
);
const maxAcceptButton = document.querySelector(
  ".page__max-total .page__total-accept"
);

// Добавляем обработчики кликов для кнопок
minAcceptButton.addEventListener("click", () => {
  // Умножаем значения множителей на значения по умолчанию
  console.log("Минимальный тариф:", minPrice.textContent);
});

midAcceptButton.addEventListener("click", () => {
  console.log("Средний тариф:", midPrice.textContent);
});

maxAcceptButton.addEventListener("click", () => {
  console.log("Максимальный тариф:", maxPrice.textContent);
});
