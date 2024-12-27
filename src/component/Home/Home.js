import React, { useState } from "react";
import "./Home.css";
import bannerPhoto from "../../accets/bannerPhoto/bannerPhoto.webp";
import { Link } from "react-router-dom";

const Home = () => {
  const [isDownloadBtnVisible, setIsDownloadBtnVisible] = useState(false);

  const showMovieDownloadBtn = () => {
    setIsDownloadBtnVisible(true); // Update state to show the download button
  };

  return (
    <div>
      <h1>Welcome Movie Hive</h1>
      <h2>
        Pushpa 2 (2024) UNCUT 1080p HDRip x264 [Dual Audio][Hindi 2.0+Tamil 2.0]
        -DMV
      </h2>
      <img className="bannerPhoto" src={bannerPhoto} alt="Banner" />
      <br />
      <Link
        to="https://www.profitablecpmrate.com/x5pu1na3s?key=02559a63980594c50058d85da01b12fa"
        // to="www.facebook.com"
        target="_blank"
      >
        <button onClick={showMovieDownloadBtn} id="add_btn" className="add_btn">
          এখানে ক্লিক করে একটি অ্যাড দেখে মুভি টি ডাউনলোড করুণ
        </button>
      </Link>
      <br />
      {/* Conditionally render the Download button */}
      {isDownloadBtnVisible && (
        <Link
          to="https://www.hindimoviestv.com/movies/pushpa-2-the-rule-2024-hindi/"
          target="_blank"
        >
          <button id="DOWNLOAD_btn" className="DOWNLOAD_btn">
            DOWNLOAD MOVIE
          </button>
        </Link>
      )}
    </div>
  );
};

export default Home;
