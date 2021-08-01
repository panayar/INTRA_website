import React from "react";
import "./Banner.css";
import Bitcoin from "./../../assets/img/bannerLogos/bitCoin.png";
import Ethereum from "./../../assets/img/bannerLogos/ethereum.png";
import Cakecoin from "./../../assets/img/bannerLogos/cakecoin.png";
import Solana from "./../../assets/img/bannerLogos/solana.png";
import Polkadot from "./../../assets/img/bannerLogos/polkadot.png";
import Safemoon from "./../../assets/img/bannerLogos/safemoon.png";
import Matic from "./../../assets/img/bannerLogos/matic.png";
import Computer from "./../../assets/img/bannerLogos/internet.png";

function BannerLogos(props) {
  return (
    <div className={props.style}>
      <div className="col-12">
        <h2 className="align-center">Supported Coins</h2>
      </div>
      <div className="col-auto">
        <img src={Bitcoin} />
      </div>
      <div className="col-auto">
        <img src={Ethereum} />
      </div>
      <div className="col-auto">
        <img src={Cakecoin} />
      </div>
      <div className="col-auto">
        <img src={Solana} />
      </div>
      <div className="col-auto">
        <img src={Polkadot} />
      </div>
      <div className="col-auto">
        <img src={Safemoon} />
      </div>
      <div className="col-auto">
        <img src={Matic} />
      </div>
      <div className="col-auto">
        <img src={Computer} />
      </div>
    </div>
  );
}

export default BannerLogos;
