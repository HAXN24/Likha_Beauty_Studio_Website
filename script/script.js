`use strict`;

console.log(window.innerWidth, window.innerHeight);


// Improve scrolling experience for touchscreens- hopefully fixes the issue where the scrolling stops at the middle of the screen-preventing from scrolling further, jumps up and down before scrolling again.
window.addEventListener('touchmove', event => {
}, { passive: true });

// --------------------------------------------------------------------------------------------------------------------
// Making Mobile Nav Work for Home Page and About Us Page
const button = document.querySelector(`.button-mobile-nav`);
const header = document.querySelector(`.header-main`);
const headerAboutUs = document.querySelector(`.header-about-us`);
const bookingHeader = document.querySelector(`.booking-header`);


const body = document.querySelector(`body`);

  button.addEventListener(`click`, function () {

    // Checks if body contains header for 3 different htmls and toggles 'nav-open'
    if (body.contains(header)) {
      header.classList.toggle(`nav-open`)
    } else if (body.contains(headerAboutUs)) {
      headerAboutUs.classList.toggle(`nav-open`);
    } else
      bookingHeader.classList.toggle('nav-open');
  });

// Closes Mobile Nav Menu when a nav option is clicked
  const mainNavLinks = document.querySelectorAll(".main-nav-link");
  mainNavLinks.forEach((link) => {
    link.addEventListener("click", function (event) {

      if (!body.contains(bookingHeader)) {
        body.contains(header) ? header.classList.remove(`nav-open`) : headerAboutUs.classList.remove(`nav-open`);
      } else bookingHeader.classList.remove('nav-open');

    });
  });

// --------------------------------------------------------------------------------------------------------------------
//Insert sticky container when the view port moves out from hero section

const heroSection = document.querySelector(`.hero-section`);
const likhaStoryHeader = document.querySelector(`.about-us-story`);

  const obs = new IntersectionObserver(
      function (entries) {
        entries[0].isIntersecting === false
            ? body.classList.add(`sticky`)
            : body.classList.remove(`sticky`);

      },
      {
        //   In the view port
        root: null,
        threshold: 0,
        rootMargin: `-120px`,
      },
  );
// Check if in home page to call function and avoid error
  if (body.contains(header)) {
    obs.observe(heroSection);
  } else if (body.contains(headerAboutUs)) {
    obs.observe(likhaStoryHeader);
  } else body.classList.add('sticky');

// --------------------------------------------------------------------------------------------------------------------
// Script for image full size when clicked
const imgContainers = document.querySelectorAll(".gallery img");
const popupImg = document.querySelector(".gallery .popup-img");
const closeButton = document.querySelector(".gallery .popup-img span");

document.addEventListener("DOMContentLoaded", function () {
//Click function to see image on full size and close popup window when popup overlay is clicked
  imgContainers.forEach((image) => {
    image.onclick = () => {
      const popupImgContent = document.querySelector(".gallery .popup-img img");

      popupImgContent.src = image.getAttribute("src");
      popupImg.classList.add("show"); // Add the "show" class to display with the transition
      body.classList.remove(`sticky`); // If full sized img open -> closes nav bar

      // function that let users close modal window when clicking outside photo && returns sticky nav bar
      popupImg.onclick = (event) => {
        if (event.target === popupImg) {
          body.classList.add(`sticky`);
          popupImg.classList.remove(`show`);
        }
      };
    };
    // function that closes the modal window with x button
    closeButton.onclick = () => {
      popupImg.classList.remove("show");
    };
  });
});

// --------------------------------------------------------------------------------------------------------------------
//Scroll Effect For Images

//Checking if we're not in the booking html
if(body.contains(header)){


    const imageElements = document.querySelectorAll(".gallery-item img"); // Get all image elements
    const popupImage = document.querySelector(".popup-img img"); // Get image currently in display
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");

    let currentImageIndex = 0;

    // set currentImageIndex to whichever image users click to
    imageElements.forEach((item, index) => {
      item.addEventListener("click", () => {
        currentImageIndex = index;
      });

    });
    // Function to update the popup image
    const updatePopupImage = () => (popupImage.src = imageElements[currentImageIndex].src);

    // Attach click event listener to left arrow
    leftArrow.addEventListener("click", function () {

      if (currentImageIndex <= 0) return; // stops arrow if it at the start of the gallery

      currentImageIndex = (currentImageIndex - 1 + imageElements.length) % imageElements.length; // Calculate the previous index
      updatePopupImage();

    });

    // Attach click event listener to right arrow
    rightArrow.addEventListener("click", function () {
      if (currentImageIndex === (imageElements.length - 1)) return // stops arrow at the end of the gallery

      currentImageIndex = (currentImageIndex + 1) % imageElements.length; // Calculate the next index
      updatePopupImage();
    });
}



// ---------------------------------------------------------------------------------------------------------------
//Update year copyright

document.addEventListener("DOMContentLoaded", function () {
const yearText = document.querySelector(`.year`);
const currentYear = new Date().getFullYear();

if(!body.contains(bookingHeader)) {
  yearText.textContent = currentYear.toString();
}
});


// ---------------------------------------------------------------------------------------------------------------
// Disable smooth scroll behavior when user navigates to services, testimonials, or pricing pages.
// Re-enable smooth scroll after 1.5 seconds of inactivity on the home page.


const html = document.querySelector(`html`);

if(!html.contains(header)){
    html.style.scrollBehavior = `auto`;
}

// Call the function when the page loads
window.addEventListener('load', function(){
    html.style.scrollBehavior = `auto`;
});

if(html.contains(header)) {
    setTimeout(function () {
        html.style.setProperty('scroll-behavior', 'smooth', 'important');
    }, 1500);
}