`use strict`;

// Improve scrolling experience for touchscreens- hopefully fixes the issue where the scrolling stops at the middle of the screen-preventing from scrolling further, jumps up and down before scrolling again.
window.addEventListener("touchmove", (event) => {}, { passive: true });

// --------------------------------------------------------------------------------------------------------------------
//Function for Book Now and Call Now
const popUpClass = document.querySelector(`.pop-up-1`);
const bookButton = document.getElementById(`book-now-btn`);
const closeButton = document.querySelector(".close-pop-up-btn");
const callButton = document.querySelector(`.call-now-btn`);
const popUpOverlay = document.querySelector(`.overlay-book`);
const body = document.querySelector(`body`);
const header = document.querySelector(`.header-main`);

document.addEventListener("DOMContentLoaded", function () {
  const callUsWindowFunction = function (document) {
    document.addEventListener(`click`, function (event) {
      popUpClass.classList.toggle("active");

      // Function let users close modal when clicking outside modal window/overlay.
      popUpOverlay.onclick = (event) => {
        if (event.target === popUpOverlay) {
          popUpClass.classList.remove(`active`);
        }
      };
    });
  };

  // Check if in home page to call function and avoid error
  if (body.contains(header)) {
    //1.) Call Now Button
    callUsWindowFunction(callButton);

    //2.) Book Now Button
    callUsWindowFunction(bookButton);
  } else callUsWindowFunction(callButton);
});

// --------------------------------------------------------------------------------------------------------------------
// function that closes the modal window with x button

closeButton.onclick = () => {
  popUpClass.classList.remove(`active`);
};

// --------------------------------------------------------------------------------------------------------------------
// Display schedule for users time;

const schedule = new Map([
  ["Sunday", "9am-6pm"],
  ["Monday", "9am-6pm"],
  ["Tuesday", "9am-6pm"],
  ["Wednesday", "9am-6pm"],
  ["Thursday", "9am-7pm"],
  ["Friday", "9am-7pm"],
  ["Saturday", "9am-4pm"],
]);

// Current Day in Index Form
const currentDay = new Date().getDay();

// Gets index of day from "schedule" array to find current day;
const findDay = (schedule, index) => {
  const day = Array.from(schedule.keys());
  return day[index];
};

// Gets index  of time from "schedule" array to find service hours
const findTime = (schedule, index) => {
  const time = Array.from(schedule.values());
  return time[index];
};

const dayToday = findDay(schedule, currentDay);
const timeToday = findTime(schedule, currentDay);

// Adds textContent of today's time and schedule!
const modalDay = document.querySelector(`.day`);
const modalTime = document.querySelector(`.time`);

modalDay.textContent = dayToday.toString();
modalTime.textContent = timeToday.toString();
