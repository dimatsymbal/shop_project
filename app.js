
// _______________counter_________________________________________________________________________________-



let prodCountEl = document.getElementById("products_count");
let addToCartBtns = document.querySelectorAll(".btn_add");
console.log(addToCartBtns);


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


// popUp.forEach((popUpBtn) => popUpBtn.addEventListener("click", function() {
//   ladomWind.classList.add('show');
//    })
// );


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
  }
}

window.addEventListener("scroll", showModalByScroll);