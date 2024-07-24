import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "font-awesome/css/font-awesome.min.css";
import "animate.css";
import { useNavigate } from "react-router-dom";

import {
  FaUser,
  FaCalendarAlt,
  FaBullhorn,
  FaHandsHelping,
} from "react-icons/fa";
import CampaignImg1 from "../img/blog-1.jpg";
import CampaignImg2 from "../img/blog-2.jpg";
import CampaignImg3 from "../img/blog-3.jpg";

const Campaign = () => {
  const navigate = useNavigate();

  const handleCampaignClick = () => {
    navigate("/campaignDetails");
  };
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
          <h5 className="fw-bold text-primary text-uppercase">
            Latest StartUps
          </h5>
          <h1 className="mb-0">Check Startups Needs, Give Them A Boost</h1>
        </div>
        <div className="row g-5">
          <div
            className="col-lg-4 animate__animated animate__slideInUp"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="blog-item bg-light rounded overflow-hidden">
              <div className="blog-img position-relative overflow-hidden">
                <img className="img-fluid" src={CampaignImg1} alt="Blog 1" />
                <a
                  className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4"
                  href="#"
                >
                  See Profile
                </a>
              </div>
              <div className="p-4">
                <div className="d-flex mb-3">
                  <small className="me-3">
                    <FaUser className="text-primary me-2" /> Company Name
                  </small>
                  <small>
                    <FaCalendarAlt className="text-primary me-2" /> 01 Jan, 2045
                  </small>
                </div>
                <h4 className="mb-3">StartUp Category</h4>
                <p>StartUp Description</p>
                <a className="text-uppercase" href="#">
                  Read More <i className="bi bi-arrow-right"></i>
                </a>
                <div className="mt-3">
                  <button
                    className="btn btn-primary me-2"
                    onClick={handleCampaignClick}
                  >
                    <FaBullhorn /> Campaign
                  </button>
                  <button className="btn btn-success">
                    <FaHandsHelping />
                    Be Volunteers
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 animate__animated animate__slideInUp"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="blog-item bg-light rounded overflow-hidden">
              <div className="blog-img position-relative overflow-hidden">
                <img className="img-fluid" src={CampaignImg2} alt="Blog 2" />
                <a
                  className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4"
                  href="#"
                >
                  See Profile
                </a>
              </div>
              <div className="p-4">
                <div className="d-flex mb-3">
                  <small className="me-3">
                    <FaUser className="text-primary me-2" /> Company Name
                  </small>
                  <small>
                    <FaCalendarAlt className="text-primary me-2" /> 01 Jan, 2045
                  </small>
                </div>
                <h4 className="mb-3">StartUp Category</h4>
                <p>StartUp Description</p>
                <a className="text-uppercase" href="#">
                  Read More <i className="bi bi-arrow-right"></i>
                </a>
                <div className="mt-3">
                  <button
                    className="btn btn-primary me-2"
                    onClick={handleCampaignClick}
                  >
                    <FaBullhorn /> Campaign
                  </button>
                  <button className="btn btn-success">
                    <FaHandsHelping /> Be Volunteers
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 animate__animated animate__slideInUp"
            style={{ animationDelay: "0.9s" }}
          >
            <div className="blog-item bg-light rounded overflow-hidden">
              <div className="blog-img position-relative overflow-hidden">
                <img className="img-fluid" src={CampaignImg3} alt="Blog 3" />
                <a
                  className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4"
                  href="#"
                >
                  See Profile
                </a>
              </div>
              <div className="p-4">
                <div className="d-flex mb-3">
                  <small className="me-3">
                    <FaUser className="text-primary me-2" /> Company Name
                  </small>
                  <small>
                    <FaCalendarAlt className="text-primary me-2" /> 01 Jan, 2045
                  </small>
                </div>
                <h4 className="mb-3">StartUp Category</h4>
                <p>StartUp Description</p>
                <a className="text-uppercase" href="#">
                  Read More <i className="bi bi-arrow-right"></i>
                </a>
                <div className="mt-3">
                  <button
                    className="btn btn-primary me-2"
                    onClick={handleCampaignClick}
                  >
                    <FaBullhorn /> Campaign
                  </button>
                  <button className="btn btn-success">
                    <FaHandsHelping /> Be Volunteers
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campaign;
