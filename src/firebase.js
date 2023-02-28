// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBgtsG7H-HnPjAcG0aYZP4pjnk62NUIhaI",
    authDomain: "react-fb-auth-c4771.firebaseapp.com",
    projectId: "react-fb-auth-c4771",
    storageBucket: "react-fb-auth-c4771.appspot.com",
    messagingSenderId: "745822422484",
    appId: "1:745822422484:web:725e0b516293e7f39a4241",
    measurementId: "G-PR1N7E6ML0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);