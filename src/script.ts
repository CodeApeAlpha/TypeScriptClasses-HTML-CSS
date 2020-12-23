import {Clock} from './Classes/Clock.js'
const form=document.querySelector("#form") as HTMLFormElement;
const DateHtml=document.querySelector("#startDate") as HTMLInputElement;
const Time=document.querySelector("#startTime") as HTMLInputElement;
const TimePassed=document.getElementById("time") as HTMLDivElement;
const CDate=document.getElementById("currentDate") as HTMLDivElement;
const CTime=document.getElementById("crrentTime") as HTMLDivElement;


const ClockObj=new Clock();

window.addEventListener("load",(e:Event)=>{
    e.preventDefault();

    setInterval(()=>{

        CTime.innerHTML= ClockObj.CurrentTime();
        CDate.innerHTML=ClockObj.CurrentDate();

    },1000);

});

form.addEventListener("mouseover",(e:Event)=>{
    e.preventDefault();    
    DateHtml.setAttribute('max',ClockObj.CurrentDate()); 
});

form.addEventListener('submit',(e:Event)=>{
    e.preventDefault();
    setInterval(()=>{
        TimePassed.innerHTML=ClockObj.TimeLaps(new Date(DateHtml.value+" "+Time.value))
    },1000);


    
  
    

    

   
});
