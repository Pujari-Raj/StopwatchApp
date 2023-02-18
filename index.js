// Gathering all elements

// time-array and assigining its value as 0:0:0:0
let [hours, minutes, seconds, milliseconds] = [0,0,0,0];
let displayTime = document.querySelector(".time-display");
let int = null;

//buttons
let startbtn = document.querySelector(".startTimer");
let stopbtn = document.querySelector(".stopTimer");
let resettbtn = document.querySelector(".resetTimer");

//Event-Listeners
startbtn.addEventListener("click", () => {
    int = setInterval(displayTimer, 100);
});

stopbtn.addEventListener("click", () => {
    clearInterval(int);
});

resettbtn.addEventListener("click", () => {
    clearInterval(int);
    [hours, minutes, seconds, milliseconds] = [0,0,0,0];
    displayTime.innerHTML = '00:00:00:000';
});

// function to run the timer
function displayTimer() {
    // starting the timer with milliseconds = 10
    milliseconds += 10;

    // if millisecond(ms) reaches its value to 1000 then, make ms=0 and seconds=01
    if(milliseconds == 1000){
       
        milliseconds = 0;
        seconds++;

        // if seconds(s) reaches its value to 60 then, make s=0 and minutes=01
        if(seconds == 60)
        {
            seconds = 0;
            minutes++;
            
            // if minutes(ms) reaches its value to 60 then, make minutes=0 and hours=01
            if(minutes == 60)
            {
                minutes = 0;
                hours++;
            } 
        }
    }
 
    /*
        if hr,minutes,seconds value is <10,then add 0 against them
        if millisecond value is <10 then add 0 against it, and value<100 then add 000 against them 
    */
    let h = hours < 10 ? "0"+hours: hours;
    let m = minutes < 10 ? "0"+minutes: minutes;
    let s = seconds < 10 ? "0"+seconds: seconds;
    let ms = milliseconds < 10 ? "00"+milliseconds: milliseconds < 100 ? "000"+milliseconds:milliseconds;

    displayTime.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}