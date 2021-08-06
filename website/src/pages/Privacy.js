import React from "react";
import Banner from "../components/banners/Banner";
import InfoBanner from "../components/banners/InfoBanner";
import dataPage from "../data/data.json";
import Accordion from "../components/accordions/Accordion";
import Mouse from "./../assets/img/mouse.svg";
import Wallet from "./../assets/img/Wallet.png";
import "../css/global.css";

function Privacy() {
  return (
    <div className="row">
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
      <div className="col-12">
        <InfoBanner
          title={dataPage.SupportPage[0].titleInfoBanner}
          img={Mouse}
          bg="infoLightBg"
          btnStyle="d-none"
          timer="d-none"
          imgspace="imgSpace"
        />
      </div>
      <div className="col-12">
        <Accordion
          bg="bgAccordion"
          mainTitle={dataPage.SupportAccordion[0].mainTitle}
          titleOne={
            dataPage.privacyAccordion[0].sections[0].firstQuestion[0].title
          }
          descriptionOne={
            dataPage.privacyAccordion[0].sections[0].firstQuestion[0]
              .description
          }
          titleTwo={
            dataPage.privacyAccordion[0].sections[0].secondQuestion[0].title
          }
          descriptionTwo={
            dataPage.privacyAccordion[0].sections[0].secondQuestion[0]
              .description
          }
          titleThree={
            dataPage.privacyAccordion[0].sections[0].thirdQuestion[0].title
          }
          descriptionThree={
            dataPage.privacyAccordion[0].sections[0].thirdQuestion[0]
              .description
          }
        />
      </div>
      <div className="col-12">
        <InfoBanner
          img={Wallet}
          imgspace="imgSpace"
          bg="infoLightBg spacing"
          subtitle={dataPage.mainPage[0].sevenBanner[0].title}
          description={dataPage.mainPage[0].sevenBanner[0].description}
          btnMessage={dataPage.mainPage[0].sevenBanner[0].btn}
          timer="d-none"
          modal="#walletModal"
          idModal="walletModal"
          btnStyle="intraBigDarkBtn"
        />
      </div>
    </div>
  );
}

export default Privacy;
