// Hero.js
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar"; // Import the Navbar component
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";
import "../assets/hero.css";
import "../index.css";
import CarasoleImg1 from "../img/carousel-1.jpg";
import { FaAward } from "react-icons/fa";
import CarasoleImg2 from "../img/carousel-2.jpg";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"; // Import specific icons

const Hero = () => {
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
      <div className="container-fluid position-relative p-0 bg-navbar">
        <div
          id="header-carousel"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100" src={CarasoleImg1} alt="Carousel 1" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: "900px" }}>
                  <h5
                    className={`text-white text-uppercase mb-3 animate-on-load ${animationClass}`}
                  >
                    Creative & Innovative
                  </h5>
                  <h1
                    className={`display-1 text-white mb-md-4 w-100 animate-on-load ${animationClass}`}
                  >
                    Empowering new businesses with support and connections
                  </h1>
                  <Link
                    to="/quote"
                    className={`btn btn-primary py-md-3 px-md-5 me-3 animate-on-load ${animationClass}`}
                  >
                    Start Your Campaign
                  </Link>
                  <Link
                    to="#"
                    className={`btn btn-outline-light py-md-3 px-md-5 animate-on-load ${animationClass}`}
                  >
                    Need Volunteers?
                  </Link>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src={CarasoleImg2} alt="Carousel 2" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: "900px" }}>
                  <h5
                    className={`text-white text-uppercase mb-3 animate-on-load ${animationClass}`}
                  >
                    Creative & Innovative
                  </h5>
                  <h1
                    className={`display-1 text-white mb-md-4 animate-on-load ${animationClass}`}
                  >
                    Empowering new businesses with support and connections
                  </h1>
                  <Link
                    to="/quote"
                    className={`btn btn-primary py-md-3 px-md-5 me-3 animate-on-load ${animationClass}`}
                  >
                    Start Your Campaign
                  </Link>
                  <Link
                    to="#"
                    className={`btn btn-outline-light py-md-3 px-md-5 animate-on-load ${animationClass}`}
                  >
                    Need Volunteers?
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="prev"
          >
            <FaArrowLeft
              className="carousel-control-prev-icon"
              aria-hidden="true"
            />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="next"
          >
            <FaArrowRight
              className="carousel-control-next-icon"
              aria-hidden="true"
            />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
