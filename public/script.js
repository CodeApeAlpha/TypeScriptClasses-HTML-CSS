import { Clock } from './Classes/Clock.js';
const form = document.querySelector("#form");
const DateHtml = document.querySelector("#startDate");
const Time = document.querySelector("#startTime");
const TimePassed = document.getElementById("time");
const CDate = document.getElementById("currentDate");
const CTime = document.getElementById("crrentTime");
const ClockObj = new Clock();
window.addEventListener("load", (e) => {
    e.preventDefault();
    setInterval(() => {
        CTime.innerHTML = ClockObj.CurrentTime();
        CDate.innerHTML = ClockObj.CurrentDate();
    }, 1000);
});
form.addEventListener("mouseover", (e) => {
    e.preventDefault();
    DateHtml.setAttribute('max', ClockObj.CurrentDate());
});
form.addEventListener('submit', (e) => {
    e.preventDefault();
    setInterval(() => {
        TimePassed.innerHTML = ClockObj.TimeLaps(new Date(DateHtml.value + " " + Time.value));
    }, 1000);
});
