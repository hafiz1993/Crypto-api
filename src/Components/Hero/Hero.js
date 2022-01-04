import React from "react";
import "./Hero.css";
import crypto from "../assets/hero-img.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        {/*left side*/}
        <div className="left">
          <p>Buy & sell Crypto 24/7 using your retirement account </p>
          <h1>Invest in Cryptocurrency with you IRA </h1>
          <p>Buy, Sell and store hundreds of cryptocurrencies</p>

          <div className="input-container">
            <input type="email" name="" id="" placeholder="Enter Your Email" />
            <button className="btn">Learn More</button>
          </div>
        </div>
        {/*right side*/}
        <div className="right">
          <div className="img-container">
            <img src={crypto} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
