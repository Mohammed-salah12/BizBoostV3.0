import React from "react";
import FeatureImg from "../img/feature.jpg"; // Update the path to your image file
import { FaCubes, FaAward, FaUsersCog, FaPhoneAlt } from "react-icons/fa"; // Import the necessary icons
import "bootstrap-icons/font/bootstrap-icons.css"; // Ensure Bootstrap Icons is imported

const Features = () => {
  return (
    <div
      className="container-fluid py-5 animate__animated animate__fadeInUp"
      style={{ animationDelay: "0.1s" }}
    >
      <div className="container py-5">
        <div
          className="section-title text-center position-relative pb-3 mb-5 mx-auto"
          style={{ maxWidth: "600px" }}
        >
          <h5 className="fw-bold text-primary text-uppercase">Why Choose Us</h5>
          <h1 className="mb-0">
            We Are Here to BOOOST Your Business Exponentially
          </h1>
        </div>
        <div className="row g-5">
          <div className="col-lg-4">
            <div className="row g-5">
              <div
                className="col-12 animate__animated animate__zoomIn"
                style={{ animationDelay: "0.2s" }}
              >
                <div
                  className="bg-primary rounded d-flex align-items-center justify-content-center mb-3"
                  style={{ width: "60px", height: "60px" }}
                >
                  <FaCubes className="text-white" size={30} />
                </div>
                <h4>Free platform</h4>
                <p className="mb-0">
                  You Will Find Everything You Need For Your Business Here!
                </p>
              </div>
              <div
                className="col-12 animate__animated animate__zoomIn"
                style={{ animationDelay: "0.6s" }}
              >
                <div
                  className="bg-primary rounded d-flex align-items-center justify-content-center mb-3"
                  style={{ width: "60px", height: "60px" }}
                >
                  <FaAward className="text-white" size={30} />
                </div>
                <h4>Make Your Own Campaign</h4>
                <p className="mb-0">
                  Start your Campaign and start getting money for your business
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 animate__animated animate__zoomIn"
            style={{ animationDelay: "0.9s", minHeight: "350px" }}
          >
            <div className="position-relative h-100">
              <img
                className="position-absolute w-100 h-100 rounded animate__animated animate__zoomIn"
                style={{ objectFit: "cover", animationDelay: "0.1s" }}
                src={FeatureImg}
                alt="Feature"
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="row g-5">
              <div
                className="col-12 animate__animated animate__zoomIn"
                style={{ animationDelay: "0.4s" }}
              >
                <div
                  className="bg-primary rounded d-flex align-items-center justify-content-center mb-3"
                  style={{ width: "60px", height: "60px" }}
                >
                  <FaUsersCog className="text-white" size={30} />
                </div>
                <h4>Find Volunteers</h4>
                <p className="mb-0">
                  Find Volunteers that suits your needs, web developers,
                  marketers, UI/UX designers
                </p>
              </div>
              <div
                className="col-12 animate__animated animate__zoomIn"
                style={{ animationDelay: "0.8s" }}
              >
                <div
                  className="bg-primary rounded d-flex align-items-center justify-content-center mb-3"
                  style={{ width: "60px", height: "60px" }}
                >
                  <FaPhoneAlt className="text-white" size={30} />
                </div>
                <h4>Find Investors, Mentors, .. ETC</h4>
                <p className="mb-0">
                  BizBoost is not just a connector. We are a platform where you
                  will find everyone you need—investors, mentors, volunteers,
                  and more—to boost your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
