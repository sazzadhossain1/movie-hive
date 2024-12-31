import React from "react";
import "./MovieCart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const MovieCart = ({ movie }) => {
  console.log(movie);
  return (
    <div className="movieCart_parent_div">
      <img className="movie_img" src={movie.img} alt="" />
      <p>{movie.title}</p>
      <FontAwesomeIcon icon={faPlay} />
    </div>
  );
};

export default MovieCart;
