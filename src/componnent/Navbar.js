import React from "react";
import { Link, useLocation } from "react-router-dom";
import Modal from "./Modal";
import { useAuth } from "../context/AuthContext"; // Import the useAuth hook
import "../assets/hero.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Navbar = () => {
  const location = useLocation();
  const { isAuthenticated, username } = useAuth(); // Get authentication status and username

  // Check if the current path exactly matches the given path
  const isActive = (path) => location.pathname === path;

  // Determine if the current path is a profile page
  const isProfilePage = () => {
    const profilePathRegex = /^\/profile\/.+$/;
    return profilePathRegex.test(location.pathname);
  };

  const navbarClass = `navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0 ${
    isActive("/userProfile") ? "user-profile-navbar" : ""
  } ${isActive("/SignInOut") ? "signin-navbar" : ""}`;

  return (
    <>
      <nav className={navbarClass}>
        <Link
          to="/"
          className={`navbar-brand p-0 ${isActive("/") ? "active" : ""} ${
            isProfilePage() ? "black-link" : ""
          }`}
        >
          <h1>
            <i className={`fa fa-user-tie me-2`}></i>
            BizBoost
          </h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="fa fa-bars"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ms-auto py-0">
            <li className="nav-item">
              <Link
                to="/"
                className={`nav-link ${isActive("/") ? "active" : ""} ${
                  isProfilePage() ? "black-link" : ""
                }`}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about-pg"
                className={`nav-link ${isActive("/about-pg") ? "active" : ""} ${
                  isProfilePage() ? "black-link" : ""
                }`}
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/campaign-pg"
                className={`nav-link ${
                  isActive("/campaign-pg") ? "active" : ""
                } ${isProfilePage() ? "black-link" : ""}`}
              >
                Campaigns
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/volunteers"
                className={`nav-link ${
                  isActive("/volunteers") ? "active" : ""
                } ${isProfilePage() ? "black-link" : ""}`}
              >
                Volunteers
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/businesses"
                className={`nav-link ${
                  isActive("/businesses") ? "active" : ""
                } ${isProfilePage() ? "black-link" : ""}`}
              >
                Businesses
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className={`nav-link ${isActive("/contact") ? "active" : ""} ${
                  isProfilePage() ? "black-link" : ""
                }`}
              >
                Contact
              </Link>
            </li>
            {isAuthenticated && username && (
              <li className="nav-item">
                <Link
                  to={`/profile/${username}`}
                  className={`nav-link ${
                    isActive(`/profile/${username}`) ? "active" : ""
                  } ${isProfilePage() ? "black-link" : ""}`}
                >
                  Profile
                </Link>
              </li>
            )}
            <li className="nav-item">
              <Link
                to="/SignInOut"
                className={`nav-link ${
                  isActive("/SignInOut") ? "active" : ""
                } ${isProfilePage() ? "black-link" : ""}`}
              >
                Sign In
              </Link>
            </li>
          </ul>
          <button
            type="button"
            className="btn text-primary ms-3"
            data-bs-toggle="modal"
            data-bs-target="#searchModal"
          >
            <i className="fa fa-search"></i>
          </button>
        </div>
      </nav>

      <Modal id="searchModal" title="Search">
        <div className="modal-body d-flex align-items-center justify-content-center">
          <div className="input-group" style={{ maxWidth: "600px" }}>
            <input
              type="text"
              className="form-control bg-transparent border-primary p-3"
              placeholder="Type search keyword"
            />
            <button className="btn btn-primary px-4">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Navbar;
