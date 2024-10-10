// access elm in js
let display=document.getElementById("display");
let clear=document.getElementById("clearDisplay");
let deleteLast=document.getElementById("deleteLast");
let text=document.getElementById("text");
let bod=document.getElementById("body");
let calc=document.getElementById("calc");

text.addEventListener("click",function mode(){
  if(bod.style.backgroundColor.includes("black")){
    bod.style.backgroundColor="white";
    text.style.backgroundColor="black";
    text.style.color="white";
    text.textContent="Dark";
    calc.style.backgroundColor=orange;
    
    
  }else{
    bod.style.backgroundColor="black";
    text.style.backgroundColor="white";
    text.style.color="black";
    text.textContent="Light";
    
    
    
  }
  
})
function appendCharacter(char){
  display.textContent=display.textContent+char;
}
function clearDisplay() {
  display.textContent = "";
}

deleteLast.addEventListener("click",function deleteLast(){
  display.textContent=display.textContent.slice(0,-1);
});

//result(=)
