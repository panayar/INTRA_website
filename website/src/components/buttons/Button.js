import React from "react";

const IntraBtn = (props) => {
  return <button className={props.style} onMouseOver={props.function} onMouseOut={props.function2}>{props.message}</button>;
}

export default IntraBtn;
