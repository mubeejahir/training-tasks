const age = document.getElementById("age");
const height = document.getElementById("height");
const weight = document.getElementById("weight");
const male = document.getElementById("male");
const female = document.getElementById("female");
const submitBtn = document.getElementById("submit");
const resultEle = document.querySelector(".bmi-result");
const comment = document.querySelector(".comment");

function calculate() {
  if (age.value === "" || height.value === "" || weight.value === "" || (male.checked === false && female.checked === false)) {
    alert("All fields are required");
  } else {
    bmiCalulation();
  }
}

function bmiCalulation() {
    var bmi = Number(weight.value) /(Number(height.value / 100) ** 2);
    console.log(bmi);
    
    var result = "";

    if (bmi < 18.5) {
      result = "underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      result = "Healthy";
    } else if (bmi >= 25 && bmi <= 29.9) {
      result = "Overweight";
    } else if (bmi >= 30 && bmi <= 34.9) {
      result = "Obese";
    } else if (bmi >= 35) {
      result = "extremely obese";
    }

    console.log(result);
    comment.innerHTML = result.toUpperCase();
    resultEle.innerHTML = Math.round(bmi * 100) / 100;
  }

submitBtn.addEventListener("click", calculate);
