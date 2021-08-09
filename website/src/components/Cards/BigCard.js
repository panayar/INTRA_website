import React from "react";
import IconAvatar from "../../assets/img/avatar.png";
import IconLinkedin from "../../assets/img/linkedin.svg";

export default function BigCard(props) {
  const [marginTopText, setMarginTopText] = React.useState("25%")
  const [visibilityLogo, setVisibilityLogo] = React.useState("hidden")
  const [transition, setTransition] = React.useState("hidden")
  const [cursor, setCursor] = React.useState("default")
//  document.getElementById("contBigCard").style.cursor ;
//  document.getElementById("logoLinkedin").style.visibility;
//  document.getElementById("textoUnoDos").style.marginTop;
//  document.getElementById("textoUnoDos").style.transition;
  const show = () =>{
    setMarginTopText("12%")
    setVisibilityLogo("visible")
    setTransition("margin 0.5s")
    setCursor("pointer")
  }
  const dontShow =()=>{
    setMarginTopText("25%")
    setVisibilityLogo("hidden")
    setCursor("default")
  }
 

  // const visibility =    document.getElementById("logoLinkedin").style.visibility;
  // const margin =     document.getElementById("textoUnoDos").style.marginTop;
  // const timeTransition =    document.getElementById("textoUnoDos").style.transition;
  
  return (
    <div
      key={props.key}
      id="contBigCard"
      className="card"
      onMouseEnter={show}
      onMouseLeave={dontShow}
      style={{width:"350px", height: '500px' , cursor :cursor}}
    >
      <div className="card-body" style={{ padding: "8%" }}>
        <div className=" row align-items-center">
          <div className="col-6">
            <img alt={props.alt} width="52%" src={IconAvatar} />
          </div>
          <div className="col-6 alinear-end" >
            <h6 style={{ color: "#DEBFC1" }}>
              {props.title}
            </h6>
            <h6 style={{ marginRight: "8%" }}>{props.subtitle}</h6>
          </div>
        </div>
        <div id="textoUnoDos" style={{marginTop:marginTopText,transition:transition}}>
          <p className="card-text">{props.textOne}</p>
          <p>{props.textTwo}</p>
        </div>
      </div>
      <div
        id="logoLinkedin"
        style={{visibility:visibilityLogo}}
        className="d-flex align-items-center "
      >
        <img alt={props.alt} width="30%" src={IconLinkedin} />
      </div>
    </div>
  );
}
