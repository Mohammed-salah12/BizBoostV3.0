import React, { useState } from "react";

const SignUp = () => {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState("");

  const handleRoleSelection = (selectedRole) => {
    setRole(selectedRole);
    setStep(2);
  };

  const handleBack = () => {
    setStep(1);
    setRole("");
  };

  return (
    <div className="signup-container">
      {step === 1 && (
        <div className="role-selection">
          <h2>Select Your Role</h2>
          <div className="role-buttons">
            <button
              onClick={() => handleRoleSelection("Volunteer")}
              className="btn btn-primary"
            >
              Volunteer
            </button>
            <button
              onClick={() => handleRoleSelection("Business")}
              className="btn btn-primary"
            >
              Business
            </button>
            <button
              onClick={() => handleRoleSelection("Mentor")}
              className="btn btn-primary"
            >
              Mentor
            </button>
            <button
              onClick={() => handleRoleSelection("Investor")}
              className="btn btn-primary"
            >
              Investor
            </button>
          </div>
        </div>
      )}
      {step === 2 && (
        <div className="signup-form">
          <h2>Sign Up as {role}</h2>
          {/* Add your signup form fields here */}
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
      )}
    </div>
  );
};

export default SignUp;
