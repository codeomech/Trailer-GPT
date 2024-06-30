// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBTDPyTVv9Chrl5g5FOdJNDce2mVV1Bw4",
  authDomain: "netflixgpt-hersheyt.firebaseapp.com",
  projectId: "netflixgpt-hersheyt",
  storageBucket: "netflixgpt-hersheyt.appspot.com",
  messagingSenderId: "1077366597607",
  appId: "1:1077366597607:web:085de499458ea30a9fbf42",
  measurementId: "G-XVPSDVCPCS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth =  getAuth();