
// _______________counter_________________________________________________________________________________-



let prodCountEl = document.getElementById("products_count");
let addToCartBtns = document.querySelectorAll(".btn_add");

for (let i = 0; i < addToCartBtns.length; i++){
    addToCartBtns[i].addEventListener("click", function() {
        prodCountEl.innerHTML++;
    })
}


addToCartBtns.forEach((addTo) =>
  addTo.addEventListener("click", function () {
    addTo.classList.toggle("picked");
  })
);
// _______________product-quantity______________________________________________________________________

let minusBtn = document.querySelectorAll(".button_minus")[1];
let plusBtn = document.querySelectorAll(".button_plus")[1];
let input = document.querySelectorAll(".input_of_quantity")[1];


function Counter(decrementBtn, incrementBtn, inputField){
  this.domRefs = {
    decrementBtn,
    incrementBtn,
    inputField,
  };

  this.toogleButtonsStan = function() {
    let count = this.domRefs.inputField.value;
    this.domRefs.decrementBtn.disabled = count <= 1;
    this.domRefs.incrementBtn.disabled = count >= 10;
  };
  this.toogleButtonsStan();


  this.increment = function(){
    let count = +this.domRefs.inputField.value;
    this.domRefs.inputField.value = count + 1;
    this.toogleButtonsStan();
  };

  this.decrement = function(){
    let count = this.domRefs.inputField.value;
    this.domRefs.inputField.value = count - 1;
    this.toogleButtonsStan();
  };

  this.domRefs.incrementBtn.addEventListener("click", this.increment.bind(this));
  this.domRefs.decrementBtn.addEventListener("click", this.decrement.bind(this));


  
}

let counter1 = new Counter(minusBtn, plusBtn, input);
console.log(counter1);

// _______________like___________________________________________________________________________________-


// let favBtn = document.querySelector('.favoriteBtn');
// let favImg = document.querySelector('.favoriteBtn__img');

// favBtn.addEventListener("click", function() {
//     let src = favImg.getAttribute("src");

//     if(src === "./photos/favoriteBtn.png"){
//         favImg.setAttribute("src", "./photos/favoriteBtn_clicked.png")
//     } else {
//         favImg.setAttribute("src", "./photos/favoriteBtn.png")
//     }
// });



let likeBtns = document.querySelectorAll(".favoriteBtn");
console.log(likeBtns);


likeBtns.forEach((btn) =>
    btn.addEventListener("click", function () {
        // if (btn.classList.contains("liked")) {
        //     btn.classList.remove("liked");
        // } else {
        //     btn.classList.add("liked");
        // }

        btn.classList.toggle("liked");
    })
);


// _______________pop-up___________________________________________________________________________________



let ladomWind = document.querySelector(".ladom");

let popUp = document.querySelectorAll(".btn_details");

popUp.forEach((popUpBtn) => popUpBtn.addEventListener("click", function() {
  ladomWind.classList.add('show');
   })
);


let closeModal = document.querySelectorAll(".btn-close");

closeModal.forEach((closeModalBtn) => closeModalBtn.addEventListener("click", function() {
  ladomWind.classList.remove('show');
   })
);


ladomWind.addEventListener("click", function(e){
  if (e.target === ladomWind) {
    ladomWind.classList.remove('show');
  }
})

// _______________slider___________________________________________________________________________________


$(".slider-block").slick({
  autoplay: true,
  autoplaySpeed: 4000,
  dots: true,
});

// _______________scroll___________________________________________________________________________________

let scrollWind = document.querySelector(".scroll");

let closeScroll = document.querySelectorAll(".btn-close");

closeScroll.forEach((closeScrollBtn) => closeScrollBtn.addEventListener("click", function() {
  scrollWind.classList.remove('show');
   })
);

scrollWind.addEventListener("click", function(e){
  if (e.target === scrollWind) {
    scrollWind.classList.remove('show');
  }
})


function showModalByScroll() {
  if(window.scrollY >= document.body.scrollHeight/2) {
    scrollWind.classList.add('show');
    window.removeEventListener("scroll", showModalByScroll);
  }
}

window.addEventListener("scroll", showModalByScroll);


// _______________AOS___________________________________________________________________________________


AOS.init();


// _______________work12______________________________________________________________________

// class Car {
//   constructor(model, color, year){
//     this.model = model;
//     this.color = color;
//     this.year = year;

//     this.hi = function(){
//       console.log("hi " + this.year);
//     }
//   }
//   hello = function(){
//     console.log("Hello " + this.color);
//   }
// }


// let audi = new Car("A4", "green", 1999);
// let merc = new Car("Benz", "black", 2001);

// merc.hi();
// audi.hello();