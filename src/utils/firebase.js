// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBF2tJthB_n6t5Rc_8gHXetuRYU29sZ_7k",
  authDomain: "netflixgpt9.firebaseapp.com",
  projectId: "netflixgpt9",
  storageBucket: "netflixgpt9.appspot.com",
  messagingSenderId: "149026550787",
  appId: "1:149026550787:web:3c92ae19f400a870dc4a36",
  measurementId: "G-RHLXK7B2Y9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
