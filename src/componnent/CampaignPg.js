import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "animate.css"; // Import animate.css for animations
import VendorSlider from "./VendorSlider"; // Import the VendorSlider component
import Footer from "./Footer"; // Import the Footer component
import Navbar from "./Navbar"; // Import the Navbar component
import CampaignPic from "../img/blog-1.jpg"; // Import the Campaign image
import funds from "../videos/funds.mp4"; // Import the video
import { MdVolunteerActivism } from "react-icons/md"; // Import the volunteer icon from react-icons
import { AiOutlineTag } from "react-icons/ai"; // Import the tag icon from react-icons
import { FaUser, FaCalendarAlt } from "react-icons/fa"; // Import user and calendar icons from react-icons
import { BiArrowToRight } from "react-icons/bi"; // Import the alternative arrow icon
import "animate.css/animate.min.css";

const CampaignPg = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading by using setTimeout
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300); // Adjust time as needed

    // Clean up timeout on component unmount
    return () => clearTimeout(timer);
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
      {/* Spinner Start */}
      {loading && (
        <div
          id="spinner"
          className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
        >
          <div className="spinner"></div>
        </div>
      )}
      {/* Spinner End */}

      {/* Header Start */}
      <div
        className="position-relative"
        style={{ height: "500px" }} // Adjust the height as needed
      >
        <video
          autoPlay
          muted
          loop
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
          }}
        >
          <source src={funds} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div
          className="container-fluid py-5 text-center"
          style={{
            position: "relative",
            zIndex: 1,
          }}
        >
          <div className="row py-5">
            <div className="col-12 pt-lg-5 mt-lg-5 text-center text-white">
              <h1 className="display-4 animate__animated animate__zoomIn">
                Campaigns
              </h1>
              <a href="#" className="h5 text-white">
                Home
              </a>
              <i className="far fa-circle text-white px-2"></i>
              <a href="#" className="h5 text-white">
                Campaigns
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Header End */}

      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row g-5">
            {/* Blog List Start */}
            <div className="col-lg-8">
              <div className="row g-5">
                {[...Array(8).keys()].map((_, index) => (
                  <div
                    className="col-md-6 animate__animated animate__slideInUp"
                    style={{
                      animationDelay: `${index % 2 === 0 ? "0.1s" : "0.6s"}`,
                    }}
                    key={index}
                  >
                    <div className="blog-item bg-light rounded overflow-hidden">
                      <div className="blog-img position-relative overflow-hidden">
                        <img className="img-fluid" src={CampaignPic} alt="" />
                        <a
                          className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4"
                          href="#"
                        >
                          Web Design
                        </a>
                      </div>
                      <div className="p-4">
                        <div className="d-flex mb-3">
                          <small className="me-3">
                            <FaUser className="text-primary me-2" />
                            John Doe
                          </small>
                          <small>
                            <FaCalendarAlt className="text-primary me-2" />
                            01 Jan, 2045
                          </small>
                        </div>
                        <h4 className="mb-3">How to build a website</h4>
                        <p>
                          Dolor et eos labore stet justo sed est sed sed sed
                          dolor stet amet
                        </p>
                        <a className="text-uppercase" href="#">
                          Read More <BiArrowToRight />
                        </a>
                      </div>

                      {/* Buttons Start */}
                      <div className="p-4 d-flex justify-content-between">
                        <a
                          href="#campaign"
                          className="btn btn-primary d-flex align-items-center py-2 px-4"
                          style={{
                            fontSize: "14px",
                            backgroundColor: "#007bff",
                            border: "none",
                          }}
                        >
                          <FaCalendarAlt className="me-2" />
                          Campaign
                        </a>
                        <a
                          href="#volunteer"
                          className="btn btn-success d-flex align-items-center py-2 px-4"
                          style={{
                            fontSize: "14px",
                            backgroundColor: "#28a745",
                            border: "none",
                          }}
                        >
                          <MdVolunteerActivism className="me-2" />
                          Be A Volunteer
                        </a>
                      </div>
                      {/* Buttons End */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Blog List End */}

            {/* Sidebar Start */}
            <div className="col-lg-4">
              {/* Search Form Start */}
              <div
                className="mb-5 animate__animated animate__slideInUp"
                style={{ animationDelay: "0.1s" }}
              >
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control p-3"
                    placeholder="Keyword"
                  />
                  <button className="btn btn-primary px-4">
                    <BiArrowToRight />
                  </button>
                </div>
              </div>
              {/* Search Form End */}

              {/* Category Start */}
              <div
                className="mb-5 animate__animated animate__slideInUp"
                style={{ animationDelay: "0.1s" }}
              >
                <div className="section-title section-title-sm position-relative pb-3 mb-4">
                  <h3 className="mb-0">Categories</h3>
                </div>
                <div className="link-animated">
                  <a
                    href="#"
                    className="d-flex justify-content-between align-items-center py-2"
                  >
                    <span>Web Design</span>
                    <span className="text-primary">50</span>
                  </a>
                  <a
                    href="#"
                    className="d-flex justify-content-between align-items-center py-2"
                  >
                    <span>Web Development</span>
                    <span className="text-primary">35</span>
                  </a>
                  <a
                    href="#"
                    className="d-flex justify-content-between align-items-center py-2"
                  >
                    <span>Graphic Design</span>
                    <span className="text-primary">20</span>
                  </a>
                </div>
              </div>
              {/* Category End */}

              {/* Tags Start */}
              <div
                className="animate__animated animate__slideInUp"
                style={{ animationDelay: "0.1s" }}
              >
                <div className="section-title section-title-sm position-relative pb-3 mb-4">
                  <h3 className="mb-0">Tags</h3>
                </div>
                <div className="d-flex flex-wrap">
                  <a href="#" className="btn btn-light btn-sm m-1">
                    <AiOutlineTag className="me-2" />
                    Design
                  </a>
                  <a href="#" className="btn btn-light btn-sm m-1">
                    <AiOutlineTag className="me-2" />
                    Development
                  </a>
                  <a href="#" className="btn btn-light btn-sm m-1">
                    <AiOutlineTag className="me-2" />
                    Marketing
                  </a>
                  <a href="#" className="btn btn-light btn-sm m-1">
                    <AiOutlineTag className="me-2" />
                    SEO
                  </a>
                </div>
              </div>
              {/* Tags End */}
            </div>
            {/* Sidebar End */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignPg;
