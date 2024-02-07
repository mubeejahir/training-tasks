let slideCount = 0;
showSlides(slideCount);

let preBtn = document.querySelector(".pre-btn");
preBtn.addEventListener("click", function () {
  showSlides((slideCount -= 1));
});

let nextBtn = document.querySelector(".next-btn");
nextBtn.addEventListener("click", function () {
  showSlides((slideCount += 1));
});

// function showSlides(n) {
//   let slides = document.getElementsByClassName("slides");
//   if (n >= slides.length) {
//     slideCount = 0;
//   } else if (n < 0) {
//     slideCount = slides.length - 1;
//   }

//   for (let i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }

//   console.log(slideCount);
//   slides[slideCount].style.display = "block";
// }

//dots nav

function dotSlide(n) {
  let slides = document.getElementsByClassName("slides");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  console.log(n);
  slides[n - 1].style.display = "block";
}

//to create a span element
let manualNav = document.querySelector(".dots-container");
let slides = document.getElementsByClassName("slides");
for (let i = 0; i < slides.length; i++) {
  let spanEle = document.createElement("span");
  spanEle.setAttribute("class", "dot");
  spanEle.setAttribute("data-slide-count", i + 1);
  manualNav.append(spanEle);
}

let dots = document.querySelectorAll(".dot");
dots.forEach(function (ele) {
  ele.addEventListener("click", function (e) {
    let val = e.target.getAttribute("data-slide-count");
    dotSlide(val);
  });
});

//Auto Nav

function showSlides() {
  let slides = document.getElementsByClassName("slides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  if (slideCount >= slides.length) {
    slideCount = 0;
  }
  console.log(slideCount);
  slides[slideCount].style.display = "block";
  slideCount++;
  // setTimeout(showSlides, 2000)
}

let interval = setInterval(showSlides, 2000);

// slides.forEach(function (e) {
//   console.log(e)
//   e.target.addEventListener("mouseover", function () {
//     clearInterval(interval);
//   });
//   e.addEventListener("mouseout",interval);
// });
// let hoverSlide = document.querySelectorAll(".slides");
// hoverSlide.forEach(function(ele){

//   ele.addEventListener("mouseover", function(){
//     clearInterval(interval)
    
//   })


//   // ele.addEventListener("mouseout", function(){

//   //   setInterval(showSlides, 2000)
//   // })

// })
