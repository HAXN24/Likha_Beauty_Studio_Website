`use strict`;


// Improve scrolling experience for touchscreens- hopefully fixes the issue where the scrolling stops at the middle of the screen-preventing from scrolling further, jumps up and down before scrolling again.
window.addEventListener('touchmove', event => {
}, { passive: true });


// --------------------------------------------------------------------------------------------------------------------
//Function for Book Now and Call Now
const popUpClassActive = document.querySelector(`.pop-up-2`);
const bookButton = document.getElementById(`book-now-btn`);
const closeButton2 = document.querySelector(".close-pop-up-btn-2");
const callButton = document.querySelector(`.call-now-btn`);
const popUpOverlay2 = document.querySelector(`.overlay-book-2`);
const body = document.querySelector(`body`);
const header = document.querySelector(`.header-main`);



const popUpOverlay2Close = popUpOverlay2.onclick = (event) => {
    if (event.target === popUpOverlay2) {
        console.log(`popup overlay removed`)
        popUpClassActive.classList.remove(`active`);
    }
};


document.addEventListener("DOMContentLoaded", function () {
    const callUsWindowFunction = function (document) {
        document.addEventListener(`click`, function (event) {
            // for down appointment server
            if(!popUpClassActive.classList.contains(`active`)){
            popUpClassActive.classList.add("active");
            }

            // Function let users close modal when clicking outside modal window/overlay.
            popUpOverlay2Close();
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

closeButton2.onclick = () => {
    console.log(`remove popup active`);
    popUpClassActive.classList.remove("active");
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
modalTime.textContent = timeToday.toString() + "!";
