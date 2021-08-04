import React from "react";
import Banner from "../components/banners/Banner";
import InfoBanner from "../components/banners/InfoBanner";
import Nav from "../components/Navs/Nav";
import dataPage from "./../data/data.json";
import Accordion from "../components/accordions/Accordion";
import Footer from "../components/footers/Footer";

import Mouse from "./../assets/img/mouse.svg";
import Wallet from "./../assets/img/Wallet.png";
import "../css/global.css";

function Support() {
  return (
    <div className="container">
      <Nav />
      <div className="row">
        <div className="col-12">
          <Banner
            bg="bg spacing"
            title={dataPage.mainPage[0].firstBanner[0].titleBanner}
            description={dataPage.mainPage[0].firstBanner[0].descriptionBanner}
          />
        </div>
        <div className="col-12">
          <InfoBanner
            title={dataPage.SupportPage[0].titleInfoBanner}
            img={Mouse}
            bg="infoLightBg spacing"
            btnStyle="d-none"
            timer="d-none"
            imgspace="imgSpace"
          />
        </div>
        <div className="col-12">
          <Accordion
            bg="bgAccordion"
            mainTitle={dataPage.SupportAccordion[0].mainTitle}
            titleOne={dataPage.SupportAccordion[0].sections[0].firstQuestion[0].title}
            descriptionOne={dataPage.SupportAccordion[0].sections[0].firstQuestion[0].description}
            titleTwo={dataPage.SupportAccordion[0].sections[0].secondQuestion[0].title}
            descriptionTwo={dataPage.SupportAccordion[0].sections[0].secondQuestion[0].description}
            titleThree={dataPage.SupportAccordion[0].sections[0].thirdQuestion[0].title}
            descriptionThree={dataPage.SupportAccordion[0].sections[0].thirdQuestion[0].description}
          />
        </div>
        <div className="col-12">
        <InfoBanner
              img={Wallet}
              imgspace = "imgSpace"
              bg="infoLightBg spacing"
              subtitle={dataPage.mainPage[0].sevenBanner[0].title}
              description={dataPage.mainPage[0].sevenBanner[0].description}
              btnMessage={dataPage.mainPage[0].sevenBanner[0].btn}
              timer="d-none"
              btnStyle="intraBigDarkBtn" />
        </div>

        <div className="col-12">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Support;
