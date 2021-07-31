import React from "react";
import "./Button.css";

const IntraBtn = (props) => {
  return <button className={props.style}>{props.message}</button>;
}

export default IntraBtn;
