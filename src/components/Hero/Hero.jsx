import React from "react";
import HeroImage from "../../assets/vibrating-headphone.png"

function Hero() {
  return (
    <div className="hero">
      <div>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <div>
        <img
          src={HeroImage}
          className="hero-image"
          alt="headphones"
        />
      </div>
    </div>
  );
}

export default Hero;
