function timeLeft() {
const daysText = document.querySelector(".days");
const hoursText = document.querySelector(".hours");
const minutesText = document.querySelector(".minutes");

const currentTime = new Date();
const countDownTime = new Date("Apr 13 2022 20:00:00");


const diff = countDownTime.getTime() - currentTime.getTime();


    const mins = Math.floor(diff/1000/60); 

    const hours = Math.floor(mins/60);

    const days = Math.floor(hours/24);

    daysText.innerHTML = days;
    hoursText.innerHTML = hours;
    minutesText.innerHTML = mins;

};

setInterval(timeLeft, 1000);





