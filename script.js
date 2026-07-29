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
CERTIFICATE VERIFICATION
========================== */


function verifyCertificate(){


const enteredID = document.getElementById("verifyID").value;


const result = document.getElementById("verifyResult");


// Demo Certificate IDs

const validCertificates = [

"ABS12345",
"ABS2026"

];


if(validCertificates.includes(enteredID)){


result.innerHTML =
"✅ Certificate Verified Successfully";


result.style.color="#16a34a";


}

else{


result.innerHTML =
"❌ Certificate Not Found";


result.style.color="#dc2626";


}


}

/* ==========================
CERTIFICATE GENERATOR
========================== */


function generateCertificate(){

const name = document.getElementById("inputName").value;

const course = document.getElementById("inputCourse").value;

const duration = document.getElementById("inputDuration").value;

if(name=="" || course==""){

alert("Please enter student details");

return;

}


const certificateNumber = 
localStorage.getItem("certificateNumber") || 0;


const newCertificateNumber =
Number(certificateNumber) + 1;


localStorage.setItem(
"certificateNumber",
newCertificateNumber
);

   

const certificateID =
"ABS-2026-" +
String(newCertificateNumber).padStart(4,"0");


// Date

const date = new Date().toLocaleDateString("en-IN");


// Save Certificate Record
   
const certificateData = {

id: certificateID,

name: name,

course: course,

duration: duration,

date: date

};

localStorage.setItem(

certificateID,

JSON.stringify(certificateData)

);

// Save Certificate List

let certificateList = 
JSON.parse(localStorage.getItem("certificateList")) || [];


certificateList.push(certificateID);


localStorage.setItem(
"certificateList",
JSON.stringify(certificateList)
);
   


const certificateWindow = window.open("","_blank");


certificateWindow.document.write(`

<html>

<head>

<title>Certificate - Anjali Bike Driving School</title>


<style>

body{

font-family:Arial;
background:#f5f7fb;
padding:40px;
text-align:center;

}


.certificate-box{

background:
linear-gradient(135deg,#ffffff,#fff8e7);

border:12px double #d4af37;

padding:60px 40px;

border-radius:25px;

box-shadow:
0 20px 50px rgba(0,0,0,.25);

position:relative;

}


.certificate-box:before{

content:"🏍️";

font-size:70px;

display:block;

margin-bottom:15px;

}


h1{

color:#111;

font-size:38px;

letter-spacing:1px;

}


h2{

color:#d62828;

font-size:32px;

margin:15px 0;

}


h3{

color:#333;

}


p{

font-size:18px;

color:#555;

line-height:1.6;

}


.id{

background:#f5f5f5;

padding:10px;

border-radius:10px;

display:inline-block;

font-weight:700;

color:#111;

}


h1{

color:#d62828;
font-size:35px;

}


h2{

font-size:30px;
color:#222;

}


p{

font-size:18px;

}


.id{

margin-top:30px;
font-weight:bold;

}


</style>

</head>


<body>


<div class="certificate-box">


<img src="images/logo.jpeg"
style="
width:100px;
height:100px;
object-fit:contain;
margin-bottom:15px;
">

<h1>
Anjali Bike Driving School
</h1>


<p style="
font-size:18px;
color:#d62828;
font-weight:700;
">
Ride Safe • Ride Smart
</p>


<h2>
Certificate of Completion
</h2>


<p>
This certificate is proudly presented to
</p>


<h2>
${name}
</h2>


<p>
For successfully completing
</p>


<h3>
${course}
</h3>


<p>
Training Duration: ${duration}
</p>


<p class="id">
Certificate ID: ${certificateID}
</p>

<br>

<img 
src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://aryanparihar6000-lang.github.io/anjali-bike-driving-school/certificate-verification.html?id=${certificateID}"
style="
width:120px;
height:120px;
margin-top:20px;
">

<p style="
font-size:14px;
color:#555;
">
Scan QR Code to Verify Certificate
</p>


<p>
Date: ${date}
</p>


<br>

<div style="display:flex;justify-content:space-around;margin-top:40px;">

<div>
_____________<br>
Instructor
</div>


<div>
_____________<br>
Director
</div>

</div>

<h3>
Authorized Signature
</h3>

<br>

<button onclick="window.print()" 
style="
padding:15px 30px;
background:#d62828;
color:white;
border:none;
border-radius:50px;
font-size:18px;
cursor:pointer;
">

Download / Print Certificate

</button>

</div>


</body>

</html>

`);


}

// ==========================
// DOWNLOAD CERTIFICATE PDF
// ==========================

function downloadCertificate(){

const certificate = document.querySelector(".certificate-preview");

if(!certificate){

alert("Please generate certificate first");

return;

}


html2pdf()

.from(certificate)

.save("Anjali-Bike-Driving-School-Certificate.pdf");

}

function testCertificate(){

alert("JS Working");

}


console.log("generateCertificate available:", typeof generateCertificate);

/* ==========================
MOBILE MENU
========================== */

const menu = document.getElementById("menu-toggle");
const nav = document.querySelector("nav");

if (menu && nav) {
    menu.addEventListener("click", function () {
        nav.classList.toggle("active");
    });
}

function searchCertificates(){

const keyword =
document.getElementById("searchCertificate").value.toLowerCase();

const list =
document.getElementById("certificateList");

const ids =
JSON.parse(localStorage.getItem("certificateList")) || [];

list.innerHTML = "";

ids.forEach(id=>{

const data =
JSON.parse(localStorage.getItem(id));

if(!data) return;

if(
data.name.toLowerCase().includes(keyword) ||
id.toLowerCase().includes(keyword)
){

list.innerHTML += `
<div style="
background:#fff;
padding:15px;
margin:10px 0;
border-radius:12px;
box-shadow:0 5px 15px rgba(0,0,0,.1);
">
<b>${data.name}</b><br>
${data.course}<br>
${id}
</div>
`;

}

});

}
