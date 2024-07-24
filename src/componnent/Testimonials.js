import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import TestimonialImg1 from "../img/testimonial-1.jpg";
import TestimonialImg2 from "../img/testimonial-2.jpg";
import TestimonialImg3 from "../img/testimonial-3.jpg";
import TestimonialImg4 from "../img/testimonial-4.jpg";

const Testimonials = () => {
  // Slider settings
  const settings = {
    autoplay: true,
    speed: 1500,
    dots: true,
    infinite: true,
    centerMode: false,
    slidesToShow: 3, // Show 3 items per slide
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2, // Show 2 items per slide on medium screens
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1, // Show 1 item per slide on small screens
        },
      },
    ],
  };

  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div
          className="section-title text-center position-relative pb-3 mb-4 mx-auto"
          style={{ maxWidth: "600px" }}
        >
          <h5 className="fw-bold text-primary text-uppercase">Testimonial</h5>
          <h1 className="mb-0">
            What Our Clients Say About Our Digital Services
          </h1>
        </div>
        <Slider {...settings}>
          <div className="testimonial-item bg-light">
            <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
              <img
                className="img-fluid rounded"
                src={TestimonialImg1}
                alt="Testimonial 1"
                style={{ width: "60px", height: "60px" }}
              />
              <div className="ps-4">
                <h4 className="text-primary mb-1">Company Name</h4>
                <small className="text-uppercase">Profession</small>
              </div>
            </div>
            <div className="pt-4 pb-5 px-5">
              Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor
              stet amet eirmod eos labore diam
            </div>
          </div>
          <div className="testimonial-item bg-light">
            <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
              <img
                className="img-fluid rounded"
                src={TestimonialImg2}
                alt="Testimonial 2"
                style={{ width: "60px", height: "60px" }}
              />
              <div className="ps-4">
                <h4 className="text-primary mb-1">Investor Name</h4>
                <small className="text-uppercase">Profession</small>
              </div>
            </div>
            <div className="pt-4 pb-5 px-5">
              Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor
              stet amet eirmod eos labore diam
            </div>
          </div>
          <div className="testimonial-item bg-light">
            <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
              <img
                className="img-fluid rounded"
                src={TestimonialImg3}
                alt="Testimonial 3"
                style={{ width: "60px", height: "60px" }}
              />
              <div className="ps-4">
                <h4 className="text-primary mb-1">Volunteer Name</h4>
                <small className="text-uppercase">Profession</small>
              </div>
            </div>
            <div className="pt-4 pb-5 px-5">
              Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor
              stet amet eirmod eos labore diam
            </div>
          </div>
          <div className="testimonial-item bg-light">
            <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
              <img
                className="img-fluid rounded"
                src={TestimonialImg4}
                alt="Testimonial 4"
                style={{ width: "60px", height: "60px" }}
              />
              <div className="ps-4">
                <h4 className="text-primary mb-1">Client Name</h4>
                <small className="text-uppercase">Profession</small>
              </div>
            </div>
            <div className="pt-4 pb-5 px-5">
              Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor
              stet amet eirmod eos labore diam
            </div>
          </div>
          {/* Add more testimonial items as needed */}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
