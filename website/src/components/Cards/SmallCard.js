import React from "react";
import Button from "./../buttons/Button";
import "./Card.css";
import IconOne from "./../../assets/img/iconOne.svg";

function SmallCard(props) {
  return (
    <div className="small cardText">
      <br></br>
      <img src={props.img} />
      <br></br><br></br>
      <h6 >{props.smTitle}</h6>
      <br></br>
      <p>{props.smDescription}</p>
      <br></br>
    </div>
  );
}

export default SmallCard;
