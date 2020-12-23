export class Clock {
    constructor() {
        this.CurrentDateTime = new Date();
        this.diffWeeks = 0;
        this.diffDays = 0;
        this.diffHours = 0;
        this.diffMins = 0;
        this.diffSec = 0;
    }
    //Displays Data calulated 
    TimeLaps(DateTimeEntered) {
        //Resets the current Date object-For Accurate comparision 
        this.CurrentDateTime = new Date();
        //Subtract the for the differnce of the two Date Object 
        let diff = (this.CurrentDateTime.getTime() - DateTimeEntered.getTime());
        //The following if statement validate the "diff's" millseconds passed is eqivalinet to Week  Day  Hours  Mins Sec
        //Week 
        if (diff >= (1000 * 3600 * 24 * 7)) {
            this.diffWeeks = Math.trunc(diff / (1000 * 3600 * 24 * 7));
            diff = ((diff) % (1000 * 3600 * 24 * 7));
        }
        //Day
        if (diff >= (1000 * 3600 * 24)) {
            this.diffDays = Math.trunc(diff / (1000 * 3600 * 24));
            diff = ((diff) % (1000 * 3600 * 24));
        }
        //Hours
        if (diff >= (1000 * 3600)) {
            this.diffHours = Math.trunc((diff) / (1000 * 3600));
            diff = ((diff) % (1000 * 3600));
        }
        //Mins
        if (diff >= (1000 * 60)) {
            this.diffMins = Math.trunc((diff) / (1000 * 60));
            diff = ((diff) % (1000 * 60));
        }
        //Sec
        if (diff >= (1000)) {
            this.diffSec = Math.trunc((diff) / (1000));
            diff = ((diff) % (1000));
        }
        //Returns date passed in a defualt format
        return this.diffWeeks + " Weeks " + this.diffDays + " Days " + this.diffHours + " Hours " + this.diffMins + " Mins " + this.diffSec + " Sec ";
    }
    //Function used to format Current Date 
    //Retunring yy/mm/dd
    CurrentDate() {
        let Y = this.CurrentDateTime.getFullYear();
        let M = this.CurrentDateTime.getMonth() + 1;
        let D = this.CurrentDateTime.getDate();
        return (Y + "-" + M + "-" + (D - 1));
    }
    CurrentTime() {
        this.CurrentDateTime = new Date();
        if (this.CurrentDateTime.getHours() > 12) {
            return ((this.CurrentDateTime.getHours() - 12) + ":" + this.CurrentDateTime.getMinutes() + ":" + this.CurrentDateTime.getSeconds() + " PM ");
        }
        else {
            return (this.CurrentDateTime.getHours() + ":" + this.CurrentDateTime.getMinutes() + ":" + this.CurrentDateTime.getSeconds() + " AM ");
        }
    }
    //Getters 
    getWeeks() {
        return this.diffWeeks;
    }
    getDays() {
        return this.diffDays;
    }
    getHours() {
        return this.diffHours;
    }
    getMins() {
        return this.diffMins;
    }
    getSec() {
        return this.diffSec;
    }
}
