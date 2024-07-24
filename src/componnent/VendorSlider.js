import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Vendor images
import VendorImg1 from "../img/vendor-1.jpg";
import VendorImg2 from "../img/vendor-2.jpg";
import VendorImg3 from "../img/vendor-3.jpg";
import VendorImg4 from "../img/vendor-4.jpg";
import VendorImg5 from "../img/vendor-5.jpg";
import VendorImg6 from "../img/vendor-6.jpg";
import VendorImg7 from "../img/vendor-7.jpg";
import VendorImg8 from "../img/vendor-8.jpg";
import VendorImg9 from "../img/vendor-9.jpg";

const VendorSlider = () => {
  const settings = {
    autoplay: true,
    speed: 1500,
    dots: true,
    infinite: true,
    slidesToShow: 6, // Show 6 items per slide
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5, // Show 5 items per slide on large screens
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4, // Show 4 items per slide on medium screens
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3, // Show 3 items per slide on small screens
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2, // Show 2 items per slide on extra small screens
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1, // Show 1 item per slide on very small screens
        },
      },
    ],
  };

  return (
    <div className="container-fluid py-5">
      <div className="container py-5 mb-5">
        <div className="bg-white">
          <Slider {...settings}>
            <div className="vendor-item">
              <img src={VendorImg1} alt="Vendor 1" />
            </div>
            <div className="vendor-item">
              <img src={VendorImg2} alt="Vendor 2" />
            </div>
            <div className="vendor-item">
              <img src={VendorImg3} alt="Vendor 3" />
            </div>
            <div className="vendor-item">
              <img src={VendorImg4} alt="Vendor 4" />
            </div>
            <div className="vendor-item">
              <img src={VendorImg5} alt="Vendor 5" />
            </div>
            <div className="vendor-item">
              <img src={VendorImg6} alt="Vendor 6" />
            </div>
            <div className="vendor-item">
              <img src={VendorImg7} alt="Vendor 7" />
            </div>
            <div className="vendor-item">
              <img src={VendorImg8} alt="Vendor 8" />
            </div>
            <div className="vendor-item">
              <img src={VendorImg9} alt="Vendor 9" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default VendorSlider;
