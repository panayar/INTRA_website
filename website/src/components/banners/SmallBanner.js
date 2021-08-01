import React from "react";
import "./Banner.css";
import Button from "../buttons/Button";

function SmallBanner(props) {
  return (
    <div className={props.bg}>
      <img width="10%" src={props.img} />
      <br></br>
      <br></br>
      <p className="fontMedium">{props.description}</p>
      <Button message={props.btnMessage} style={props.btnStyle} />
    </div>
  );
}

export default SmallBanner;
