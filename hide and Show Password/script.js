let inp = document.getElementById("inp");
let eyeIcon=document.getElementById("eyeIcon");//imgTag
let eyeBtn=document.getElementById("eyeBtn");//btnTag

eyeBtn.addEventListener("click",function passIcon(){
  
  if(eyeIcon.src.includes("eye-show.png")){
    eyeIcon.src="eye-hidden.png";
    inp.type="password";

    
  }
  else{
     
     eyeIcon.src="eye-show.png";
     inp.type="text";
  }
  
});