const todayDate = document.getElementById("date");
const todayMonth = document.getElementById("month");
const todayYear = document.getElementById("year");
const today = document.getElementById("day");

const date = new Date();
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[date.getMonth()];
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[date.getDay()];

todayDate.textContent = date.getDate();
todayMonth.textContent = month;
todayYear.textContent = date.getFullYear();
today.textContent = day;

// emoji
const emoji = document.getElementById("emoji");
const emojiList=["H😊ppy","L❤VE"," 🅰ll is well"," sh✨ne","c🎉ngrats","B🤯🤯M ","Lets go to drive🚗 " ];
if(day=="Sunday"){
    emoji.textContent=emojiList[0];
}else if(day=="Monday"){
    emoji.textContent=emojiList[1];
}else if(day=="Tuesday"){
    emoji.textContent=emojiList[2];
}else if(day=="Wednesday"){
    emoji.textContent=emojiList[3];
}else if(day=="Thursday"){
    emoji.textContent=emojiList[4];
}else if(day=="Friday"){
    emoji.textContent=emojiList[5];
}else if(day=="Saturday"){
    emoji.textContent=emojiList[6];
}