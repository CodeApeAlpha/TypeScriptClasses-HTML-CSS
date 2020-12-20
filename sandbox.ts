class Clock{
    DateObj:Date; 
    diffDays:number
    diffWeeks:number;
    diffHours:number;
    diffMins:number;
    diffSec:number;
    constructor( ){
        this.DateObj=new Date();
        this.diffWeeks=0;
        this.diffDays=0;
        this.diffHours=0;
        this.diffMins=0;
        this.diffSec=0;
      
    }
    TimeLaps(){
      document.getElementById("time").innerHTML=" Weeks "+this.diffWeeks+" Days "+this.diffDays+" Hours "+this.diffHours+" Mins "+this.diffMins+"<br/> Sec "+this.diffSec;
    }

    CurrentTime( DateSelected,TimeSelected){

        var yearSelected=DateSelected[0]+DateSelected[1]+DateSelected[2]+DateSelected[3];
        var monthSelected=DateSelected[5]+DateSelected[6];
        var daySelected=DateSelected[8]+DateSelected[9];
        
        var Selected:any=new Date(yearSelected+"-"+monthSelected+"-"+((daySelected*1)+1));
        Selected.setHours(TimeSelected[0]+TimeSelected[1]);
        Selected.setMinutes(TimeSelected[3]+TimeSelected[4]);
        
        var Current:any=this.DateObj;

        console.log(Current,Selected);
        var diff=(Current.getTime()-Selected.getTime());
        if(diff>=(1000 * 3600 * 24 * 7)){

            this.diffWeeks= Math.trunc(diff/ (1000 * 3600 * 24*7));
            diff=((diff)% (1000 * 3600 * 24 * 7));
        }
        if(diff>=(1000 * 3600 * 24)){
            this.diffDays=Math.trunc (diff/ (1000 * 3600 * 24));
            diff=((diff)% (1000 * 3600 * 24));
        }
        if(diff>=(1000 * 3600)){
            this.diffHours= Math.trunc((diff)/ (1000 * 3600));
            diff=((diff)% (1000 * 3600 ));
        }
        if(diff>=(1000 * 60)){
            this.diffMins= Math.trunc((diff)/ (1000 * 60));
            diff=((diff)% (1000 * 60));
        }
        if(diff>=(1000)){
            this.diffSec= Math.trunc((diff)/ (1000));
            diff=((diff)% (1000));
        }

   
    }
}

const form= document.querySelector("#form") as HTMLFormElement;
const input=document.querySelector("#startDate") as HTMLInputElement;
const input2=document.querySelector("#startTime") as HTMLInputElement;
 
var C2=new Clock();

//Sets the 
form.addEventListener("mouseover",(e:Event)=>{
    
    e.preventDefault();
    var Limit= C2.DateObj;
    let Y = Limit.getFullYear();
    let M= Limit.getMonth()+1;
    let D= Limit.getDate();
    input.setAttribute('max',Y+"-"+M+"-"+(D-1)); 
})

form.addEventListener('submit',(e:Event)=>{
    e.preventDefault();
    setInterval(()=>{
    var Cl=new Clock();
    Cl.CurrentTime(input.value,input2.value);
    Cl.TimeLaps();
    },1000);
});