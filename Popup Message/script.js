let btnSubmit=document.getElementById("submit");//btntag
let popup=document.getElementById("pop-box");
let btnOk=document.getElementById("ok");//btntag
let btn=document.getElementById("btn-box");
btnSubmit.addEventListener("click",
  function toggleSubmit(){
      popup.style.display="flex";
});

btnOk.addEventListener("click",
  function toggleOk(){
      popup.style.display="none";
      btn.style.display="flex";
      
});
