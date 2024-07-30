// src/components/Businesses.js
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import "../assets/Businesses.css";
import CompanyImg from "../img/Funder.jpeg";

const Businesses = () => {
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

  const categories = [
    "Tech Company",
    "Marketing Company",
    "Finance Company",
    "Healthcare Company",
    "Retail Company",
    "Retail Company",
    "Retail Company",
    "Retail Company",
    "Retail Company",
    "Retail Company",
    "Retail Company",
    "Retail Company",
    "Retail Company",
    "Retail Company",

    // Add more categories as needed
  ];

  const businessData = [
    {
      name: "NewLine For Information Technology",
      founder: "Michael Roven",
      description: `NewLine For Information Technology is a renowned technology company located in the heart of New York City. Our mission is to provide innovative solutions and products to help businesses achieve their goals. We strive to create a strong, supportive, and inclusive work environment where employees feel valued and encouraged to contribute to the success of our clients.`,
      img: CompanyImg,
    },
    {
      name: "Tech Innovators",
      founder: "Sarah Connor",
      description: `Tech Innovators is a leading company in AI and machine learning. Our goal is to revolutionize the tech industry with cutting-edge solutions. Our team of experts is dedicated to pushing the boundaries of technology to provide top-notch services.`,
      img: CompanyImg,
    },
    {
      name: "HealthCare Solutions",
      founder: "John Doe",
      description: `HealthCare Solutions is dedicated to providing advanced healthcare services and products. We aim to improve the quality of life for our patients through innovative medical solutions and excellent patient care.`,
      img: CompanyImg,
    },
    {
      name: "HealthCare Solutions",
      founder: "John Doe",
      description: `HealthCare Solutions is dedicated to providing advanced healthcare services and products. We aim to improve the quality of life for our patients through innovative medical solutions and excellent patient care.`,
      img: CompanyImg,
    },
    {
      name: "HealthCare Solutions",
      founder: "John Doe",
      description: `HealthCare Solutions is dedicated to providing advanced healthcare services and products. We aim to improve the quality of life for our patients through innovative medical solutions and excellent patient care.`,
      img: CompanyImg,
    },
    {
      name: "HealthCare Solutions",
      founder: "John Doe",
      description: `HealthCare Solutions is dedicated to providing advanced healthcare services and products. We aim to improve the quality of life for our patients through innovative medical solutions and excellent patient care.`,
      img: CompanyImg,
    },
    {
      name: "HealthCare Solutions",
      founder: "John Doe",
      description: `HealthCare Solutions is dedicated to providing advanced healthcare services and products. We aim to improve the quality of life for our patients through innovative medical solutions and excellent patient care.`,
      img: CompanyImg,
    },
    {
      name: "NewLine For Information Technology",
      founder: "Michael Roven",
      description: `NewLine For Information Technology is a renowned technology company located in the heart of New York City. Our mission is to provide innovative solutions and products to help businesses achieve their goals. We strive to create a strong, supportive, and inclusive work environment where employees feel valued and encouraged to contribute to the success of our clients.`,
      img: CompanyImg,
    },

    {
      name: "NewLine For Information Technology",
      founder: "Michael Roven",
      description: `NewLine For Information Technology is a renowned technology company located in the heart of New York City. Our mission is to provide innovative solutions and products to help businesses achieve their goals. We strive to create a strong, supportive, and inclusive work environment where employees feel valued and encouraged to contribute to the success of our clients.`,
      img: CompanyImg,
    },
    {
      name: "NewLine For Information Technology",
      founder: "Michael Roven",
      description: `NewLine For Information Technology is a renowned technology company located in the heart of New York City. Our mission is to provide innovative solutions and products to help businesses achieve their goals. We strive to create a strong, supportive, and inclusive work environment where employees feel valued and encouraged to contribute to the success of our clients.`,
      img: CompanyImg,
    },

    {
      name: "NewLine For Information Technology",
      founder: "Michael Roven",
      description: `NewLine For Information Technology is a renowned technology company located in the heart of New York City. Our mission is to provide innovative solutions and products to help businesses achieve their goals. We strive to create a strong, supportive, and inclusive work environment where employees feel valued and encouraged to contribute to the success of our clients.`,
      img: CompanyImg,
    },
    // Add more business data as needed
  ];

  return (
    <div className="businesses-container">
      {loading && (
        <div
          id="spinner"
          className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
        >
          <div className="spinner"></div>
        </div>
      )}
      <Sidebar categories={categories} />
      <div className="BusinessHolder">
        {businessData.map((business, index) => (
          <div className="BusinessCard" key={index}>
            <div className="upperProfileHolder">
              <div className="companyNameImg">
                <img src={business.img} alt="" className="BusinessImg" />
                <div className="companyDetails">
                  <h2 className="companyName">{business.name}</h2>
                  <h4 className="founderName">Founder: {business.founder}</h4>
                </div>
              </div>
              <button className="viewProfileBtn">View Profile</button>
            </div>

            <div className="BusinessDesc">
              <p>{business.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Businesses;
