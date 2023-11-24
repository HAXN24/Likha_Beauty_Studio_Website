`use strict`;

// Improve scrolling experience for touchscreens- hopefully fixes the issue where the scrolling stops at the middle of the screen-preventing from scrolling further, jumps up and down before scrolling again.
window.addEventListener("touchmove", (event) => {}, { passive: true });

// --------------------------------------------------------------------------------------------------------------------
// Function for Book Now and Call Now
const popUpClassPromo = document.querySelector(`.pop-up-2`);
const closePromo = document.querySelector(".close-pop-up-btn-promo");
const popUpOverlayPromo = document.querySelector(`.overlay-book-promo`);

// Function that closes promo modal window when overlay book clicked
popUpOverlayPromo.onclick = (event) => {
  if (event.target === popUpOverlayPromo) {
    console.log(`closedwew`);
    popUpClassPromo.classList.remove(`open`);
  }
};

// --------------------------------------------------------------------------------------------------------------------
// Function that closes the promo modal window with x button
closePromo.onclick = () => {
  console.log(`closed`);
  popUpClassPromo.classList.remove(`open`);
};
// --------------------------------------------------------------------------------------------------------------------
