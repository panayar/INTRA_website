import React from "react";
import Button from "../buttons/Button";
import Hand from "../../assets/img/handWithPhone.png";
import "./Banner.css";

// let numInicial = 0;
function Banner(props) {
  
  const [messageButton, setMessageButton] = React.useState("Buy Token");

  const changeMessage = () => {
    setMessageButton("buy for 0.00$")
  }
  const changeMessage2 = () => {
    setMessageButton("Buy Token")
  }

  return (
    <div className={props.bg}>
      <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12 align ">
          <h1 className="fontSemiBold">
           {props.title}
          </h1>
          <br></br>
          <p className="fontMedium">
           {props.description}
          </p>
          <br></br>
          <div className="row ">
            <div className="col-12 fontSemiBold">
              <Button styles="intraLightBtn fourth space"  function2={changeMessage2} function={changeMessage} message={messageButton} />
              <Button message="See Whitepaper" styles="intraDarkBtn " />
            </div>
          </div>
          <br></br>
          <br></br>

          <div className="row text-center">
            <div className="col block">
              <h3>{props.contOne}</h3>
              <p>Pre Sale Token</p>
            </div>
            <div className="col block">
              <h3>{props.contTwo}</h3>
              <p>Total Supply</p>
            </div>
            <div className="col ">
              <h3 className="text-green">{props.contThree}</h3>
              <p>Market Cap</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 d-lg-block col-md-6 hide" align="center">
          <img alt={props.alt} width="80%" src={Hand} />
        </div>
      </div>

    </div>
  );
}


export default Banner;
