const number = document.getElementById("number");
const submitBtn = document.querySelector(".submit");
const comment = document.querySelector(".comment")
const msg1 = document.querySelector(".msg-1");
const msg2 = document.querySelector(".msg-2");
const msg3 = document.querySelector(".msg-3");

var num = Math.floor(Math.random()*100) + 1;
var guessedNumbers = [];
var no_of_guesses = 0;
console.log(num);

function guessNumber(){
    var guess = number.value;
    console.log(guess);
    
    if(guess < 1 || guess > 100){
        alert("please enter a number between 1 to 100")
    }else {
    comment.style.display = "block";
    no_of_guesses += 1;
    guessedNumbers.push(guess);
    console.log(guessedNumbers);

        if(guess < num){
            msg1.innerText = "Your guess is too low";
            msg2.innerText = `No. of guesses: ${no_of_guesses}`
            msg3.innerText = `Guessed numbers are: ${guessedNumbers}`
        }else if(guess > num){
            msg1.innerText = "Your guess is too high";
            msg2.innerText = `No. of guesses: ${no_of_guesses}`
            msg3.innerText = `Guessed numbers are: ${guessedNumbers}`
        }else if(guess == num){
            msg1.innerText = "Yippie you Win !!";
            msg2.innerText = `The number was: ${num}`;
            msg3.innerText = `You guessed it in ${no_of_guesses} guesses`;
            number.value = "";
        }
    }

    

}


submitBtn.addEventListener("click", guessNumber);