import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import { Link } from "react-router-dom";
import VendorSlider from "./VendorSlider";
import Footer from "./Footer";
import Navbar from "./Navbar";
import CampaignPic from "../img/blog-1.jpg";
import funds from "../videos/funds.mp4";
import { MdVolunteerActivism } from "react-icons/md";
import { AiOutlineTag } from "react-icons/ai";
import { FaUser, FaCalendarAlt } from "react-icons/fa";
import { BiArrowToRight } from "react-icons/bi";
import ProgressBar from "./ProgressBar";
import profilesData from "../constants/profilesData";

const CampaignPg = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);

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
      {loading && (
        <div
          id="spinner"
          className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
        >
          <div className="spinner"></div>
        </div>
      )}
      <div className="position-relative" style={{ height: "500px" }}>
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
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-8">
              <div className="row g-5">
                {profilesData.map((profile, index) => (
                  <div
                    className="col-md-6 animate__animated animate__slideInUp"
                    style={{
                      animationDelay: `${index % 2 === 0 ? "0.1s" : "0.6s"}`,
                    }}
                    key={profile.username}
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
                            {profile.username}
                          </small>
                          <small>
                            <FaCalendarAlt className="text-primary me-2" />
                            {profile.campaign.date || "01 Jan, 2045"}
                          </small>
                        </div>
                        <h4 className="mb-3">{profile.campaign.title}</h4>
                        <p>{profile.campaign.description}</p>
                        <ProgressBar
                          progress={
                            (profile.campaign.supporters /
                              profile.campaign.goal) *
                              100 || 0
                          }
                        />
                        <Link
                          to={`/campaignDetails/${profile.username}`}
                          className="btn btn-primary d-flex align-items-center py-3 px-4"
                          style={{
                            fontSize: "18px",
                            backgroundColor: "#007bff",
                            border: "none",
                            fontWeight: "bold",
                          }}
                        >
                          Boost Startup <BiArrowToRight />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-4">
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

              <div
                className="mb-5 animate__animated animate__slideInUp"
                style={{ animationDelay: "0.1s" }}
              >
                <div className="section-title section-title-sm position-relative pb-3 mb-4">
                  <h3 className="mb-0">Categories</h3>
                </div>
                <div className="link-animated d-flex flex-column justify-content-start">
                  <a
                    href="#"
                    className="h5 fw-semi-bold bg-light rounded py-2 px-3 mb-2"
                  >
                    <AiOutlineTag className="text-primary me-2" />
                    Web Design
                  </a>
                  <a
                    href="#"
                    className="h5 fw-semi-bold bg-light rounded py-2 px-3 mb-2"
                  >
                    <AiOutlineTag className="text-primary me-2" />
                    Web Development
                  </a>
                  <a
                    href="#"
                    className="h5 fw-semi-bold bg-light rounded py-2 px-3 mb-2"
                  >
                    <AiOutlineTag className="text-primary me-2" />
                    Mobile App
                  </a>
                </div>
              </div>

              <div
                className="mb-5 animate__animated animate__slideInUp"
                style={{ animationDelay: "0.1s" }}
              >
                <div className="section-title section-title-sm position-relative pb-3 mb-4">
                  <h3 className="mb-0">Latest Campaigns</h3>
                </div>
                {profilesData.map((profile, index) => (
                  <div className="d-flex mb-3" key={profile.username}>
                    <img
                      src={CampaignPic}
                      alt=""
                      className="img-fluid"
                      style={{
                        width: "80px",
                        height: "80px",
                        objectFit: "cover",
                      }}
                    />
                    <div className="ms-3">
                      <a href="#" className="h6 d-block mb-2">
                        {profile.campaign.title}
                      </a>
                      <small>
                        <FaCalendarAlt className="text-primary me-2" />
                        {profile.campaign.date || "01 Jan, 2045"}
                      </small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignPg;
