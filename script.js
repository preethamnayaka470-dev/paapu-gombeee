/* ============================
   PAAPU ❤️ GOMBEEEE
   SCRIPT
============================ */

const PASSWORD = "07/07/2023";

/* ---------------------------
   Loader
---------------------------- */

window.addEventListener("load", () => {

setTimeout(() => {

document.getElementById("loader").style.display = "none";

}, 2000);

});

/* ---------------------------
   Password
---------------------------- */

function checkPassword() {

const entered = document.getElementById("password").value;

if (entered === PASSWORD) {

document.getElementById("loginPage").style.display = "none";

document.getElementById("website").style.display = "block";

startCountdown();

createHearts();

const music = document.getElementById("bgMusic");

if (music) {

music.play().catch(() => {

console.log("Browser blocked autoplay until user interacts.");

});

}

} else {

document.getElementById("error").innerHTML =

"❌ Wrong Password ❤️";

}

}

/* ---------------------------
   Scroll
---------------------------- */

function goToGallery() {

document.getElementById("gallery").scrollIntoView({

behavior: "smooth"

});

}

/* ---------------------------
   Countdown
---------------------------- */

function startCountdown() {

const birthday = new Date("August 28, 2026 00:00:00").getTime();

setInterval(() => {

const now = new Date().getTime();

const distance = birthday - now;

if (distance < 0) {

document.querySelector(".timer").innerHTML =

"<h1>🎉 Happy Birthday Gombeeee ❤️</h1>";

return;

}

const days = Math.floor(distance / (1000 * 60 * 60 * 24));

const hours = Math.floor(

(distance % (1000 * 60 * 60 * 24))

/

(1000 * 60 * 60)

);

const minutes = Math.floor(

(distance % (1000 * 60 * 60))

/

(1000 * 60)

);

const seconds = Math.floor(

(distance % (1000 * 60))

/

1000

);

document.getElementById("days").innerHTML = days;

document.getElementById("hours").innerHTML = hours;

document.getElementById("minutes").innerHTML = minutes;

document.getElementById("seconds").innerHTML = seconds;

}, 1000);

}

/* ---------------------------
   Floating Hearts
---------------------------- */

function createHearts() {

setInterval(() => {

const heart = document.createElement("div");

heart.className = "heart";

heart.innerHTML = "❤️";

heart.style.left = Math.random() * 100 + "vw";

heart.style.fontSize =

20 + Math.random() * 25 + "px";

document.body.appendChild(heart);

setTimeout(() => {

heart.remove();

}, 8000);

}, 500);

}

/* ---------------------------
   Gift Button
---------------------------- */

const giftButton = document.getElementById("giftButton");

if (giftButton) {

giftButton.addEventListener("click", () => {

document.getElementById("giftMessage").style.display = "block";

launchFireworks();

});

}

/* ---------------------------
   Fireworks
---------------------------- */

function launchFireworks() {

const canvas = document.getElementById("fireworks");

if (!canvas) return;

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;

canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 250; i++) {

particles.push({

x: canvas.width / 2,

y: canvas.height / 2,

dx: (Math.random() - 0.5) * 12,

dy: (Math.random() - 0.5) * 12,

life: 100,

color: `hsl(${Math.random()*360},100%,60%)`

});

}

function animate() {

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(p=>{

ctx.beginPath();

ctx.arc(p.x,p.y,3,0,Math.PI*2);

ctx.fillStyle=p.color;

ctx.fill();

p.x+=p.dx;

p.y+=p.dy;

p.life--;

});

particles=particles.filter(p=>p.life>0);

if(particles.length){

requestAnimationFrame(animate);

}

}

animate();

}

/* ---------------------------
   Gallery Click Zoom
---------------------------- */

document.querySelectorAll(".gallery img").forEach(img=>{

img.addEventListener("click",()=>{

const overlay=document.createElement("div");

overlay.style.position="fixed";

overlay.style.left="0";

overlay.style.top="0";

overlay.style.width="100%";

overlay.style.height="100%";

overlay.style.background="rgba(0,0,0,.9)";

overlay.style.display="flex";

overlay.style.justifyContent="center";

overlay.style.alignItems="center";

overlay.style.zIndex="99999";

const image=document.createElement("img");

image.src=img.src;

image.style.maxWidth="90%";

image.style.maxHeight="90%";

image.style.borderRadius="20px";

overlay.appendChild(image);

overlay.onclick=()=>overlay.remove();

document.body.appendChild(overlay);

});

});