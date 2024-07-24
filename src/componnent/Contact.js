import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ContactUsVid from "../videos/contactus.mp4"; // Import video
import BusinessContact from "../img/businessContact.jpg"; // Import background image
import { FaPhoneAlt, FaEnvelopeOpen, FaMapMarkerAlt } from "react-icons/fa";
import "../index.css";

const Contact = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request or delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300); // Adjust the timeout duration as needed

    return () => clearTimeout(timer); // Cleanup on unmount
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

  return (
    <div>
      {/* Spinner */}
      {loading && (
        <div
          id="spinner"
          className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
        >
          <div className="spinner"></div>
        </div>
      )}

      {/* Content */}
      {!loading && (
        <>
          {/* Navbar */}
          <div className="container-fluid position-relative p-0 bg-header">
            {/* Page Header */}
            <div
              className="container-fluid py-5 bg-header"
              style={{
                backgroundImage: `url(${BusinessContact})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                marginBottom: "90px",
                color: "white",
                textAlign: "center",
              }}
            >
              <div className="row py-5">
                <div className="col-12 pt-lg-5 mt-lg-5">
                  <h1 className="display-4 animate__animated animate__zoomIn">
                    Contact Us
                  </h1>
                  <a href="/" className="h5 text-white">
                    Home
                  </a>
                  <i className="far fa-circle text-white px-2"></i>
                  <a href="/contact" className="h5 text-white">
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Full Screen Search */}
          <div className="modal fade" id="searchModal" tabIndex="-1">
            <div className="modal-dialog modal-fullscreen">
              <div
                className="modal-content"
                style={{ background: "rgba(9, 30, 62, .7)" }}
              >
                <div className="modal-header border-0">
                  <button
                    type="button"
                    className="btn bg-white btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body d-flex align-items-center justify-content-center">
                  <div className="input-group" style={{ maxWidth: "600px" }}>
                    <input
                      type="text"
                      className="form-control bg-transparent border-primary p-3"
                      placeholder="Type search keyword"
                    />
                    <button className="btn btn-primary px-4">
                      <i className="bi bi-search"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div
            className="container-fluid py-5 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="container py-5">
              <div
                className="section-title text-center position-relative pb-3 mb-5 mx-auto"
                style={{ maxWidth: "600px" }}
              >
                <h5 className="fw-bold text-primary text-uppercase">
                  Contact Us
                </h5>
                <h1 className="mb-0">
                  If You Have Any Boosting QU, Feel Free To Contact Us
                </h1>
              </div>
              <div className="row g-5 mb-5">
                <div className="col-lg-4">
                  <div
                    className="d-flex align-items-center wow fadeIn"
                    data-wow-delay="0.1s"
                  >
                    <div
                      className="bg-primary d-flex align-items-center justify-content-center rounded"
                      style={{ width: "60px", height: "60px" }}
                    >
                      <FaPhoneAlt className="text-white" size="24" />
                    </div>
                    <div className="ps-4">
                      <h5 className="mb-2">Call to ask any question</h5>
                      <h4 className="text-primary mb-0">+972 597 955394</h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div
                    className="d-flex align-items-center wow fadeIn"
                    data-wow-delay="0.4s"
                  >
                    <div
                      className="bg-primary d-flex align-items-center justify-content-center rounded"
                      style={{ width: "60px", height: "60px" }}
                    >
                      <FaEnvelopeOpen className="text-white" size="24" />
                    </div>
                    <div className="ps-4">
                      <h5 className="mb-2">Email</h5>
                      <h4 className="text-primary mb-0">BizBoost@Info.com</h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div
                    className="d-flex align-items-center wow fadeIn"
                    data-wow-delay="0.8s"
                  >
                    <div
                      className="bg-primary d-flex align-items-center justify-content-center rounded"
                      style={{ width: "60px", height: "60px" }}
                    >
                      <FaMapMarkerAlt className="text-white" size="24" />
                    </div>
                    <div className="ps-4">
                      <h5 className="mb-2">Visit our office</h5>
                      <h4 className="text-primary mb-0">123 Street, NY, USA</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row g-5">
                <div className="col-lg-6 wow slideInUp" data-wow-delay="0.3s">
                  <form>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <input
                          type="text"
                          className="form-control border-0 bg-light px-4"
                          placeholder="Your Name"
                          style={{ height: "55px" }}
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="email"
                          className="form-control border-0 bg-light px-4"
                          placeholder="Your Email"
                          style={{ height: "55px" }}
                        />
                      </div>
                      <div className="col-12">
                        <input
                          type="text"
                          className="form-control border-0 bg-light px-4"
                          placeholder="Subject"
                          style={{ height: "55px" }}
                        />
                      </div>
                      <div className="col-12">
                        <textarea
                          className="form-control border-0 bg-light px-4 py-3"
                          rows="4"
                          placeholder="Message"
                        ></textarea>
                      </div>
                      <div className="col-12">
                        <button
                          className="btn btn-primary w-100 py-3"
                          type="submit"
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="col-lg-6 wow slideInUp" data-wow-delay="0.6s">
                  <video
                    className="position-relative w-100"
                    style={{ height: "400px", objectFit: "cover" }}
                    autoPlay
                    muted
                    loop
                  >
                    <source src={ContactUsVid} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Contact;
