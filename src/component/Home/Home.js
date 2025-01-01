import React, { useState } from "react";
import "./Home.css";
import bannerPhoto from "../../accets/bannerPhoto/bannerPhoto.webp";
import { Link } from "react-router-dom";
import Banner from "../Banner/Banner";
import FirstSection from "../FirstSection/FirstSection";

const Home = () => {
  const [isDownloadBtnVisible, setIsDownloadBtnVisible] = useState(false);

  const showMovieDownloadBtn = () => {
    setIsDownloadBtnVisible(true); // Update state to show the download button
  };

  return (
    <div className="home_parent_div">
      <Banner></Banner>
      <FirstSection></FirstSection>
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
      <p>Lorem ipsum dolor sit amet.</p>
      <p>Ut ab corrupti hic cupiditate.</p>
      <p>Veniam dolorem atque beatae dolore?</p>
      <p>Accusamus maiores dolorum beatae quidem.</p>
      <p>Soluta vero quis pariatur cupiditate.</p>
      <p>Tenetur laudantium maxime quam. Quidem!</p>
      <p>Nihil accusamus odit quia amet?</p>
      <p>Sunt nesciunt error mollitia suscipit.</p>
      <p>Architecto earum odit quae numquam.</p>
      <p>Molestias magnam reprehenderit sed numquam?</p>
      <p>Id cupiditate numquam perspiciatis totam?</p>
      <p>Reiciendis aliquam libero autem ipsa?</p>
      <p>Eos atque facere animi reprehenderit?</p>
      <p>Odit ratione velit corrupti debitis?</p>
      <p>Cupiditate obcaecati ab repudiandae minima.</p>
      <p>Facere repudiandae earum error voluptatibus?</p>
      <p>Nam praesentium ratione qui temporibus.</p>
      <p>Velit assumenda unde qui dolore.</p>
      <p>Molestiae dolor voluptates ratione laboriosam.</p>
      <p>Doloribus cum dignissimos distinctio nostrum.</p>
      <p>Similique quis nesciunt dolore sint!</p>
      <p>Fugit asperiores quidem omnis esse?</p>
      <p>Doloribus aperiam inventore facere quo.</p>
      <p>Natus nostrum blanditiis eius? Tempore.</p>
      <p>Enim distinctio sed odit similique.</p>
      <p>Placeat illo quod commodi? Repellat!</p>
      <p>Ut eveniet molestias sed nesciunt.</p>
      <p>Accusamus dolorum laboriosam eveniet obcaecati!</p>
      <p>Omnis dolorem culpa commodi debitis.</p>
      <p>Pariatur consequatur voluptas dolor magni!</p>
      <p>Illo eum iusto modi neque!</p>
      <p>Repellat veniam molestias enim voluptates.</p>
      <p>Ut non adipisci voluptatibus blanditiis?</p>
      <p>A illum optio accusantium dolor.</p>
      <p>Minima alias rem error earum?</p>
      <p>Ea soluta ipsa iusto aut.</p>
      <p>Officia alias repellendus blanditiis commodi.</p>
      <p>Dolorum suscipit repellendus debitis possimus.</p>
      <p>Voluptate obcaecati non repellendus perferendis!</p>
      <p>Dolore voluptate hic ipsum alias.</p>
      <p>Omnis sint placeat natus dolor!</p>
      <p>Temporibus, doloribus atque. Ipsa, optio.</p>
      <p>Libero cum cumque ullam et.</p>
      <p>Maiores esse neque natus adipisci.</p>
      <p>Obcaecati voluptas vitae impedit atque?</p>
      <p>Ipsam esse quibusdam vel cupiditate?</p>
      <p>Est blanditiis illum facere repudiandae.</p>
      <p>Necessitatibus placeat eaque magnam reprehenderit.</p>
      <p>Saepe deserunt labore quia tempora.</p>
      <p>Est earum aperiam officia corporis!</p>
    </div>
  );
};

export default Home;
