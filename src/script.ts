import {Clock} from './Classes/Clock.js'

const form=document.querySelector("#form") as HTMLFormElement;
const DateHtml=document.querySelector("#startDate") as HTMLInputElement;
const Time=document.querySelector("#startTime") as HTMLInputElement;
const TimePassed=document.getElementById("time") as HTMLDivElement;
const CDate=document.getElementById("currentDate") as HTMLDivElement;
const CTime=document.getElementById("crrentTime") as HTMLDivElement;
//Calling 
const ClockObj=new Clock();

let Loop:any;

window.addEventListener("load",(e:Event)=>{
    e.preventDefault();
    setInterval(()=>{

        CTime.innerHTML= ClockObj.CurrentTime();
        CDate.innerHTML=ClockObj.CurrentDate("DD-MM-YY");
    },1000);

});
form.addEventListener("mouseover",(e:Event)=>{
    e.preventDefault();
    //Calls a method that returns the max date from the current time, setting the max attribute    
    DateHtml.setAttribute('max',ClockObj.CurrentDate("MAX")); 
    
});

//Button event listerner used to display out 
form.addEventListener('submit',(e:Event)=>{
    e.preventDefault();

    function timePasedFun(){
        //Pass output from timelaps function which  accepts a Date Object which also accepts the value from both Datepicker and TimePicker Input. 
        TimePassed.innerHTML=ClockObj.TimeLaps(new Date(DateHtml.value+" "+Time.value));
    }
    Loop=setInterval(timePasedFun,1000);
    
});
//Date input event listerner used to resest displayed output
DateHtml.addEventListener("focus",(e:Event)=>{
    clearInterval(Loop)
    TimePassed.innerHTML=" "
});
//Time input event listerner used to resest displayed output
Time.addEventListener("focus",(e:Event)=>{
    clearInterval(Loop)
    TimePassed.innerHTML=" "
});