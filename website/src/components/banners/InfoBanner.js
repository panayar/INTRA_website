import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Banner.css";
import Button from "../buttons/Button";

function InfoBanner(props) {
  return (
    <div className={props.bg}>
      <img src={props.img} className="imgSpace" />
      <h2>{props.title}</h2>
      <h5>{props.subtitle}</h5>
      <p className="fontMedium">{props.description}</p>
      <div className={props.timer}>
        <h1>12 : 08 : 02</h1>
        <p>Days</p>
      </div>

      <Button message={props.btnMessage} style={props.btnStyle}  />
      <br></br>
      <br></br>
    </div>
  );
}

export default InfoBanner;
