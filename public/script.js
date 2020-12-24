import { Clock } from './Classes/Clock.js';
const form = document.querySelector("#form");
const DateHtml = document.querySelector("#startDate");
const Time = document.querySelector("#startTime");
const TimePassed = document.getElementById("time");
const CDate = document.getElementById("currentDate");
const CTime = document.getElementById("crrentTime");
//Calling 
const ClockObj = new Clock();
let Loop;
window.addEventListener("load", (e) => {
    e.preventDefault();
    setInterval(() => {
        CTime.innerHTML = ClockObj.CurrentTime();
        CDate.innerHTML = ClockObj.CurrentDate("DD-MM-YY");
    }, 1000);
});
form.addEventListener("mouseover", (e) => {
    e.preventDefault();
    //Calls a method that returns the max date from the current time, setting the max attribute    
    DateHtml.setAttribute('max', ClockObj.CurrentDate("MAX"));
});
//Button event listerner used to display out 
form.addEventListener('submit', (e) => {
    e.preventDefault();
    function timePasedFun() {
        //Pass output from timelaps function which  accepts a Date Object which also accepts the value from both Datepicker and TimePicker Input. 
        TimePassed.innerHTML = ClockObj.TimeLaps(new Date(DateHtml.value + " " + Time.value));
    }
    Loop = setInterval(timePasedFun, 1000);
});
//Date input event listerner used to resest displayed output
DateHtml.addEventListener("focus", (e) => {
    clearInterval(Loop);
    TimePassed.innerHTML = " ";
});
//Time input event listerner used to resest displayed output
Time.addEventListener("focus", (e) => {
    clearInterval(Loop);
    TimePassed.innerHTML = " ";
});
