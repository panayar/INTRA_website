import React from "react";
import "./Footer.css";
import FacebookIcon from "../../assets/img/facebookIcon.png";
import TwitterIcon from "../../assets/img/twitterIcon.png";
import InstaIcon from "../../assets/img/instagramIcon.png";

function Footer(props) {
  return (
    <div className={props.bg}>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center">
          <h3>INTRA</h3>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="row align-right">
            <div className="col-4">
              <h5>Support</h5>
              <a>FAQ'S</a>
              <br></br>
              <a>Contact Us</a>
              <br></br>
              <a>Privacy Policy</a>
            </div>
            <div className="col-4">
              <h5>Company</h5>
              <a>Why INTRA Token?</a>
              <br></br>
              <a>Capital</a>
              <br></br>
              <a>Security</a>
            </div>
            <div className="col-4">
              <h5>About</h5>
              <a>About Us</a>
              <br></br>
              <a>Features</a>
              <br></br>
              <a>News blog</a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 text-center mt-4 mb-4 p-2">
        <img src={FacebookIcon} />
        <img className="spc" src={TwitterIcon} />
        <img src={InstaIcon} />
      </div>
    </div>
  );
}

export default Footer;
