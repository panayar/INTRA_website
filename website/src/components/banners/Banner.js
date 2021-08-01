import React, { useState,useEffect } from "react";
import Button from "../buttons/Button";
import Hand from "../../assets/img/handWithPhone.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Banner.css";

let numInicial = 0;
function Banner(props) {
  const [counterOne, setCounterOne] = React.useState(0)
  const [counterTwo, setCounterTwo] = React.useState(0)
  const [counterThree, setCounterThree] = React.useState(0)
  const [messageButton, setMessageButton] = React.useState("Buy Token");

  let funContador = (numMax, vel, setCount) => {
      let upCounter = setInterval(() => {
        numInicial += 1;
        setCount(numInicial)
        if (numInicial >= numMax) {
          setCount(numMax)
          clearInterval(upCounter)
        }
      }, vel)
  }



  const changeMessage = () => {
    setMessageButton("buy for 0.00$")
  }
  const changeMessage2 = () => {
    setMessageButton("Buy Token")
  }

  window.onload = () =>{
    funContador(100, 15, setCounterOne);
    numInicial = 0;
    funContador(250, 4, setCounterTwo);
    numInicial = 0;
    funContador(250, 4, setCounterThree);
  }


  return (
    <div className={props.bg}>
      <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12 align ">
          <h1 className="fontSemiBold">
            Animate Your ideas, Design Better Apps
          </h1>
          <br></br>
          <p className="fontMedium">
            Make it easy to desing animated and interactive user interfaces,
            Work done for an upcoming NFT marketplace catered to musicians.
          </p>
          <br></br>
          <div className="row ">
            <div className="col-12 fontSemiBold">
              <Button style="intraLightBtn fourth" function2={changeMessage2} function={changeMessage} message={messageButton} />
              <Button message="See Whitepaper" style="intraDarkBtn " />
            </div>
          </div>
          <br></br>
          <br></br>

          <div className="row text-center">
            <div className="col block">
              <h3>{counterOne}M</h3>
              <p>Pre Sale Token</p>
            </div>
            <div className="col block">
              <h3>{counterTwo}M</h3>
              <p>Total Supply</p>
            </div>
            <div className="col ">
              <h3 className="text-green">{counterThree}M</h3>
              <p>Market Cap</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 d-lg-block col-md-6 hide" align="center">
          <img width="80%" src={Hand} />
        </div>
      </div>

    </div>
  );
}

export default Banner;
