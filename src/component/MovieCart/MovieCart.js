import React, { useState } from "react";
import "./MovieCart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const MovieCart = ({ movie }) => {
  // console.log(movie);

  const [isDownloadBtnVisible, setIsDownloadBtnVisible] = useState(false);

  const showMovieDownloadBtn = () => {
    setIsDownloadBtnVisible(true); // Update state to show the download button
  };
  return (
    <div className="movieCart_parent_div">
      <p className="movie_title">{movie.title}</p>
      <div
        className="movieCart_child_div"
        style={{ backgroundImage: `url(${movie.img})` }}
      >
        <div className="overlay"></div>
        <Link to={movie.adsterraLink} target="_blank">
          <div onClick={showMovieDownloadBtn} className="movie_cart_play_div">
            <FontAwesomeIcon className="faPlay " icon={faPlay} />
          </div>
        </Link>
      </div>
      {isDownloadBtnVisible && (
        <Link to={movie.videoLink} target="_blank">
          <button className="movieCart_btn">Download Movie</button>
        </Link>
      )}
    </div>
  );
};

export default MovieCart;
