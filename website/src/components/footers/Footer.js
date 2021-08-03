import React from "react";
import "./Footer.css";
import FacebookIcon from "../../assets/img/facebookIcon.png";
import TwitterIcon from "../../assets/img/twitterIcon.png";
import InstaIcon from "../../assets/img/instagramIcon.png";

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
              <a className="textFooter" href="https://github.com">FAQ'S</a>
              <br></br>
              <a className="textFooter" href="https://github.com">Contact Us</a>
              <br></br>
              <a className="textFooter" href="https://github.com">Privacy Policy</a>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 mt-4 ">
              <h5>Company</h5>
              <a className="textFooter" href="https://github.com">Why INTRA Token?</a>
              <br></br>
              <a className="textFooter" href="https://github.com">Capital</a>
              <br></br>
              <a className="textFooter" href="https://github.com">Security</a>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 mt-4 ">
              <h5>About</h5>
              <a className="textFooter" href="https://github.com">About Us</a>
              <br></br>
              <a className="textFooter" href="https://github.com">Features</a>
              <br></br>
              <a className="textFooter" href="https://github.com">News blog</a>
            </div>
          </div>
        </div>
      </div>
    
      <div className="col-12 text-center mt-4 mb-4 p-2">
        <a target="blank" href="https://www.facebook.com/IntraTechnologyCo/" ><img alt={props.alt} className="spc" src={FacebookIcon} /></a>
        <a target="blank" href="https://www.instagram.com/intratechnology_/" ><img alt={props.alt} className="spc" src={InstaIcon} /></a>
        <a target="blank" href="https://twitter.com/IntraTechnolog1" ><img alt={props.alt} className="spc" src={TwitterIcon} /></a>
        
      </div>
    </div>
  );
}

export default Footer;
