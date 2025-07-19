// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKtn0h0_kvWv7sFW29140Fw4Q2P7e2Gpk",
  authDomain: "wanderly-235a3.firebaseapp.com",
  projectId: "wanderly-235a3",
  storageBucket: "wanderly-235a3.firebasestorage.app",
  messagingSenderId: "347072362527",
  appId: "1:347072362527:web:356a8baba6e4401502bd2a",
  measurementId: "G-S7E6LXX0C0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth= getAuth()
 export const db=getFirestore();