import React from "react";
import { useNavigate } from "react-router-dom";
import { FaBullhorn } from "react-icons/fa";
import profilesData from "../constants/profilesData"; // Adjust the import path as needed

const Campaign = () => {
  const navigate = useNavigate();

  const handleProfileClick = (username) => {
    navigate(`/profile/${username}`);
  };

  const handleCampaignClick = (username) => {
    navigate(`/campaignDetails/${username}`);
  };

  // Helper function to chunk the profiles into groups of 4
  const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  const profileChunks = chunkArray(profilesData, 4);

  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div
          className="section-title text-center position-relative pb-3 mb-5 mx-auto"
          style={{ maxWidth: "600px" }}
        >
          <h5 className="fw-bold text-primary text-uppercase">
            Latest Startups
          </h5>
          <h1 className="mb-0">Check Startups Needs, Give Them A Boost</h1>
        </div>

        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          style={{ position: "relative", margin: "0 auto" }}
        >
          <div className="carousel-indicators">
            {profileChunks.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-current={index === 0 ? "true" : "false"}
                aria-label={`Slide ${index + 1}`}
                style={{ backgroundColor: "#e0f7fa" }} // Light blue color
              ></button>
            ))}
          </div>
          <div className="carousel-inner">
            {profileChunks.map((chunk, chunkIndex) => (
              <div
                key={chunkIndex}
                className={`carousel-item ${chunkIndex === 0 ? "active" : ""}`}
              >
                <div className="row g-4">
                  {chunk.map((profile, profileIndex) => (
                    <div key={profileIndex} className="col-md-3">
                      <div className="card position-relative">
                        <img
                          src={profile.projects[0].img}
                          className="card-img-top"
                          alt={profile.projects[0].title}
                          onError={(e) => {
                            e.target.onerror = null; // Prevent infinite loop
                            e.target.src = "https://via.placeholder.com/150"; // Fallback image
                          }}
                        />
                        <button
                          className="btn btn-light position-absolute top-50 start-0 translate-middle-y  showProfileBtn"
                          style={{
                            left: "10px",
                            backgroundColor: "#e0f7fa", // Light blue color
                            borderColor: "#b2ebf2", // Slightly darker light blue
                          }}
                          onClick={() => handleProfileClick(profile.username)}
                        >
                          Show Profile
                        </button>
                        <div className="card-body text-center">
                          <h5 className="card-title">{profile.name}</h5>
                          <p className="card-text">
                            {profile.projects[0].title}
                          </p>
                          <button
                            className="btn btn-primary m-1"
                            onClick={() =>
                              handleCampaignClick(profile.username)
                            }
                          >
                            <FaBullhorn /> Campaign
                          </button>
                          <button className="btn btn-secondary m-1">
                            Be Volunteer
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev prevBtn"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
            style={{ color: "#e0f7fa" }} // Light blue color for arrows
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
              style={{
                filter:
                  "invert(40%) sepia(30%) saturate(2500%) hue-rotate(160deg) brightness(95%) contrast(85%)",
              }} // Light blue filter
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next nextBtn "
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
            style={{ color: "#e0f7fa" }} // Light blue color for arrows
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
              style={{
                filter:
                  "invert(40%) sepia(30%) saturate(2500%) hue-rotate(160deg) brightness(95%) contrast(85%)",
              }} // Light blue filter
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Campaign;
