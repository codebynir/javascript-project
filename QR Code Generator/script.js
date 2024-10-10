let qrBox=document.getElementById("qrbox");
    let qrImg=document.getElementById("qrimg");
    let qrText=document.getElementById("qrtext");
    let message=document.getElementById("message");
    
    function qrCodeGenerator(){

        if(qrText.value.length>0){
          qrImg.src= `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText.value}`;
          qrBox.classList.add("show-img");
        }
        else{
          qrText.classList.add('error');
          qrText.classList.add("inputError");
          setTimeout(() => {
            qrText.classList.remove('error');
            qrText.classList.remove("inputError");
          }, 1000);
      }
      
    }