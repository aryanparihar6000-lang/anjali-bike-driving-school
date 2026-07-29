// Firebase Configuration

const firebaseConfig = {

apiKey: "AIzaSyBhNRC7eP39bJsH5TIDAicK2i25OEzqTPo",

authDomain: "anjali-bike-driving-school.firebaseapp.com",

projectId: "anjali-bike-driving-school",

storageBucket: "anjali-bike-driving-school.firebasestorage.app",

messagingSenderId: "23594914293",

appId: "1:23594914293:web:5bfe3a568fa079778b50bc",

measurementId: "G-0CDXL2H9DV"

};


// Initialize Firebase

firebase.initializeApp(firebaseConfig);


// Firestore Database

const db = firebase.firestore();
