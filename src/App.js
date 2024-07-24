import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./index.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "animate.css";
import "./assets/hero.css";
import Hero from "./componnent/Hero";
import Facts from "./componnent/Facts";
import About from "./componnent/About";
import Features from "./componnent/Features";
import Campaign from "./componnent/Campaign";
import Testimonial from "./componnent/Testimonials";
import VendorSlider from "./componnent/VendorSlider";
import Footer from "./componnent/Footer";
import Contact from "./componnent/Contact";
import Navbar from "./componnent/Navbar";
import CampaignPg from "./componnent/CampaignPg";
import AboutPg from "./componnent/AboutPg";
import CampaignDetails from "./componnent/CampaignDetails";
import Team from "./componnent/Team";
import SignInOut from "./componnent/SignInOut";

function App() {
  return (
    <Router basename="/BizBoostV2.0">
      {" "}
      {/* Update basename to match your repository name */}
      <Navbar />
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Facts />
                <About />
                <Features />
                <Campaign />
                <Testimonial />
                <Team />
              </>
            }
          />
          <Route path="/CampaignDetails" element={<CampaignDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/campaign-pg" element={<CampaignPg />} />
          <Route path="/about-pg" element={<AboutPg />} />
          <Route path="/SignInOut" element={<SignInOut />} />
          <Route path="*" element={<Navigate to="/" />} />{" "}
          {/* Redirect unknown routes */}
        </Routes>
        <VendorSlider />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
