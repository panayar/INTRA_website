import React from "react";
import "./Button.css";

const IntraBtn = (props) => {
  return (
    <a href={props.link} target="blank">
      <button
        className={props.style}
        onMouseOver={props.function}
        onMouseOut={props.function2}
      >
        {props.message}
      </button>
    </a>
  );
};

export default IntraBtn;
