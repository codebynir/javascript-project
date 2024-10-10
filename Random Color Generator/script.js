
const getColor = () => {
  const randomNumber = Math.floor(Math.random() * 16777215);
  const randomCode =` #${randomNumber.toString(16)}`;
  // console.log(randomNumber, randomCode);
  showColor.style.backgroundColor= randomCode;
  // to change dynamic color name
  getColors.textContent=randomCode;
  // onclick to clipboard(automatic copy)
  navigator.clipboard.writeText(randomCode);

};


let showColor = document.getElementById("showColor");
let getColors =document.getElementById("getColors");
getColors.addEventListener(
  "click",
  getColor
);

getColor();