import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <>
      <div className="home">
        <Navbar />
        <div className="hero">
          <img src={hero_banner} className="banner-img" alt="" />
          <div className="hero-caption">
            <img src={hero_title} className="caption-img" alt="" />
            <p>
              Netflix is a popular streaming service offering a vast library of
              movies, TV shows, and original content across various genres. It
              provides on-demand entertainment with subscription-based access,
              personalized recommendations , and multi-device compatibility,
              revolutionizing digital media consumption worldwide.
            </p>

            <div className="hero-btns">
              <button className="btn">
                <img src={play_icon} alt="" />
                Play
              </button>
              <button className="btn dark-btn">
                <img src={info_icon} alt="" />
                More Info
              </button>
            </div>

            <TitleCards />
          </div>
        </div>
        <div className="more-cards">
          <TitleCards title={"BlockBuster Movie"} category={"top_rated"} />
          <TitleCards title={"only on Netflix"} category={"popular"} />
          <TitleCards title={"upcoming Movie"} category={"upcoming"} />
          <TitleCards title={" Top pics for u"} category={"now_playing"} />
        </div>
        <Footer />
      </div>
    </>
  );
}
export default Home;
