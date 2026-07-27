/* ======================================
   ANJALI BIKE DRIVING SCHOOL
   Premium JavaScript
====================================== */

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {

link.addEventListener("click", function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});


// Sticky Header Shadow

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

header.style.boxShadow="0 8px 30px rgba(0,0,0,.35)";

}

else{

header.style.boxShadow="none";

}

});


// Fade Animation

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},

{

threshold:.15

});

document.querySelectorAll("section,.course-card,.about-card,.review-card,.why-box,.gallery-item").forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(40px)";

el.style.transition=".8s";

observer.observe(el);

});


// Counter Animation

const counters=document.querySelectorAll(".hero-features h3");

counters.forEach(counter=>{

const text=counter.innerText;

const number=parseInt(text);

if(isNaN(number)) return;

let start=0;

const speed=20;

const update=()=>{

if(start<number){

start++;

counter.innerText=start+"+";

setTimeout(update,speed);

}

else{

counter.innerText=text;

}

};

update();

});


// Gallery Hover

document.querySelectorAll(".gallery-item img").forEach(img=>{

img.addEventListener("mouseenter",()=>{

img.style.filter="brightness(1.1)";

});

img.addEventListener("mouseleave",()=>{

img.style.filter="brightness(1)";

});

});


// =========================
// Back To Top Button
// =========================

const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";

topBtn.style.right = "18px";   // Right side

topBtn.style.bottom = "210px"; // Call button ke upar

topBtn.style.width = "50px";

topBtn.style.height = "50px";

topBtn.style.border = "none";

topBtn.style.borderRadius = "50%";

topBtn.style.background = "#333";

topBtn.style.color = "#fff";

topBtn.style.fontSize = "22px";

topBtn.style.cursor = "pointer";

topBtn.style.display = "none";

topBtn.style.zIndex = "9999";

topBtn.style.boxShadow = "0 8px 20px rgba(0,0,0,.25)";

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.display = "flex";

        topBtn.style.alignItems = "center";

        topBtn.style.justifyContent = "center";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};

console.log("Premium Website Loaded Successfully");
/* ==========================
MOBILE MENU
========================== */

const menu=document.getElementById("menu-toggle");

const nav=document.querySelector("nav");

menu.addEventListener("click",()=>{

nav.classList.toggle("active");

});
