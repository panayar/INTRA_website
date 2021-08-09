import React from "react";
import Banner from "../components/banners/Banner";
import InfoBanner from "../components/banners/InfoBanner";
import dataPage from "../data/data.json";
import Mouse from "./../assets/img/mouse.svg";
import "../css/global.css";

function PreSale() {
  return (
    <div className="row" style={{marginBottom: "120px"}}>
      <div className="col-12">
        <Banner
          bg="bg spacing"
          title={dataPage.mainPage[0].firstBanner[0].titleBanner}
          description={dataPage.mainPage[0].firstBanner[0].descriptionBanner}
          contOne={dataPage.mainPage[0].firstBanner[0].contOne}
          contTwo={dataPage.mainPage[0].firstBanner[0].contTwo}
          contThree={dataPage.mainPage[0].firstBanner[0].contThree}
        />
      </div>

      <div className="col-lg-6 col-md-6 col-sm-12">
        <InfoBanner
          title={dataPage.mainPage[0].secondBanner[0].title}
          img={Mouse}
          bg="infoLightBg"
          description={dataPage.mainPage[0].secondBanner[0].description}
          btnStyle="intraBigDarkBtn"
          btnMessage="Más información"
          timer="d-none"
          roadmap="d-none"
          imgspace="imgSpace"
          modal="#presaleModal"
        />
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12">
        <InfoBanner
          title={dataPage.mainPage[0].sixBanner[0].title}
          description={dataPage.mainPage[0].sixBanner[0].description}
          bg="infobgBn spacing"
          btnStyle="intraBigDarkBtn"
          btnMessage={dataPage.mainPage[0].sixBanner[0].btn}
          timer="d-none"
          modal="#presaleModal"
          roadmap="d-none"
          modalId="presaleModal"
        />
      </div>
    </div>
  );
}

export default PreSale;
