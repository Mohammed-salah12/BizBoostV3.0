import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import "../assets/Volunteers.css";
import profilesData from "../constants/profilesData.js";

const Volunteers = () => {
  const [loading, setLoading] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

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

  const categories = [
    "Web Developer",
    "DevOps Engineer",
    "Data Scientist",
    "UI/UX Designer",
    "Backend Developer",
    // Add more categories as needed
  ];

  const handleViewProfile = (username) => {
    navigate(`/profile/${username}`);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((cat) => cat !== category)
        : [...prevCategories, category]
    );
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredVolunteerProfiles = profilesData.filter(
    (profile) =>
      profile.role === "Volunteer" &&
      (selectedCategories.length === 0 ||
        selectedCategories.includes(profile.category)) &&
      (profile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        profile.about.toLowerCase().includes(searchTerm.toLowerCase()) ||
        profile.skills.some((skill) =>
          skill.toLowerCase().includes(searchTerm.toLowerCase())
        ))
  );

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
      <Sidebar
        categories={categories}
        onCategoryChange={handleCategoryChange}
        selectedCategories={selectedCategories}
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
      />
      <div className="BusinessHolder">
        {filteredVolunteerProfiles.length > 0 ? (
          filteredVolunteerProfiles.map((profile, index) => (
            <div className="BusinessCard" key={index}>
              <div className="upperProfileHolder">
                <div className="companyNameImg">
                  <img
                    src={profile.profileImg}
                    alt={profile.name}
                    className="BusinessImg"
                  />
                  <div className="companyDetails">
                    <h2 className="companyName">{profile.name}</h2>
                    <div className="BusinessSocialLinks">
                      <a
                        href={profile.socialLinks?.github || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </a>
                      <a
                        href={profile.socialLinks?.linkedin || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        LinkedIn
                      </a>
                      <a href={`mailto:${profile.socialLinks?.email || ""}`}>
                        Email
                      </a>
                    </div>
                  </div>
                </div>
                <button
                  className="viewProfileBtn"
                  onClick={() => handleViewProfile(profile.username)}
                >
                  View Profile
                </button>
              </div>

              <div className="BusinessDesc">
                <p>{profile.about}</p>
              </div>
            </div>
          ))
        ) : (
          <div>No volunteers found</div>
        )}
      </div>
    </div>
  );
};

export default Volunteers;
