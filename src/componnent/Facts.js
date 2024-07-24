import React from "react";
import CountUp from "react-countup";
import "../assets/facts.css"; // Assuming you have custom styles for the facts section
import "animate.css/animate.min.css"; // Import animate.css
import { FaUsers, FaCheck, FaAward } from "react-icons/fa"; // Import the necessary icons

const Facts = () => {
  return (
    <div className="container-fluid facts py-5 pt-lg-0">
      <div className="container py-5 pt-lg-0">
        <div className="row gx-0">
          <div
            className="col-lg-4 animate__animated animate__zoomIn"
            style={{ animationDelay: "0.1s" }}
          >
            <div
              className="bg-primary shadow d-flex align-items-center justify-content-center p-4"
              style={{ height: "150px" }}
            >
              <div
                className="bg-white d-flex align-items-center justify-content-center rounded mb-2"
                style={{ width: "60px", height: "60px" }}
              >
                <FaUsers className="text-primary" size={30} />
              </div>
              <div className="ps-4">
                <h5 className="text-white mb-0">Happy Clients</h5>
                <h1 className="text-white mb-0">
                  <CountUp end={12345} duration={2.5} />
                </h1>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 animate__animated animate__zoomIn"
            style={{ animationDelay: "0.3s" }}
          >
            <div
              className="bg-light shadow d-flex align-items-center justify-content-center p-4"
              style={{ height: "150px" }}
            >
              <div
                className="bg-primary d-flex align-items-center justify-content-center rounded mb-2"
                style={{ width: "60px", height: "60px" }}
              >
                <FaCheck className="text-white" size={30} />
              </div>
              <div className="ps-4">
                <h5 className="text-primary mb-0">Projects Done</h5>
                <h1 className="mb-0">
                  <CountUp end={12345} duration={2.5} />
                </h1>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 animate__animated animate__zoomIn"
            style={{ animationDelay: "0.6s" }}
          >
            <div
              className="bg-primary shadow d-flex align-items-center justify-content-center p-4"
              style={{ height: "150px" }}
            >
              <div
                className="bg-white d-flex align-items-center justify-content-center rounded mb-2"
                style={{ width: "60px", height: "60px" }}
              >
                <FaAward className="text-primary" size={30} />
              </div>
              <div className="ps-4">
                <h5 className="text-white mb-0">Win Awards</h5>
                <h1 className="text-white mb-0">
                  <CountUp end={12345} duration={2.5} />
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facts;
