import React, { useEffect, useState } from "react";
import About from "./About";
import VendorSlider from "./VendorSlider";
import AboutVid from "../videos/about.mp4";
import Team from "./Team";
import "animate.css/animate.min.css";

export const AboutPg = () => {
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

  return (
    <div>
      {loading && (
        <div
          id="spinner"
          className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
        >
          <div className="spinner"></div>
        </div>
      )}
      <div
        className="container-fluid bg-primary py-5 bg-header position-relative"
        style={{ marginBottom: "90px" }}
      >
        <video
          autoPlay
          muted
          loop
          className="position-absolute w-100 h-100"
          style={{ top: 0, left: 0, objectFit: "cover", zIndex: 1 }}
        >
          <source src={AboutVid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="row py-5 position-relative" style={{ zIndex: 2 }}>
          <div className="col-12 pt-lg-5 mt-lg-5 text-center text-dark">
            <h1 className="display-4 animated zoomIn text-dark">About Us</h1>
            <a href="#" className="h5 text-dark">
              Home
            </a>
            <i className="far fa-circle text-dark px-2"></i>
            <a href="#" className="h5 text-dark">
              About
            </a>
          </div>
        </div>
      </div>
      <div className="about-section">
        <About />
      </div>
      <Team />
    </div>
  );
};

export default AboutPg;
