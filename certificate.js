/* ==================================
   ANJALI BIKE DRIVING SCHOOL
   CERTIFICATE GENERATOR
================================== */


// Student Details

let student = "RAHUL SHARMA";

let course = "14 Days Bike Riding Training";


// Certificate ID Generate

let id = "ABDS-" + new Date().getFullYear() + "-" + Math.floor(1000 + Math.random() * 9000);


// Current Date

let today = new Date();

let date = today.toLocaleDateString("en-IN");



// Add Data To Certificate

document.getElementById("studentName").innerHTML = student;

document.getElementById("courseName").innerHTML = course;

document.getElementById("certificateId").innerHTML = id;

document.getElementById("date").innerHTML = date;



console.log("Certificate Generated Successfully");
