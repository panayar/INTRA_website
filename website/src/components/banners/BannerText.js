import React from "react";

function BannerText(props) {
  return (
    <div className={props.bg}>
      <div className="row">
        <div className="col-lg-6 col-sm-12 col-md-6 d-flex align-items-center bannerText">
          <h2>{props.title}</h2>
        </div>
        <div className="col-lg-6 col-sm-12 col-md-6  bannerText">
          <p className="fontMedium">{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default BannerText;
