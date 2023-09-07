`use strict`;

// Animate on scroll //
document.addEventListener("DOMContentLoaded", function () {
// Horizontal Left
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add(`show`);
    });
  });

  const hiddenElements = document.querySelectorAll(`.hidden`);
  hiddenElements.forEach((el) => observer.observe(el));

// Blur
  const blurObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add(`show-blur`);
    });
  });

  const hiddenElementsBlur = document.querySelectorAll(`.hidden-blur`);
  hiddenElementsBlur.forEach((el) => blurObserver.observe(el));

//Vertical

  const vertObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add(`show-vertical`);
    });
  });

  const hiddenElementsVertical = document.querySelectorAll(`.hidden-vertical`);
  hiddenElementsVertical.forEach((el) => vertObserver.observe(el));

// Horizontal Right

  const rightObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add(`show-right`);
    });
  });

  const hiddenElementsRight = document.querySelectorAll(`.hidden-right`);
  hiddenElementsRight.forEach((el) => rightObserver.observe(el));
});