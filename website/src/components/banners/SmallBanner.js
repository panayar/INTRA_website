import React from "react";
import "./Banner.css";
import Button from "../buttons/Button";

function SmallBanner(props) {
  return (
    <div className={props.bg}>
      <img  alt={props.alt}  width="10%" src={props.img} />
      <br></br>
      <br></br>
      <p className="fontMedium">{props.description}</p>
      <Button link={props.btnLink} message={props.btnMessage} styles={props.btnStyle} />
    </div>
  );
}

export default SmallBanner;
