document.addEventListener("DOMContentLoaded", function () {
  var playBtn = document.getElementById("videoPlayBtn");
  var promoBlock = document.getElementById("videoPromo");
  var modal = document.getElementById("videoModal");
  var closeBtn = document.getElementById("videoCloseBtn");
  var video = document.getElementById("promoVideo");

  playBtn.addEventListener("click", function () {
    promoBlock.style.display = "none";
    modal.classList.add("active");
    video.currentTime = 0;
    video.play();
  });

  closeBtn.addEventListener("click", function () {
    modal.classList.remove("active");
    promoBlock.style.display = "flex";
    video.pause();
    video.currentTime = 0;
  });

  // Закрытие по клику вне видео
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      closeBtn.click();
    }
  });
});
