import React from "react";
import "./Banner.css";

function BigBanner(props) {
  return (
    <div className={props.styles}>
      <div className="col-lg-6 d-lg-block col-md-6 hide" align="center">
        <img alt={props.alt} src={props.img} />
      </div>
      <div className="col-lg-6 col-md-12 col-sm-12">
        <div className="row mt-5">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <h4>{props.titleOne}</h4>
            <p className="fontMedium">{props.descriptionOne}</p>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <h4>{props.titleTwo}</h4>
            <p className="fontMedium">{props.descriptionTwo}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <h4>{props.titleThree}</h4>
            <p className="fontMedium">{props.descriptionThree}</p>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <h4>{props.titleFour}</h4>
            <p className="fontMedium">{props.descriptionFour}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BigBanner;
