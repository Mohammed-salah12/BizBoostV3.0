import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../assets/campaignDetails.css";
import defaultProfileImg from "../img/Funder.jpeg"; // Use a default image for all profiles
import profilesData from "../constants/profilesData";

const CampaignDetails = () => {
  const { username } = useParams(); // Extract username from URL parameters
  const [loading, setLoading] = useState(true);
  const [currentDonation, setCurrentDonation] = useState(5000);

  // Find the profile based on the extracted username
  const profile = profilesData.find((profile) => profile.username === username);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 300);
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

  const progressPercentage =
    (currentDonation / (profile?.campaign.goal || 1)) * 100;

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

      {!loading && profile && (
        <>
          <div className="containSidBarAndHeader">
            <div className="needsJustifiling">
              <div className="container-fluid position-relative p-0 holder divHolder">
                <div
                  className="container-fluid py-5 bg-header"
                  style={{
                    backgroundImage: `url(${defaultProfileImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    marginBottom: "90px",
                    color: "white",
                    textAlign: "center",
                    height: "300px",
                  }}
                >
                  <div className="row py-5">
                    <div className="col-12 pt-lg-5 mt-lg-5">
                      <h1 className="display-4 animate__animated animate__zoomIn">
                        {profile.campaign.title}
                      </h1>
                      <a href="/" className="h5 text-white">
                        Home
                      </a>
                      <i className="far fa-circle text-white px-2"></i>
                      <a href="/contact" className="h5 text-white">
                        Campaigns
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="campaign-sidebar sideBarHolder">
                  <h2 className="mb-4">{profile.campaign.title}</h2>
                  <div className="company-info mb-4">
                    <div className="company-header">
                      <img
                        src={profile.profileImg}
                        alt="Company Logo"
                        className="company-logo"
                      />
                      <h4 className="company-name">{profile.name}</h4>
                    </div>
                  </div>
                  <p>{profile.campaign.about}</p>
                  <div className="mb-4">
                    <h4>Donation Progress</h4>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: `${progressPercentage}%` }}
                        aria-valuenow={progressPercentage}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <span className="progress-bar-text">
                          {progressPercentage.toFixed(2)}%
                        </span>
                      </div>
                    </div>
                    <p>
                      <strong>Goal:</strong> $
                      {profile.campaign.goal.toLocaleString()}
                    </p>
                    <p>
                      <strong>Current Donation:</strong> $
                      {currentDonation.toLocaleString()}
                    </p>
                    <p>
                      <strong>BOOSTERS:</strong>{" "}
                      {profile.campaign.supporters.toLocaleString()}
                    </p>
                    <div className="btns">
                      <button className="btn btn-primary mt-3">
                        Become a Volunteer
                      </button>
                      <button className="btn btn-primary mt-3">
                        Donate Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="containAllcontent">
            <div className="contentHolder">
              <div className="container my-5">
                <div className="row">
                  <div className="col-lg-8 flex-wrap pp">
                    <h2 className="mb-4">Main Page Content</h2>
                    <p className="contentDes">{profile.campaign.description}</p>
                  </div>
                </div>
              </div>

              <div className="container ddd">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="mb-5">
                      <div className="section-title-1 section-title-sm position-relative pb-3 mb-4">
                        <h3 className="mb-0">Comments</h3>
                      </div>
                      {profile.campaign.comments.map((comment, index) => (
                        <div className="d-flex mb-4" key={index}>
                          <img
                            src={comment.photo}
                            className="img-fluid rounded"
                            style={{ width: "45px", height: "45px" }}
                            alt="User"
                          />
                          <div className="ps-3">
                            <h6>
                              <a href="">{comment.name}</a>{" "}
                              <small>
                                <i>{comment.date}</i>
                              </small>
                            </h6>
                            <p>{comment.message}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mb-5">
                      <div className="section-title-1 section-title-sm position-relative pb-3 mb-4">
                        <h3 className="mb-0">Leave a Comment</h3>
                      </div>
                      <form>
                        <div className="row">
                          <div className="col-sm-6 mb-3">
                            <input
                              type="text"
                              className="form-control input"
                              placeholder="Name"
                            />
                          </div>
                          <div className="col-sm-6 mb-3">
                            <input
                              type="email"
                              className="form-control input"
                              placeholder="Email"
                            />
                          </div>
                          <div className="col-12 mb-3">
                            <textarea
                              className="form-control input"
                              rows="5"
                              placeholder="Comment"
                            ></textarea>
                          </div>
                          <div className="col-12">
                            <button type="submit" className="btn btn-primary">
                              Submit
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CampaignDetails;
