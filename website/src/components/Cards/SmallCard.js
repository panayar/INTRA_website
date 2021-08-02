import React from "react";
import "./Card.css";

function SmallCard(props) {
  return (
    <div className="small cardText">
      <br></br>
      <img alt={props.alt} src={props.img} />
      <br></br><br></br>
      <h6 >{props.smTitle}</h6>
      <br></br>
      <p>{props.smDescription}</p>
      <br></br>
    </div>
  );
}

export default SmallCard;
