import React from "react";
import "./FirstSection.css";
import yourFaultCart from "../../accets/MovieCartPhoto/yourFaultCart.jpg";
import pushpaCart from "../../accets/MovieCartPhoto/pushpaCart.webp";
import TheGreatestCart from "../../accets/MovieCartPhoto/TheGreatestCart.jpeg";
import MovieCart from "../MovieCart/MovieCart";

const FirstSection = () => {
  const movieSrc = [
    {
      id: 1,
      img: pushpaCart,
      title:
        "Pushpa 2 (2024) UNCUT 1080p HDRip x264 [Dual Audio][Hindi 2.0+Tamil 2.0] -DMV",
    },
    {
      id: 2,
      img: yourFaultCart,
      title:
        "Your Fault (2024) 720p AMZN-WEB x264 MSubs [Dual Audio][Hindi 5.1+English 5.1] -mkvC",
    },
    {
      id: 3,
      img: TheGreatestCart,
      title:
        "Your Fault (2024) 720p AMZN-WEB x264 MSubs [Dual Audio][Hindi 5.1+English 5.1] -mkvC",
    },
  ];
  return (
    <div>
      <div className="firstSection_grid_div">
        {movieSrc.map((movie) => (
          <MovieCart key={movie.id} movie={movie}></MovieCart>
        ))}
      </div>
    </div>
  );
};

export default FirstSection;
