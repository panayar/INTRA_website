import React from "react";
import Button from "../buttons/Button";
import Hand from "../../assets/img/handWithPhone.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Banner.css";

function Banner() {
  return (
    <div className="bg">
      <div className="row ">
        <div className="col-lg-6 col-md-12 col-sm-12 align" >
          <h1 className="fontSemiBold">
            Animate Your ideas, Design Better Apss
          </h1>
          <br></br>
          <p className="fontMedium">
            Make it easy to desing animated and interactive user interfaces, 
            Work done for an upcoming NFT marketplace catered to musicians.
          </p>
          <br></br>
          <div className="row">
            <div className="col-12 fontSemiBold"> 
              <Button message="Buy Token" style="intraLightBtn margin" />
              <Button message="See Whitepaper" style="intraDarkBtn " />
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 d-sm-none d-lg-block" align="center">
          <img className="d-sm-none  d-xs-none d-lg-block  "   width="80%" src={Hand}/>
        </div>
      </div>
    </div>
  );
}

export default Banner;
