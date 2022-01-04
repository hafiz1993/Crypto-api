import React from "react";
import "./SignUp.css";
import crypto from "../assets/trade.png";

const SignUp = () => {
  return (
    <section id="earn">
      <div className="signUp">
        <div className="container">
          {/* left */}
          <div className="left">
            <img src={crypto} alt="/" />
          </div>
          {/* rignt */}
          <div className="right">
            <h2>Earn Passive income </h2>
            <p>Earn to 12% annual rewards on 30+ assets</p>
            <div className="import-container">
              <input
                type="email"
                name=""
                id=""
                placeholder="Enter your Email"
              />
              <button className="btn">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
