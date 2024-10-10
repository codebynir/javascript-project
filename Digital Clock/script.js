
let clock = document.getElementById("clock");
//call function in every second
setInterval(displayTime, 1000);


function displayTime() {
  let date = new Date();
  let hours =  date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  sessions = "AM";

 
  if (hours >= 12) {
    if (hours > 12) hours -= 12;
    sessions = "PM";
} else if (hours == 0) {
    hours = 12;
    sessions = "AM";
}

hours =
    hours < 10 ? "0" + hours : hours;
minutes = minutes < 10 ? "0" + minutes : minutes;
seconds = seconds < 10 ? "0" + seconds : seconds;

let currentTime =
    hours +
    ":" +
    minutes +
    ":" +
    seconds +" "+
    sessions;

// Displaying the time
document.getElementById(
    "clock"
).innerHTML = currentTime;
}

displayTime();
