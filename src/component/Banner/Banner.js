import React, { useState } from "react";
import "./Banner.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import bannerPhotoOne from "../../accets/bannerPhoto/bannerPhotoOne.jpg";
import pushpaPhotoTwo from "../../accets/bannerPhoto/bannerPhotoTwo.webp";
import pushpaPhotoTree from "../../accets/bannerPhoto/bannerPhotoThree.jpg";

import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Banner = () => {
  // Photos array with images and associated text
  const photos = [
    {
      src: bannerPhotoOne,
      text: "Photo 1 Description",
    },
    {
      src: pushpaPhotoTwo,
      text: "Photo 2 Description",
    },
    {
      src: pushpaPhotoTree,
      text: "Photo 3 Description",
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
