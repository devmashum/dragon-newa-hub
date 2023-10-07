// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDmr60bSnNa3bz63GsJ5QgBPRG5TqOVF-E",
    authDomain: "react-dragon-news-auth-b87bf.firebaseapp.com",
    projectId: "react-dragon-news-auth-b87bf",
    storageBucket: "react-dragon-news-auth-b87bf.appspot.com",
    messagingSenderId: "948634801402",
    appId: "1:948634801402:web:7d15f25bd6c15762016543"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;