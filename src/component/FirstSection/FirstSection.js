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
      title: "Pushpa 2 (2024) UNCUT 1080p ",
      videoLink:
        "https://drive.google.com/file/d/1LuYRHJZTyWMG7gql5ICRqsvodqTsBiGl/view?usp=sharing",

      adsterraLink:
        "https://www.profitablecpmrate.com/x5pu1na3s?key=02559a63980594c50058d85da01b12fa",
    },
    {
      id: 2,
      img: yourFaultCart,
      title: "Your Fault (2024) 720p ",
      videoLink:
        "https://drive.google.com/file/d/19BNvlXw0heokLe2e2_a5HakN-pYn64Ay/view?usp=sharing",
      adsterraLink:
        "https://www.profitablecpmrate.com/x5pu1na3s?key=02559a63980594c50058d85da01b12fa",
    },
    {
      id: 3,
      img: TheGreatestCart,
      title: "The Greatest of All Time (2024) 720p ",
      videoLink:
        "https://drive.google.com/file/d/1_mYeyezLr1B5Yc8K51Z9_sAMrh8Qt6Lq/view?usp=sharing",
      adsterraLink:
        "https://www.profitablecpmrate.com/x5pu1na3s?key=02559a63980594c50058d85da01b12fa",
      // adsterraLink: "https://www.facebook.com/boostyourself543545",
    },
  ];
  return (
    <div className="first_Section_parent_div">
      <h1>All Catagoris</h1>
      <h3>
        মুভি দেখার জন্য প্লে বাটন এ ক্লিক করতে হবে তারপরে একটি অ্যাড দেখাবে
        অ্যাড টি দেখে এই পেজ এ আবার ফিরে আসতে হবে, ফিরে আশার পরে মুভি পোস্টারের
        নিচে একতা ডাউনলোড বাটন পাবেন ওই বাটন এ ক্লিক করলেই মুভি টি দেখতে পাবে
        এবং চাইলে মুভিটি ডাউনলোড করতে ও পারবেন। প্রতিটা মুভি দেখার জন্য একবার
        মাত্র অ্যাড দেখতে হবে।
      </h3>

      <div className="firstSection_grid_div">
        {movieSrc.map((movie) => (
          <MovieCart key={movie.id} movie={movie}></MovieCart>
        ))}
      </div>
    </div>
  );
};

export default FirstSection;
