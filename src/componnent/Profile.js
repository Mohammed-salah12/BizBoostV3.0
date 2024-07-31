import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "../assets/profile.css";
import profilesData from "../constants/profilesData.js";
import { useParams } from "react-router-dom";

export const Profile = () => {
  const { username } = useParams(); // Get username from URL params
  const [showMore, setShowMore] = useState(false);
  const [interestText, setInterestText] = useState("interest");
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const foundProfile = profilesData.find(
        (profile) => profile.username === username
      );
      setProfile(foundProfile);
      setLoading(false);
    }, 300); // Simulate a delay for loading
    return () => clearTimeout(timer);
  }, [username]);

  const handleReadMore = () => {
    setShowMore(!showMore);
  };

  const handleInterestClick = () => {
    setInterestText((prevText) =>
      prevText === "interest" ? "interestedIn" : "interest"
    );
  };

  if (loading) {
    return (
      <div
        id="spinner"
        className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
      >
        <div className="spinner"></div>
      </div>
    );
  }

  if (!profile) {
    return <div>Profile not found</div>;
  }

  return (
    <div className="profileContainerDiv">
      <div className="profileContainer">
        <div className="profileContent">
          <div>
            <div className="imgBoxHolder">
              <img
                src={profile.profileImg || "default-profile-img.png"}
                className="imgProfile"
                alt="Profile"
              />
            </div>
            <div className="contentHolder">
              <div className="NameAndFollowBtn">
                <h1>{profile.name || "Name Not Available"}</h1>
                <button onClick={handleInterestClick} className="interestBtn">
                  {interestText}
                </button>
              </div>
              <div className="interestedInOn">
                <div className="interested">
                  <p className="pProfile">interest</p>
                  <h2 className="numOfInterest">323</h2>
                </div>
                <div className="interestedIn">
                  <p className="pProfile">interestedIn</p>
                  <h2 className="numOfInterestIn">323</h2>
                </div>
              </div>
              <div className="aboutMe">
                <p>{profile.about || "About information not available"}</p>
                {showMore && (
                  <p>
                    This additional content is only visible when "Read More" is
                    clicked. You can add more details about the person's
                    background, interests, or any other information you'd like
                    to display.
                  </p>
                )}
                <button onClick={handleReadMore} className="showmoreBtn">
                  {showMore ? "Read Less" : "Read More"}
                </button>
                <div className="skillTags">
                  {(profile.skills || []).map((skill, index) => (
                    <span key={index} className="skillTag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="IconBox">
              {profile.socialLinks && (
                <>
                  <a
                    href={profile.socialLinks.github || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="icon" />
                  </a>
                  <a
                    href={profile.socialLinks.linkedin || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="icon" />
                  </a>
                  <a
                    href={`mailto:${
                      profile.socialLinks.email || "default@example.com"
                    }`}
                  >
                    <FaEnvelope className="icon" />
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="latestProjects">
        <h1>Check my latest projects</h1>
        <div className="projectsContainer">
          {(profile.projects || []).map((project, index) => (
            <div key={index} className="projectBox">
              <div className="projectImgBox">
                <img
                  src={project.img || "default-project-img.png"}
                  className="imgProject"
                  alt="Project"
                />
              </div>
              <div className="projectContent">
                <div className="projectTitle">
                  <h2 className="titleProject">
                    {project.title || "Project Title"}
                  </h2>
                </div>
                <div className="projectDesc">
                  {project.description || "Project Description"}
                </div>
                <div className="readMoreProjectBtn">
                  <button className="readMoreBtn">Read More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
