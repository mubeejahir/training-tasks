const days  = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const currentYear = new Date().getFullYear();
const birthday = new Date("april 10 2001");
birthday.setFullYear(currentYear);
console.log(birthday);

function updateCountdown(){
    const currentTime = new Date();
    const diff = birthday - currentTime;
    console.log(diff);

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor(diff / (1000 * 60 * 60) % 24 );
    const m = Math.floor(diff / (1000 * 60) % 60);
    const s = Math.floor(diff / (1000) % 60);

    console.log(d,h,m,s);

    days.innerHTML = d;
    hours.innerHTML = h < 10 ? "0" + h: h ;
    minutes.innerHTML = m < 10 ? "0" + m: m;
    seconds.innerHTML = s < 10 ? "0" + s: s;
}

setInterval(updateCountdown, 1000);