import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"; // Importing icons
import "../assets/profile.css";
import profileImg from "../img/bruce-mars.jpg";
import projectImg from "../img/businessContact.jpg";

export const Profile = () => {
  const [showMore, setShowMore] = useState(false);
  const [interestText, setInterestText] = useState("interest");

  const handleReadMore = () => {
    setShowMore(!showMore);
  };

  const handleInterestClick = () => {
    setInterestText((prevText) =>
      prevText === "interest" ? "interestedIn" : "interest"
    );
  };

  return (
    <div>
      <div className="profileContainerDiv">
        <div className="profileContainer">
          <div className="profileContent">
            <div>
              <div className="imgBoxHolder">
                <img src={profileImg} className="imgProfile" alt="Profile" />
              </div>
              <div className="contentHolder">
                <div className="NameAndFollowBtn">
                  <h1>Michael Roven</h1>
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
                  <p>
                    Decisions: If you can't decide, the answer is no. If two
                    equally difficult paths, choose the one more painful in the
                    short term (pain avoidance is creating an illusion of
                    equality). Choose the path that leaves you more equanimous.
                  </p>
                  {showMore && (
                    <p>
                      This additional content is only visible when "Read More"
                      is clicked. You can add more details about the person's
                      background, interests, or any other information you'd like
                      to display.
                    </p>
                  )}

                  <button onClick={handleReadMore} className="showmoreBtn">
                    {showMore ? "Read Less" : "Read More"}
                  </button>

                  <div className="skillTags">
                    <span className="skillTag">React</span>
                    <span className="skillTag">JavaScript</span>
                    <span className="skillTag">CSS</span>
                    <span className="skillTag">React</span>
                    <span className="skillTag">JavaScript</span>
                    <span className="skillTag">CSS</span>
                    <span className="skillTag">React</span>
                    <span className="skillTag">JavaScript</span>
                    <span className="skillTag">CSS</span>
                    <span className="skillTag">React</span>
                    <span className="skillTag">JavaScript</span>
                    <span className="skillTag">CSS</span>
                    <span className="skillTag">React</span>
                    <span className="skillTag">JavaScript</span>
                    <span className="skillTag">CSS</span>
                  </div>
                </div>
              </div>
              <div className="IconBox">
                <a
                  href="https://github.com/mohammed-salah12"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="icon" />
                </a>
                <a
                  href="https://linkedin.com/in/username"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="icon" />
                </a>
                <a href="mailto:email@example.com">
                  <FaEnvelope className="icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="latestProjects">
          <h1>Check my latest projects</h1>
          <div className="projectsContainer">
            <div className="projectBox">
              <div className="projectImgBox">
                <img src={projectImg} className="imgProject" alt="Project" />
              </div>
              <div className="projectContent">
                <div className="projectTitle">
                  <h2 className="titleProject">Rover raised $65 million</h2>
                </div>
                <div className="projectDesc">
                  Finding temporary housing for your dog should be as easy as
                  renting an Airbnb. That’s the idea behind Rover ...
                </div>
                <div className="readMoreProjectBtn">
                  <button className="readMoreBtn"> read more </button>
                </div>
              </div>
            </div>
            <div className="projectBox">
              <div className="projectImgBox">
                <img src={projectImg} className="imgProject" alt="Project" />
              </div>
              <div className="projectContent">
                <div className="projectTitle">
                  <h2 className="titleProject">Rover raised $65 million</h2>
                </div>
                <div className="projectDesc">
                  Finding temporary housing for your dog should be as easy as
                  renting an Airbnb. That’s the idea behind Rover ...
                </div>
                <div className="readMoreProjectBtn">
                  <button className="readMoreBtn"> read more </button>
                </div>
              </div>
            </div>
            <div className="projectBox">
              <div className="projectImgBox">
                <img src={projectImg} className="imgProject" alt="Project" />
              </div>
              <div className="projectContent">
                <div className="projectTitle">
                  <h2 className="titleProject">Rover raised $65 million</h2>
                </div>
                <div className="projectDesc">
                  Finding temporary housing for your dog should be as easy as
                  renting an Airbnb. That’s the idea behind Rover ...
                </div>
                <div className="readMoreProjectBtn">
                  <button className="readMoreBtn"> read more </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
