const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// console.log(btnsOpenModal);

// for(let i=0; i < btnsOpenModal.length; i++){
//     btnsOpenModal[i].addEventListener('click', function(){
//         modal.classList.remove('hidden');
//         overlay.classList.remove('hidden');
//     })
// }

// function closeModal(){
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
// }

// btnCloseModal.addEventListener('click', closeModal);
// overlay.addEventListener('click', closeModal);


// let modal =document.getElementsByClassName("display");

// let close=document.getElementsByClassName("exit");

// let show=document.querySelectorAll(".btn");

// let empty=document.getElementsByClassName("empty");

// console.log(show);

for(let i=0;i< btnsOpenModal.length;i++){

   

    btnsOpenModal[i].addEventListener('click',function(){

        modal.classList.remove('hidden');

        overlay.classList.remove('hidden');

    });

}

function home(){

    modal.classList.add('hidden');

    empty.classList.add('hidden');

}

btnCloseModal.addEventListener('click',home);

overlay.addEventListener('click',home);