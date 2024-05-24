// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyaunSBZRuRPPrLmNsUumR1X1PnyGdLFA",
  authDomain: "purrfolio-f6b4c.firebaseapp.com",
  projectId: "purrfolio-f6b4c",
  storageBucket: "purrfolio-f6b4c.appspot.com",
  messagingSenderId: "543337530377",
  appId: "1:543337530377:web:da0b9c8165808e74a5e4d8",
  measurementId: "G-HPZB58XN7V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };