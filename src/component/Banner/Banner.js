import React, { useState } from "react";
import "./Banner.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import pushpa2Banner from "../../accets/bannerPhoto/bannerPhotoOne.jpg";

import bannerPhotoFive from "../../accets/bannerPhoto/bannerPhotoFive.jpg";

import doPattiBanner from "../../accets/bannerPhoto/doPattiBanner.jpg";
import mrAndMrsMahi from "../../accets/bannerPhoto/mrAndMrsMahiBanner.jpg";
import vissotBanner from "../../accets/bannerPhoto/visfotBanner.jpeg";
import fateBanner from "../../accets/bannerPhoto/fateBanner.jpg";
import gameChangeBanner from "../../accets/bannerPhoto/gameChangeBanner.jpg";
import matchFixingBanner from "../../accets/bannerPhoto/matchFixingBanner.jpg";
import macroBanner from "../../accets/bannerPhoto/macroBanner.png";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import bolboliyaThree from "../../accets/bannerPhoto/BhoolBhulaiyaThreeBanner.jpg";
import TheCalendarKillerBanner from "../../accets/bannerPhoto/TheCalendarKillerBanner.jpg";
import DenofThieves2Banner from "../../accets/bannerPhoto/DenofThieves2Banner.jpg";
import azzadBanner from "../../accets/bannerPhoto/azzadBanner.png";
const Banner = () => {
  // Photos array with images and associated text
  const photos = [
    {
      src: azzadBanner,
      text: "Photo 1 Description",
    },
    {
      src: DenofThieves2Banner,
      text: "Photo 1 Description",
    },
    {
      src: TheCalendarKillerBanner,
      text: "Photo 1 Description",
    },
    {
      src: bolboliyaThree,
      text: "Photo 1 Description",
    },
    {
      src: macroBanner,
      text: "Photo 1 Description",
    },
    {
      src: matchFixingBanner,
      text: "Photo 1 Description",
    },
    {
      src: gameChangeBanner,
      text: "Photo 1 Description",
    },
    {
      src: fateBanner,
      text: "Photo 1 Description",
    },
    {
      src: vissotBanner,
      text: "Photo 1 Description",
    },

    // {
    //   src: doPattiBanner,
    //   text: "Photo 1 Description",
    // },
    // {
    //   src: bannerPhotoFive,
    //   text: "Photo 2 Description",
    // },
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
