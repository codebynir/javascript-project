//ACCESSING MAIN IMAGE
let img = document.getElementById("img");
// change images on same color
let changeImg1 = document.getElementById("changeImg1");
let changeImg2 = document.getElementById("changeImg2");
let changeImg3 = document.getElementById("changeImg3");
//accessing colorIds
let colorWhite = document.getElementById("colorWhite");
let colorRed = document.getElementById("colorRed");
let colorGreen = document.getElementById("colorGreen");
let colorBlue = document.getElementById("colorBlue");
let colorBlack = document.getElementById("colorBlack");



//
img.src = "white1.jpg";
changeImg1.addEventListener("click", function changeImg() {
  img.src = "white1.jpg";
});
changeImg2.addEventListener("click", function changeImg() {
  img.src = "white2.jpg";
});
changeImg3.addEventListener("click", function changeImg() {
  img.src = "white3.jpg";
});
// Function to change the main image based on the selected color
function changeImageByColor(color) {
  if (color === "white") {
    img.src = "white1.jpg";
    changeImg1.addEventListener("click", function changeImg() {
      img.src = "white1.jpg";
    });
    changeImg2.addEventListener("click", function changeImg() {
      img.src = "white2.jpg";
    });
    changeImg3.addEventListener("click", function changeImg() {
      img.src = "white3.jpg";
    }); // or other logic based on current image
  } else if (color === "red") {
    img.src = "red1.jpg";
    changeImg1.addEventListener("click", function changeImg() {
      img.src = "red1.jpg";
    });
    changeImg2.addEventListener("click", function changeImg() {
      img.src = "red2.jpg";
    });
    changeImg3.addEventListener("click", function changeImg() {
      img.src = "red3.jpg";
    });
  } else if (color === "green") {
    img.src = "green1.jpg";
    changeImg1.addEventListener("click", function changeImg() {
      img.src = "green1.jpg";
    });
    changeImg2.addEventListener("click", function changeImg() {
      img.src = "green2.jpg";
    });
    changeImg3.addEventListener("click", function changeImg() {
      img.src = "green3.jpg";
    });
  } else if (color === "blue") {
    img.src = "blue1.jpg";
    changeImg1.addEventListener("click", function changeImg() {
  img.src = "blue1.jpg";
});
changeImg2.addEventListener("click", function changeImg() {
  img.src = "blue2.jpg";
});
changeImg3.addEventListener("click", function changeImg() {
  img.src = "blue3.jpg";
});
  } else if (color === "black") {
    img.src = "black1.jpg";
    changeImg1.addEventListener("click", function changeImg() {
      img.src = "black1.jpg";
    });
    changeImg2.addEventListener("click", function changeImg() {
      img.src = "black2.jpg";
    });
    changeImg3.addEventListener("click", function changeImg() {
      img.src = "black3.jpg";
    });
  }
}

// Add event listeners to color buttons
colorWhite.addEventListener("click", function () {
  changeImageByColor("white");
});

colorRed.addEventListener("click", function () {
  changeImageByColor("red");
});

colorGreen.addEventListener("click", function () {
  changeImageByColor("green");
});

colorBlue.addEventListener("click", function () {
  changeImageByColor("blue");
});

colorBlack.addEventListener("click", function () {
  changeImageByColor("black");
});

//Logic of add items

inc.addEventListener("click", function inc() {
  if (inp.value >= 0) inp.value++;
});
dec.addEventListener("click", function dec() {
  if (inp.value >= 1) inp.value--;
});


//logic of calculation
let price=document.getElementById("price").textContent.trim();
let totalCost=document.getElementById("cost");
let buy=document.getElementById("buyNow");
let container=document.getElementById("container");
let bill=document.getElementById("bill");
// let cost=document.getElementById("price");
let quantity=inp.value;

// Convert the values to integers
quantity = parseInt(quantity, 10);
price = parseInt(price, 10);

console.log(quantity);

buy.addEventListener("click",function buyNow(){
  container.style.display="none";
  bill.style.display="block";
  totalCost.innerHTML=quantity*price;
  

})

