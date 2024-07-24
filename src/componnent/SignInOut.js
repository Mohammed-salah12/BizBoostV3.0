import React, { useEffect, useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import "../assets/SignInOut.css";
import signin from "../img/signin.jpg"; // Adjust path as necessary

const SignInOut = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(true);
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);
    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  useEffect(() => {
    setAnimationClass("animate__animated animate__zoomIn");

    const elements = document.querySelectorAll(".animate-on-load");
    elements.forEach((el) => {
      el.classList.remove("animate__animated", "animate__zoomIn");
      void el.offsetWidth; // Trigger reflow
      el.classList.add("animate__animated", "animate__zoomIn");
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 45) {
        navbar.classList.add("sticky-top", "shadow-sm");
      } else {
        navbar.classList.remove("sticky-top", "shadow-sm");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
  };

  const handleBack = () => {
    setIsSignUp(false); // This will go back to the SignIn form
  };

  return (
    <div className="signinout-page">
      <div className="image-container">
        <img src={signin} alt="Example" className="example-image" />
      </div>
      <div className="signinout-container container">
        <div className="signinout-flex-container">
          <div className="form-container">
            <div className="toggle-button mb-4">
              {isSignUp && (
                <button
                  onClick={handleBack}
                  className="btn btn-secondary backBtnn"
                >
                  Back
                </button>
              )}
              <button onClick={toggleSignUp} className="btn btn-primary">
                {isSignUp
                  ? "Already have an account? Sign In"
                  : "Don’t have an account? Sign Up"}
              </button>
            </div>
            {isSignUp ? <SignUp /> : <SignIn />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInOut;
