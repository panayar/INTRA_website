import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Banner.css";

function BannerText(props) {
  return (
    <div className={props.bg}>
      <div className="row">
        <div className="col-lg-6 col-sm-12 col-md-6 d-flex align-items-center bannerText">
          <h2>{props.title}</h2>
        </div>
        <div className="col-lg-6 col-sm-12 col-md-6  bannerText">
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default BannerText;
