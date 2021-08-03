import React from "react";
import IconAvatar from "../../assets/img/avatar.png";
import IconLinkedin from "../../assets/img/linkedin.svg";
export default function BigCard(props) {
  const dontShow = () => {
    document.getElementById("textoUnoDos").style.marginTop = "25%";
    document.getElementById("logoLinkedin").style.visibility = "hidden";
  };
  const show = () => {
    document.getElementById("contBigCard").style.cursor = "pointer";
    document.getElementById("logoLinkedin").style.visibility = "visible";
    document.getElementById("textoUnoDos").style.marginTop = "12%";
    document.getElementById("textoUnoDos").style.transition = "margin 0.7s";
  };
  return (
    <div
      key={props.key}
      id="contBigCard"
      className="card"
      style={{width:"95% "}}
      onMouseEnter={show}
      onMouseLeave={dontShow}
    >
      <div className="card-body" style={{ padding: "8%" }}>
        <div className=" row align-items-center">
          <div className="col-6">
            <img width="52%" src={IconAvatar} />
          </div>
          <div className="col-6 alinear-end" >
            <h6 style={{ color: "#DEBFC1" }}>
              {props.title}
            </h6>
            <h6 style={{ marginRight: "8%" }}>{props.subtitle}</h6>
          </div>
        </div>
        <div id="textoUnoDos">
          <p class="card-text">{props.textOne}</p>
          <p>{props.textTwo}</p>
        </div>
      </div>
      <div
        id="logoLinkedin"
        className="d-flex align-items-center "
      >
        <img width="24%" src={IconLinkedin} />
      </div>
    </div>
  );
}
