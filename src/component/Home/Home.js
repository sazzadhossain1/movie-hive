import React, { useState } from "react";
import "./Home.css";
import bannerPhoto from "../../accets/bannerPhoto/bannerPhoto.webp";
import { Link } from "react-router-dom";
import Banner from "../Banner/Banner";
import FirstSection from "../FirstSection/FirstSection";

const Home = () => {
  const [isDownloadBtnVisible, setIsDownloadBtnVisible] = useState(false);

  const showMovieDownloadBtn = () => {
    setIsDownloadBtnVisible(true);
  };

  return (
    <div className="home_parent_div">
      {/* <Banner></Banner>
      <FirstSection></FirstSection> */}
      {/* <h1>Welcome Movie Hive</h1>
      <h2>
        Pushpa 2 (2024) UNCUT 1080p HDRip x264 [Dual Audio][Hindi 2.0+Tamil 2.0]
        -DMV
      </h2>
      <img className="bannerPhoto" src={bannerPhoto} alt="Banner" />
      <br />
      <Link
        to="https://www.profitablecpmrate.com/x5pu1na3s?key=02559a63980594c50058d85da01b12fa"
        
        target="_blank"
      >
        <button onClick={showMovieDownloadBtn} id="add_btn" className="add_btn">
          এখানে ক্লিক করে একটি অ্যাড দেখে মুভি টি ডাউনলোড করুণ
        </button>
      </Link>
      <br />
      
      {isDownloadBtnVisible && (
        <Link
          to="https://drive.google.com/file/d/1LuYRHJZTyWMG7gql5ICRqsvodqTsBiGl/view?usp=sharing"
          target="_blank"
        >
          <button id="DOWNLOAD_btn" className="DOWNLOAD_btn">
            DOWNLOAD MOVIE
          </button>
        </Link>
      )} */}
    </div>
  );
};

export default Home;
