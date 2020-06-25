window.addEventListener("DOMContentLoaded", (e) => {
  const popupBtn = document.querySelector(".popup-btn");
  const popup = document.querySelector(".popup");
  const popupClose = document.querySelector(".popup__close");
  const headingPrimary = document.querySelector(".heading__primary");
  const headingSecondary = document.querySelector(".heading__secondary");

  popupBtn.addEventListener("click", function () {
    popup.classList.add("popup-active");
    headingPrimary.classList.add("heading-inactive");
    headingSecondary.classList.add("heading-inactive");
  });

  popupClose.addEventListener("click", function () {
    popup.classList.remove("popup-active");
    headingPrimary.classList.remove("heading-inactive");
    headingSecondary.classList.remove("heading-inactive");
  });
});
