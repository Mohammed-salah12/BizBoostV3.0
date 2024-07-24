import React from "react";
import BusinessVideo from "../videos/bussiness.mp4"; // Update the path to your video file
import { FaCheck, FaPhone } from "react-icons/fa"; // Import the necessary icons
import "bootstrap-icons/font/bootstrap-icons.css"; // Ensure Bootstrap Icons is imported

const About = () => {
  return (
    <div
      className="container-fluid py-5 animate__animated animate__fadeInUp"
      style={{ animationDelay: "0.1s" }}
    >
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-7">
            <div className="section-title position-relative pb-3 mb-5">
              <h5 className="fw-bold text-primary text-uppercase">About Us</h5>
              <h1 className="mb-0">
                Boost Up Your Businesses With 100% success
              </h1>
            </div>
            <p className="mb-4">
              BizBoost ensures that 100% of your business will be boosted by
              providing fundraising, volunteers, investors, and mentors all in
              one space. Say goodbye to the cycle of applications and
              interviews, and hello to seamless growth and success.
            </p>
            <div className="row g-0 mb-3">
              <div
                className="col-sm-6 animate__animated animate__zoomIn"
                style={{ animationDelay: "0.2s" }}
              >
                <h5 className="mb-3">
                  <FaCheck className="text-primary me-3" /> Fundraising
                  Campaigns
                </h5>
                <h5 className="mb-3">
                  <FaCheck className="text-primary me-3" /> Volunteers
                </h5>
              </div>
              <div
                className="col-sm-6 animate__animated animate__zoomIn"
                style={{ animationDelay: "0.4s" }}
              >
                <h5 className="mb-3">
                  <FaCheck className="text-primary me-3" /> Investors
                </h5>
                <h5 className="mb-3">
                  <FaCheck className="text-primary me-3" /> Mentors
                </h5>
              </div>
            </div>
            <div
              className="d-flex align-items-center mb-4 animate__animated animate__fadeIn"
              style={{ animationDelay: "0.6s" }}
            >
              <div
                className="bg-primary d-flex align-items-center justify-content-center rounded"
                style={{ width: "60px", height: "60px" }}
              >
                <FaPhone className="text-white" size={30} />
              </div>
              <div className="ps-4">
                <h5 className="mb-2">Call to ask any question</h5>
                <h4 className="text-primary mb-0">+972 59 7955394</h4>
              </div>
            </div>
            <a
              href="quote.html"
              className="btn btn-primary py-3 px-5 mt-3 animate__animated animate__zoomIn"
              style={{ animationDelay: "0.9s" }}
            >
              Contact Us
            </a>
          </div>
          <div className="col-lg-5" style={{ minHeight: "500px" }}>
            <div className="position-relative h-100">
              <video
                className="position-absolute w-100 h-100 rounded animate__animated animate__zoomIn"
                style={{ objectFit: "cover", animationDelay: "0.9s" }}
                autoPlay
                loop
                muted
              >
                <source src={BusinessVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
