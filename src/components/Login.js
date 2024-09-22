import React, { useRef, useState } from "react";
import Header from "./Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errors, setErrors] = useState({});

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const validationErrors = checkValidData(
      email.current.value,
      password.current.value
    );
    setErrors(validationErrors || {});

    if (validationErrors) {
      // Display error notifications
      Object.values(validationErrors).forEach((error) => {
        toast.error(error);
      });
    } else {
      // Create a new user or Sign in
      if (!isSignInForm) {
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            const user = userCredential.user;
            toggleSignInForm();
          })
          .catch((error) => {
            const firebaseError = checkValidData(
              email.current.value,
              password.current.value,
              error.code
            ); // Pass Firebase error code
            setErrors(firebaseError || { auth: "Unexpected error occurred" });
            Object.values(firebaseError || {}).forEach((errMsg) =>
              toast.error(errMsg)
            );
          });
      } else {
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            const user = userCredential.user;
          })
          .catch((error) => {
            const firebaseError = checkValidData(
              email.current.value,
              password.current.value,
              error.code
            ); // Pass Firebase error code
            setErrors(firebaseError || { auth: "Unexpected error occurred" });
            Object.values(firebaseError || {}).forEach((errMsg) =>
              toast.error(errMsg)
            );
          });
      }
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <ToastContainer />
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 bg-black z-10"></div>
        <img
          className="absolute inset-0 object-cover w-full h-full z-20"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/335ddde7-3955-499c-b4cc-ca2eb7e1ae71/a7d20bc1-831c-4f9d-8153-11bdf7a08d23/IN-en-20240624-POP_SIGNUP_TWO_WEEKS-perspective_WEB_13cda806-d858-493e-b4aa-f2792ff965dc_small.jpg"
          alt="bg-image"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-transparent opacity-50 z-30"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 bg-black bg-opacity-75 rounded z-40 phone:w-full lg:w-1/5">
          <form className="space-y-4">
            <h1 className="font-bold text-3xl py-2 text-white">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>
            <input
              className="block w-full p-2 rounded bg-gray-700 text-white placeholder-gray-400"
              ref={email}
              type="text"
              placeholder="Email"
            />
            <input
              className="block w-full p-2 rounded bg-gray-700 text-white placeholder-gray-400"
              ref={password}
              type="password"
              placeholder="Password"
            />
            <button
              className="w-full p-2 bg-red-600 text-white rounded hover:bg-red-700"
              type="button"
              onClick={handleButtonClick}
            >
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            <p
              className="py-2 text-white cursor-pointer"
              onClick={toggleSignInForm}
            >
              {isSignInForm
                ? "New to Netflix? Sign up now."
                : "Already Registered User? Sign in now."}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
