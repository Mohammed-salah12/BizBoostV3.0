import React from "react";
import team1 from "../img/Funder.jpeg";
import team2 from "../img/team-2.jpg";
import team3 from "../img/team-3.jpg";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa"; // Import React Icons

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      imgSrc: team1,
      name: "Mohammed Salah",
      designation:
        "This Platform was developed under extremely challenging conditions, including an ongoing war. Despite facing severe hardships, including a lack of basic necessities such as food, water, electricity, and internet, we persevered to bring this project to life. This project stands as a testament to our resilience and dedication to advancing our skills and contributing to the tech community, even in the face of adversity.",
      twitter: "#",
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
    {
      id: 2,
      imgSrc: team2,
      name: "Full Name",
      designation: "Designation",
      twitter: "#",
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
    {
      id: 3,
      imgSrc: team3,
      name: "Full Name",
      designation: "Designation",
      twitter: "#",
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  ];

  const member = teamMembers[0]; // Pick the first member for the big box

  return (
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container py-5">
        <div
          className="section-title text-center position-relative pb-3 mb-5 mx-auto"
          style={{ maxWidth: "600px" }}
        >
          <h5 className="fw-bold text-primary text-uppercase">Team Member</h5>
          <h1 className="mb-0">
            Professional Staff Ready to Help Your Business
          </h1>
        </div>
        <div className="row g-5">
          <div className="col-lg-12 wow slideInUp" data-wow-delay="0.3s">
            <div className="team-item bg-light rounded overflow-hidden">
              <div className="team-img position-relative overflow-hidden">
                <img
                  className="img-fluid w-100"
                  src={member.imgSrc}
                  alt={`Team Member ${member.id}`}
                  style={{ maxHeight: "550px", objectFit: "cover" }} // Adjust the max-height
                />
                <div className="team-social">
                  <a
                    className="btn btn-lg btn-primary btn-lg-square rounded"
                    href={member.twitter}
                  >
                    <FaTwitter className="fw-normal" />
                  </a>
                  <a
                    className="btn btn-lg btn-primary btn-lg-square rounded"
                    href={member.facebook}
                  >
                    <FaFacebookF className="fw-normal" />
                  </a>
                  <a
                    className="btn btn-lg btn-primary btn-lg-square rounded"
                    href={member.instagram}
                  >
                    <FaInstagram className="fw-normal" />
                  </a>
                  <a
                    className="btn btn-lg btn-primary btn-lg-square rounded"
                    href={member.linkedin}
                  >
                    <FaLinkedinIn className="fw-normal" />
                  </a>
                </div>
              </div>
              <div className="text-center py-3">
                {" "}
                {/* Adjust the padding */}
                <h4 className="text-primary">{member.name}</h4>
                <p className="text-uppercase m-0">{member.designation}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
