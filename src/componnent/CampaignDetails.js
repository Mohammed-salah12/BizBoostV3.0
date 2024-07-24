import React, { useEffect, useState } from "react";
import "../assets/campaignDetails.css";
import BusinessContact from "../img/businessContact.jpg";
import CompanyLogo from "../img/Funder.jpeg";

const CampaignDetails = () => {
  const [loading, setLoading] = useState(true);
  const [currentDonation, setCurrentDonation] = useState(5000);
  const goal = 10000;
  const supporters = 150;

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

  const progressPercentage = (currentDonation / goal) * 100;

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

      {!loading && (
        <>
          <div className="containSidBarAndHeader">
            <div className="needsJustifiling">
              <div className="container-fluid position-relative p-0 bg-header holder divHolder">
                <div
                  className="container-fluid py-5 bg-header"
                  style={{
                    backgroundImage: `url(${BusinessContact})`,
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
                        Campaign Name
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
                  <h2 className="mb-4">Campaign Title</h2>
                  <div className="company-info mb-4">
                    <div className="company-header">
                      <img
                        src={CompanyLogo}
                        alt="Company Logo"
                        className="company-logo"
                      />
                      <h4 className="company-name">Company Name</h4>
                    </div>
                  </div>
                  <p>
                    Voluptua est takimata stet invidunt sed rebum nonumy stet,
                    clita aliquyam dolores vero stet consetetur elitr takimata
                    rebum sanctus. Sit sed accusam stet sit nonumy kasd diam
                    dolores, sanctus lorem kasd duo dolor dolor vero sit et.
                  </p>
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
                        {progressPercentage.toFixed(2)}%
                      </div>
                    </div>
                    <p>
                      <strong>Goal:</strong> ${goal.toLocaleString()}
                    </p>
                    <p>
                      <strong>Current Donation:</strong> $
                      {currentDonation.toLocaleString()}
                    </p>
                    <p>
                      <strong>BOOSTERS:</strong> {supporters.toLocaleString()}
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
                    <p className="contentDes">
                      Voluptua est takimataaw uoaouw houdhawou aoh awhwdahodh
                      ouwuo aouh douahwod awohuo hawudh auoh wauo stet invidunt
                      sed rebum nonumy stet, clita aliquyam dolores vero
                      stejjjadiwhdipadhipaw pihi haipip iphi pawipip ipah
                      ihahdip wipadhip whia ipdhwip dhaipwdpiw apiawiph
                      dipawhipd hawiphdip wht consetetur elitr takimata rebum
                      sanctus. Sit sed accusam stet sit nonumy kasd diam
                      dolores, sanctus lorem kasd duo dolor dolor vero sit et.
                    </p>
                  </div>
                </div>
              </div>

              <div className="container ddd">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="mb-5">
                      <div className="section-title-1 section-title-sm position-relative pb-3 mb-4">
                        <h3 className="mb-0">3 Comments</h3>
                      </div>
                      <div className="d-flex mb-4">
                        <img
                          src={CompanyLogo}
                          className="img-fluid rounded"
                          style={{ width: "45px", height: "45px" }}
                          alt="User"
                        />
                        <div className="ps-3">
                          <h6>
                            <a href="">John Doe</a>{" "}
                            <small>
                              <i>01 Jan 2045</i>
                            </small>
                          </h6>
                          <p>
                            Sadipscing labore amet rebum est et justo gubergren.
                            Et eirmod ipsum sit diam ut magna lorem. Nonumy vero
                            labore lorem sanctus rebum et lorem magna kasd, stet
                            amet magna accusam consetetur eirmod.
                          </p>
                        </div>
                      </div>
                      <div className="d-flex mb-4">
                        <img
                          src={CompanyLogo}
                          className="img-fluid rounded"
                          style={{ width: "45px", height: "45px" }}
                          alt="User"
                        />
                        <div className="ps-3">
                          <h6>
                            <a href="">Jane Doe</a>{" "}
                            <small>
                              <i>02 Jan 2045</i>
                            </small>
                          </h6>
                          <p>
                            Sadipscing labore amet rebum est et justo gubergren.
                            Et eirmod ipsum sit diam ut magna lorem. Nonumy vero
                            labore lorem sanctus rebum et lorem magna kasd, stet
                            amet magna accusam consetetur eirmod.
                          </p>
                        </div>
                      </div>
                      <div className="d-flex mb-4">
                        <img
                          src={CompanyLogo}
                          className="img-fluid rounded"
                          style={{ width: "45px", height: "45px" }}
                          alt="User"
                        />
                        <div className="ps-3">
                          <h6>
                            <a href="">Alice Smith</a>{" "}
                            <small>
                              <i>03 Jan 2045</i>
                            </small>
                          </h6>
                          <p>
                            Sadipscing labore amet rebum est et justo gubergren.
                            Et eirmod ipsum sit diam ut magna lorem. Nonumy vero
                            labore lorem sanctus rebum et lorem magna kasd, stet
                            amet magna accusam consetetur eirmod.
                          </p>
                        </div>
                      </div>
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
