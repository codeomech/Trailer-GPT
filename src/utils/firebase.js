// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVOzLL76E9UUIU3DLegKFSUPs1DUAA-dM",
  authDomain: "trailer-gpt.firebaseapp.com",
  projectId: "trailer-gpt",
  storageBucket: "trailer-gpt.appspot.com",
  messagingSenderId: "373790933366",
  appId: "1:373790933366:web:da8b7dee83ea4702be7a57",
  measurementId: "G-057PFV6BV5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
