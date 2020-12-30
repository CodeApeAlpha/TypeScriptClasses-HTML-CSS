import { Observable } from 'rxjs';

 export class Clock{
    private  CurrentDateTime:Date; 
    private diffDays:number
    private diffWeeks:number;
    private diffHours:number;
    private diffMins:number;
    private diffSec:number;
    constructor(){  
        this.CurrentDateTime=new Date();
        this.diffWeeks=0; 
        this.diffDays=0; 
        this.diffHours=0;
        this.diffMins=0;
        this.diffSec=0;
    }
//Displays Data calulated 
    public  TimeLaps(DateTimeEntered:Date ): Observable<string>{
        return new Observable(subscriber=>{
            setInterval(()=>{
                //Resets the current Date object-For Accurate comparision 
                this.CurrentDateTime=new Date();
                //Subtract the for the differnce of the two Date Object 
                let diff=(this.CurrentDateTime.getTime()-DateTimeEntered.getTime());

                //The following if statement validate the "diff's" millseconds passed is eqivalinet to 
                // Week  Day  Hours  Mins Sec

                //Week 
                if(diff>=(1000 * 3600 * 24 * 7)){
                    this.diffWeeks= Math.trunc(diff/ (1000 * 3600 * 24*7));
                    diff=((diff)% (1000 * 3600 * 24 * 7));
                }
                //Day
                if(diff>=(1000 * 3600 * 24)){
                    this.diffDays=Math.trunc (diff/ (1000 * 3600 * 24));
                    diff=((diff)% (1000 * 3600 * 24));
                }
                //Hours
                if(diff>=(1000 * 3600)){
                    this.diffHours= Math.trunc((diff)/ (1000 * 3600));
                    diff=((diff)% (1000 * 3600 ));
                }
                //Mins
                if(diff>=(1000 * 60)){
                    this.diffMins= Math.trunc((diff)/ (1000 * 60));
                    diff=((diff)% (1000 * 60));
                }
                //Sec
                if(diff>=(1000)){
                    this.diffSec= Math.trunc((diff)/ (1000));
                    diff=((diff)% (1000));
                }

                //Returns date passed in a defualt format
                let result =  this.diffWeeks+" Weeks "+this.diffDays+" Days "+this.diffHours+" Hours "+this.diffMins+" Mins "+this.diffSec+" Sec "  
                subscriber.next(result)
            },1000)
        })
    }
    
    /**
     * Function used to format Current Date 
     * Retunring yy/mm/dd
     **/
    public CurrentDate(format:string): Observable<string>{
        return new Observable(subscriber=>{
            setInterval(()=>{
                //if Satement used to sort format bassed on the parameter passed
                if(format=="DD-MM-YY"){
                    let d=this.CurrentDateTime=new Date();
                    subscriber.next(d.toDateString())
                }
            },1000)
        })
       
    }

    public maxDate(): string{
        let Y =this.CurrentDateTime.getFullYear();
        let M= this.CurrentDateTime.getMonth()+1;
        let D= this.CurrentDateTime.getDate();
        return (Y+"-"+M+"-"+(D-1));
    }
    
    //Function used to format and return  Current Date 
    public CurrentTime(): Observable<string>{
        return new Observable(subscriber=>{
            setInterval(()=>{
                //Resets current Date
                this.CurrentDateTime=new Date();
                let mode:  string = "AM";
                let hours: string;
                let Minutes: string = this.CurrentDateTime.getMinutes().toString();
                let seconds:string = this.CurrentDateTime.getSeconds().toString();

                // We need to give the correct hour
                if(this.CurrentDateTime.getHours() > 12)//Then we are in the PM
                {
                    hours = (this.CurrentDateTime.getHours() - 12).toString(); //then we can get hours 
                    mode = "PM"
                }else if(this.CurrentDateTime.getHours() == 12){
                    hours = '12';
                    mode = "PM"
                }else if(this.CurrentDateTime.getHours() == 0){ // then is 12 midnight 
                    hours = '12';
                }else{//then its after 12 AM
                    hours = (this.CurrentDateTime.getHours()).toString()
                    
                }

                // this will only be true when the value is less than 10
                if(this.CurrentDateTime.getSeconds()<10){
                    seconds ="0"+this.CurrentDateTime.getSeconds();
                }
                //If used to fromat Time
                if(this.CurrentDateTime.getMinutes()<10){
                    Minutes="0"+this.CurrentDateTime.getMinutes()
                }
                
                subscriber.next(`${hours}:${Minutes}:${seconds} ${mode}`);
                
            })
        })
        
    }
    //Getters 
    public getWeeks(){
        return this.diffWeeks;
    }
    public getDays(){
        return this.diffDays;
    }
    public getHours(){
        return this.diffHours
    }
    public getMins(){
        return this.diffMins;
    }
    public getSec(){
        return this.diffSec;
    }
}

