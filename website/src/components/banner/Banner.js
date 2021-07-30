import React from "react";
import Button from "../buttons/Button";
import Hand from "../../assets/img/handWithPhone.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Banner.css";

function Banner() {
  return (
    <div className="bg">
      <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12 align ">
          <h1 className="fontSemiBold">
            Animate Your ideas, Design Better Apps
          </h1>
          <br></br>
          <p className="fontMedium">
            Make it easy to desing animated and interactive user interfaces,
            Work done for an upcoming NFT marketplace catered to musicians.
          </p>
          <br></br>
          <div className="row ">
            <div className="col-12 fontSemiBold">
              <Button message="Buy Token" style="intraLightBtn margin" />
              <Button message="See Whitepaper" style="intraDarkBtn " />
            </div>
          </div>
          <br></br>
          <br></br>

          <div className="row text-center">
            <div className="col block">
              <h4>100M</h4>
              <p>Pre Sale Token</p>
            </div>
            <div className="col block">
              <h4>250</h4>
              <p>Total Supply</p>
            </div>
            <div className="col ">
              <h4 className="text-green">250</h4>
              <p>Market Cap</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 d-lg-block col-md-6 hide" align="center">
          <img width="80%" src={Hand} />
        </div>
      </div>

    </div>
  );
}

export default Banner;
