/* ==================================
   CERTIFICATE GENERATOR
================================== */


function generateCertificate(){


let name =
document.getElementById("inputName").value;



let course =
document.getElementById("inputCourse").value;



if(name==""){

alert("Please Enter Student Name");

return;

}



// Certificate ID

let certificateID =
"ABDS-" +
new Date().getFullYear() +
"-" +
Math.floor(1000 + Math.random()*9000);




// Date

let today =
new Date().toLocaleDateString("en-IN");




// Update Certificate


document.getElementById("studentName").innerHTML =
name;


document.getElementById("courseName").innerHTML =
course;


document.getElementById("certificateId").innerHTML =
certificateID;


document.getElementById("date").innerHTML =
today;

// QR CODE

let verifyLink =
"https://anjali-bike-driving-school.com/verify?id="
+ certificateID;


document.getElementById("qrCode").src =

"https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="
+ encodeURIComponent(verifyLink);

}

// ===============================
// DOWNLOAD CERTIFICATE PDF
// ===============================


function downloadCertificate(){


window.print();


}
