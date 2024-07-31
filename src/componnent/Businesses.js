import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import "../assets/Businesses.css";
import profilesData from "../constants/profilesData";

const Businesses = () => {
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
    "Tech Company",
    "Marketing Company",
    "Finance Company",
    "Healthcare Company",
    "Retail Company",
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

  const filteredBusinessProfiles = profilesData.filter(
    (profile) =>
      profile.role === "Business" &&
      (selectedCategories.length === 0 ||
        selectedCategories.includes(profile.category)) &&
      (profile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        profile.about.toLowerCase().includes(searchTerm.toLowerCase()))
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
        {filteredBusinessProfiles.length > 0 ? (
          filteredBusinessProfiles.map((business, index) => (
            <div className="BusinessCard" key={index}>
              <div className="upperProfileHolder">
                <div className="companyNameImg">
                  <img
                    src={business.profileImg}
                    alt={business.name}
                    className="BusinessImg"
                  />
                  <div className="companyDetails">
                    <h2 className="companyName">{business.name}</h2>
                    <h4 className="founderName">
                      {business.role === "Business" ? "Founder: " : "Role: "}
                      {business.name}
                    </h4>
                    <p className="category">{business.category}</p>
                  </div>
                </div>
                <button
                  className="viewProfileBtn"
                  onClick={() => handleViewProfile(business.username)}
                >
                  View Profile
                </button>
              </div>

              <div className="BusinessDesc">
                <p>{business.about}</p>
              </div>
            </div>
          ))
        ) : (
          <div>No businesses found</div>
        )}
      </div>
    </div>
  );
};

export default Businesses;
