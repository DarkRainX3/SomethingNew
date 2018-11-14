const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

let hrPosition = (hr*360/12)+((min*360/60)/12)+(sec*360/60)/3600;
let minPosition = (min*360/60)+(sec*360/60)/60;
let secPosition = sec*360/60;

var interval = setInterval(runTheClock,1000);

function runTheClock(){
    // secPosition=secPosition+6;
    // minPosition=minPosition+(1/10);
    // hrPosition+=(1/120);//fixes the turn back arm animation problem
    var date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    let hrPosition = (hr*360/12)+((min*360/60)/12)+(sec*360/60)/3600;
    let minPosition = (min*360/60)+(sec*360/60)/60;
    let secPosition = sec*360/60;

    HOURHAND.style.transform = "rotate("+hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate("+minPosition + "deg)";
    SECONDHAND.style.transform = "rotate("+secPosition + "deg)";
}
