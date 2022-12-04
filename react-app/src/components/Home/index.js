import React from "react";
import AllStationsCarousel from "../RadioStation/AllStationsCarousel";
import FavoriteStationsCarousel from "../RadioStation/FavoriteStationsCarousel";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="home-container">
        <div className="home-banner">
          <div className="home-title">UNIFY.FM</div>
          <div className="home-description">
            Where Music Lovers and Internet Radio Collide
          </div>
        </div>
        <AllStationsCarousel />

        <FavoriteStationsCarousel />
      </div>
    </>
  );
}

export default Home;
