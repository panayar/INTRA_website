import React from "react";
import Button from "../buttons/Button";
import Hand from "../../assets/img/handWithPhone.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Banner.css";

function Banner(props) {
  return (
    <div className={props.bg}>
      <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12 align ">
          <h1 className="fontSemiBold">
           {props.title}
          </h1>
          <br></br>
          <p className="fontMedium">
           {props.description}
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
              <h3>100M</h3>
              <p>Pre Sale Token</p>
            </div>
            <div className="col block">
              <h3>250</h3>
              <p>Total Supply</p>
            </div>
            <div className="col ">
              <h3 className="text-green">250</h3>
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
