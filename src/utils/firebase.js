// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_KEY}`,
  authDomain: "only-gpt.firebaseapp.com",
  projectId: "only-gpt",
  storageBucket: "only-gpt.appspot.com",
  messagingSenderId: "350045464896",
  appId: "1:350045464896:web:c63d65854363f65cdbb2a5",
  measurementId: "G-1QC0C2F4BM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
