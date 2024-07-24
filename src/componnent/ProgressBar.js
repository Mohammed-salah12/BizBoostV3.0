import React from "react";
import "../assets/SignInOut.css";
const ProgressBar = ({ step }) => {
  return (
    <div className="progress-bar-container d-flex justify-content-between">
      <div className={`progress-bar-step ${step >= 1 ? "active" : ""}`}></div>
      <div className={`progress-bar-step ${step >= 2 ? "active" : ""}`}></div>
    </div>
  );
};

export default ProgressBar;
