import React from "react";
import "./FirstSection.css";
import yourFaultCart from "../../accets/MovieCartPhoto/yourFaultCart.jpg";
import pushpaCart from "../../accets/MovieCartPhoto/pushpaCart.webp";
import TheGreatestCart from "../../accets/MovieCartPhoto/TheGreatestCart.jpeg";
import Devara from "../../accets/MovieCartPhoto/Devara.jpg";
import BabyJohnCart from "../../accets/MovieCartPhoto/BabyJohnCart.jpg";
import MovieCart from "../MovieCart/MovieCart";
import BandaaSinghCart from "../../accets/MovieCartPhoto/BandaaSinghCart.jpg";
import VisfotCart from "../../accets/MovieCartPhoto/VisfotCart.jpg";
import doPattiCart from "../../accets/MovieCartPhoto/doPattiCart.jpg";
import mrAndMrsMahiCart from "../../accets/MovieCartPhoto/mrAndMrsMahiCart.jpg";
import fateCart from "../../accets/MovieCartPhoto/fateCart.jpg";
import gameChangeCart from "../../accets/MovieCartPhoto/gameChangeCart.jpg";
import matchFixingCart from "../../accets/MovieCartPhoto/matchFixingCart.jpg";
import macroCart from "../../accets/MovieCartPhoto/macroCart.jpg";
import boolBolliyaThree from "../../accets/MovieCartPhoto/boolboliyaThreeCart.jpg";

import TheCalendarKillerCart from "../../accets/MovieCartPhoto/TheCalendarKillerCart.jpg";
import DenofThieves2Cart from "../../accets/MovieCartPhoto/DenofThieves2Cart.jpg";
import azzadCart from "../../accets/MovieCartPhoto/azzadCart.jpg";
const FirstSection = () => {
  const movieSrc = [
    {
      id: 17,
      img: azzadCart,
      title: "Azaad (2025) Hindi 1080p",
      videoLink:
        "https://drive.google.com/file/d/1hORYIlWt1r53w7yR2kj-gDBcwfUJZadi/view?usp=sharing",
      adsterraLink:
        "https://www.profitablecpmrate.com/x5pu1na3s?key=02559a63980594c50058d85da01b12fa",
    },
    {
      id: 16,
      img: DenofThieves2Cart,
      title: "Den.of.Thieves.2.Pantera.2025.720p",
      videoLink:
        "https://drive.google.com/file/d/1XF9_P6JZBlyIvNFUZrAHacywe7HWQIrL/view?usp=sharing",
      adsterraLink:
        "https://www.profitablecpmrate.com/x5pu1na3s?key=02559a63980594c50058d85da01b12fa",
    },
    {
      id: 15,
      img: TheCalendarKillerCart,
      title: "The Calendar Killer (2025) 720p",
      videoLink:
        "https://drive.google.com/file/d/1YAFXD3W_74leK0XMGirgdPn3V6mFtpET/view?usp=sharing",
      adsterraLink:
        "https://www.profitablecpmrate.com/x5pu1na3s?key=02559a63980594c50058d85da01b12fa",
    },
    {
      id: 14,
      img: matchFixingCart,
      title: "Match Fixing (2025) Hindi 720p ",
      videoLink:
        "https://drive.google.com/file/d/1HdW_rTPSc5GkIqHQOcm1POwsk6ZQTWwB/view?usp=sharing",
      adsterraLink:
        "https://www.profitablecpmrate.com/x5pu1na3s?key=02559a63980594c50058d85da01b12fa",
    },

    {
      id: 13,
      img: gameChangeCart,
      title: "Game Changer (2025) Hindi Dubbed 1080p ",
      videoLink:
        "https://drive.google.com/file/d/1ESXVwPFGcbZhOIyVUfKHJQfqD52Cii74/view?usp=sharing",
      adsterraLink:
        "https://www.profitablecpmrate.com/x5pu1na3s?key=02559a63980594c50058d85da01b12fa",
    },
    {
      id: 12,
      img: fateCart,
      title: "Fateh (2025) Hindi 1080p",
      videoLink:
        "https://drive.google.com/file/d/1dXad0wq_6CUxazA2jRR_a-r1TiNYt22q/view?usp=sharing",
      adsterraLink:
        "https://www.profitablecpmrate.com/x5pu1na3s?key=02559a63980594c50058d85da01b12fa",
    },
    {
      id: 11,
      img: boolBolliyaThree,
      title: "Bhool Bhulaiyaa 3 (2024) Hindi 1080p",
      videoLink:
        "https://drive.google.com/file/d/1a8uoMBYWn3VKNflHGwCs1b52fcg5YPsr/view?usp=sharing",
      adsterraLink:
        "https://www.profitablecpmrate.com/x5pu1na3s?key=02559a63980594c50058d85da01b12fa",
    },
    {
      id: 10,
      img: macroCart,
      title: "Marco (2024) Hindi Dubbed 1080p ",
      videoLink:
        "https://drive.google.com/file/d/1HdW_rTPSc5GkIqHQOcm1POwsk6ZQTWwB/view?usp=sharing",
      adsterraLink:
        "https://www.profitablecpmrate.com/x5pu1na3s?key=02559a63980594c50058d85da01b12fa",
    },
    {
      id: 9,
      img: VisfotCart,
      title: "Visfot (2024) Hindi 1080p",
      videoLink:
        "https://drive.google.com/file/d/1oRUPRG1nzC8bD9pzTKEIWE6Ddl2RW4Z6/view?usp=sharing",
      adsterraLink:
        "https://www.profitablecpmrate.com/x5pu1na3s?key=02559a63980594c50058d85da01b12fa",
    },
    {
      id: 8,
      img: doPattiCart,
      title: "Do Patti (2024) Hindi 1080p",
      videoLink:
        "https://drive.google.com/file/d/1E5oxo3jGyruRmZghcDO9wvWu6DKVWEMv/view?usp=sharing",
      adsterraLink:
        "https://www.profitablecpmrate.com/x5pu1na3s?key=02559a63980594c50058d85da01b12fa",
    },
    {
      id: 7,
      img: mrAndMrsMahiCart,
      title: "Mr. And Mrs. Mahi (2024) Hindi 1080p",
      videoLink:
        "https://drive.google.com/file/d/1G99HInmbk2OmRtbraXTEE1RKW2O8z_2o/view?usp=sharing",
      adsterraLink:
        "https://www.profitablecpmrate.com/x5pu1na3s?key=02559a63980594c50058d85da01b12fa",
    },
    {
      id: 6,
      img: BandaaSinghCart,
      title: "Baby John Full Movie (2024) 720p ",
      videoLink:
        "https://drive.google.com/file/d/1cNyiOc5jpXLgVqF-kFlplnIdDiYGYJJy/view?usp=sharing",
      adsterraLink:
        "https://www.profitablecpmrate.com/x5pu1na3s?key=02559a63980594c50058d85da01b12fa",
    },
    {
      id: 5,
      img: BabyJohnCart,
      title: "Baby John Full Movie (2024) 720p ",
      videoLink:
        "https://drive.google.com/file/d/1BpRRzj4fSbeyQMS-fRNRwKGq0RVLXDTz/view?usp=sharing",
      adsterraLink:
        "https://www.profitablecpmrate.com/x5pu1na3s?key=02559a63980594c50058d85da01b12fa",
      // adsterraLink: "https://www.facebook.com/boostyourself543545",
    },
    {
      id: 4,
      img: Devara,
      title: "Devara Full Movie (2024) 720p ",
      videoLink:
        "https://drive.google.com/file/d/17C2R71BkrOsIEtJ4edl6APQqxOSRNewj/view?usp=sharing",
      adsterraLink:
        "https://www.profitablecpmrate.com/x5pu1na3s?key=02559a63980594c50058d85da01b12fa",
      // adsterraLink: "https://www.facebook.com/boostyourself543545",
    },
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
      <h1></h1>

      <h3>
        To watch a movie, you need to click on the play button. After that, an
        ad will appear. You have to watch the ad and then return to this page.
        Once you return, you will find a download button below the movie poster.
        Clicking on that button will allow you to watch the movie, and you can
        also download it if you wish. You only need to watch an ad once for each
        movie.
      </h3>
      <br />
      <br />
      <br />
      <hr />
      <br />
      <br />
      <br />
      <h3>
        মুভি দেখার জন্য প্লে বাটন এ ক্লিক করতে হবে তারপরে একটি অ্যাড দেখাবে
        অ্যাড টি দেখে এই পেজ এ আবার ফিরে আসতে হবে, ফিরে আশার পরে মুভি পোস্টারের
        নিচে একতা ডাউনলোড বাটন পাবেন ওই বাটন এ ক্লিক করলেই মুভি টি দেখতে পাবে
        এবং চাইলে মুভিটি ডাউনলোড করতে ও পারবেন। প্রতিটা মুভি দেখার জন্য একবার
        মাত্র অ্যাড দেখতে হবে।
      </h3>
      <h2>All Catagoris</h2>
      <div className="firstSection_grid_div">
        {movieSrc.map((movie) => (
          <MovieCart key={movie.id} movie={movie}></MovieCart>
        ))}
      </div>
    </div>
  );
};

export default FirstSection;
