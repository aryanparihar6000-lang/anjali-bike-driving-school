console.log("booking.js loaded");

// ============================
// COURSE PRICES
// ============================

const prices = {
    "7 Days Bike Training": 4000,
    "14 Days Bike Training": 7000,
    "Ladies Special Training": 5000
};


// ============================
// AUTO SELECT COURSE
// ============================

const params = new URLSearchParams(window.location.search);
const selectedCourse = params.get("course");

window.addEventListener("DOMContentLoaded", function () {

    const course = document.getElementById("course");

    if (!course) return;

    // Select course from URL
    if (selectedCourse === "7") {

        course.value = "7 Days Bike Training";

    } else if (selectedCourse === "14") {

        course.value = "14 Days Bike Training";

    } else if (selectedCourse === "ladies") {

        course.value = "Ladies Special Training";
    }

    updateCoursePrice();

});


// ============================
// COURSE PRICE UPDATE
// ============================

function updateCoursePrice() {

    const course = document.getElementById("course");
    const selectedAmount = document.getElementById("selectedAmount");
    const selectedCourseField = document.getElementById("selectedCourse");
    const coursePrice = document.getElementById("coursePrice");

    if (!course) return;

    const courseName = course.value;
    const amount = prices[courseName] || 0;

    // Save selected course
    if (selectedCourseField) {
        selectedCourseField.value = courseName;
    }

    // Save amount
    if (selectedAmount) {
        selectedAmount.value = amount;
    }

    // Show price if price element exists
    if (coursePrice) {
        coursePrice.innerHTML = amount
            ? "Fees : ₹" + amount
            : "";
    }
}


// ============================
// COURSE CHANGE EVENT
// ============================

document.addEventListener("DOMContentLoaded", function () {

    const course = document.getElementById("course");

    if (course) {
        course.addEventListener("change", updateCoursePrice);
    }

});
