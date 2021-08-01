import React from "react";
import "./Footer.css";
import FacebookIcon from "../../assets/img/facebookIcon.png";
import TwitterIcon from "../../assets/img/twitterIcon.png";
import InstaIcon from "../../assets/img/instagramIcon.png";
import { Linking } from 'react'

function Footer(props) {
  return (
    <div className={props.bg}>
      <div className="row">
        <div className="col-lg-6 col-md-6 logoText">
          <h3>INTRA</h3>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="row align-right">
            <div className="col-lg-4 col-md-4 col-sm-12 mt-4 ">
              <h5>Support</h5>
              <a className="textFooter">FAQ'S</a>
              <br></br>
              <a className="textFooter">Contact Us</a>
              <br></br>
              <a className="textFooter">Privacy Policy</a>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 mt-4 ">
              <h5>Company</h5>
              <a className="textFooter">Why INTRA Token?</a>
              <br></br>
              <a className="textFooter">Capital</a>
              <br></br>
              <a className="textFooter">Security</a>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 mt-4 ">
              <h5>About</h5>
              <a className="textFooter">About Us</a>
              <br></br>
              <a className="textFooter">Features</a>
              <br></br>
              <a className="textFooter">News blog</a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 text-center mt-4 mb-4 p-2">
        <a target="blank" href="https://www.facebook.com/IntraTechnologyCo/" ><img className="spc" src={FacebookIcon} /></a>
        <a target="blank" href="https://twitter.com/IntraTechnolog1/"> <img className="spc" src={TwitterIcon} /></a>
        <a target="blank" href="https://instagram.com/intratechnology/">  <img className="spc" src={InstaIcon} /></a>
      </div>
    </div>
  );
}

export default Footer;
