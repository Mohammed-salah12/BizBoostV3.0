import React, { useEffect } from "react";
import About from "./About";
import VendorSlider from "./VendorSlider";
import AboutVid from "../videos/about.mp4";
import Team from "./Team";
import "animate.css/animate.min.css";

export const AboutPg = () => {
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
