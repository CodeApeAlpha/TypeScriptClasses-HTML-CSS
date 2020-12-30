import { Clock } from './Classes'


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
    
    ClockObj.CurrentTime().subscribe((result:string)=>{
        CTime.innerHTML= result;
    })
    
    ClockObj.CurrentDate("DD-MM-YY").subscribe((res:string)=>{
        CDate.innerHTML=res;
    })

});
form.addEventListener("mouseover",(e:Event)=>{
    e.preventDefault();
    //Calls a method that returns the max date from the current time, setting the max attribute    
    DateHtml.setAttribute('max',ClockObj.maxDate()); 
    
});

//Button event listerner used to display out 
form.addEventListener('submit',(e:Event)=>{
    e.preventDefault();
    //Pass output from timelaps function which  accepts a Date Object which also accepts the value from both Datepicker and TimePicker Input. 
    ClockObj.TimeLaps(new Date(DateHtml.value+" "+Time.value)).subscribe((res:string)=>{
        TimePassed.innerHTML=res
    });
    
    // no longer need this function as the class is handling the looping and updating of the result
    // function timePasedFun(){}
    // Loop=setInterval(timePasedFun,1000); 
    
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