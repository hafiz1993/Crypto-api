import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="col col-1">
          <h1>
            De <span className="primary">Fi</span>
          </h1>
        </div>
        <div className="col">
          <h5>Support</h5>
          <span className="bar"> </span>
          <a href="/">Contact Us</a>
          <a href="/">Help</a>
          <a href="/">Help Center</a>
          <a href="/">FAQ</a>
        </div>
        <div className="col">
          <h5>Developers</h5>
          <span className="bar"></span>
          <a href="/">Clud</a>
          <a href="/">commerce</a>
          <a href="/">Pro</a>
          <a href="/">API</a>
        </div>
        <div className="col">
          <h5>Company</h5>
          <span className="bar"></span>
          <a href="/">About</a>
          <a href="/">Information</a>
          <a href="/">Legal</a>
          <a href="/">Privacy</a>
        </div>
        <div className="col">
          <h5>Social</h5>
          <span className="bar"> </span>
          <a href="/">
            <FaFacebook size={20} className="icon" />
          </a>
          <a href="/">
            <FaGithub size={20} className="icon" />
          </a>
          <a href="/">
            <FaLinkedin size={20} className="icon" />
          </a>
          <a href="/">
            <FaTwitter size={20} className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
