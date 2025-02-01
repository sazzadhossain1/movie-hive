import React, { useState } from "react";
import "./Banner.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import wolfManBanner from "../../accets/bannerPhoto/wolfManBanner.png";

import skyForceBanner from "../../accets/bannerPhoto/skyForceBanner.jpg";
import dakkuMaharaajBanner from "../../accets/bannerPhoto/dakkuMaharaajBanner.jpg";
import sweetBreamsBanner from "../../accets/bannerPhoto/sweetBreamsBanner.jpg";
import starTrekBanner from "../../accets/bannerPhoto/starTrekBanner.png";
import flightRiskBanner from "../../accets/bannerPhoto/flightRiskBanner.jpg";

const Banner = () => {
  // Photos array with images and associated text
  const photos = [
    {
      src: flightRiskBanner,
      text: "Photo 1 Description",
    },
    {
      src: skyForceBanner,
      text: "Photo 1 Description",
    },
    {
      src: dakkuMaharaajBanner,
      text: "Photo 1 Description",
    },
    {
      src: sweetBreamsBanner,
      text: "Photo 1 Description",
    },
    {
      src: starTrekBanner,
      text: "Photo 1 Description",
    },
  ];

  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  // Handle right arrow click
  const goToNextPhoto = () => {
    setCurrentPhotoIndex((prevIndex) =>
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Handle left arrow click
  const goToPrevPhoto = () => {
    setCurrentPhotoIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };
  return (
    <div>
      <div className="carousel-container">
        {/* Left Arrow Button */}
        <button className="arrow-button left" onClick={goToPrevPhoto}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>

        {/* Carousel Photo */}
        <div className="carousel-photo">
          <img src={photos[currentPhotoIndex].src} alt="carousel" />
          {/* <div className="carousel-text">{photos[currentPhotoIndex].text}</div> */}
        </div>

        {/* Right Arrow Button */}
        <button className="arrow-button right" onClick={goToNextPhoto}>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default Banner;
