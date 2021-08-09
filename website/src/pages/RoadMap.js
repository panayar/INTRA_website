import React from "react";
import Banner from "../components/banners/Banner";
import InfoBanner from "../components/banners/InfoBanner";
import IconCalendar from "./../assets/img/Calendar.svg";
import dataPage from "../data/data.json";
import "../css/global.css";

function RoadMap() {
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
      <div className="col-12" id="roadmap">
        <InfoBanner
          img={IconCalendar}
          imgspace="imgSpace"
          bg="infoLightBg spacing"
          subtitle={dataPage.mainPage[0].roadMap[0].title}
          description={dataPage.mainPage[0].roadMap[0].description}
          timer="d-none"
          btnStyle="d-none"
          roadmap="roadMap"
        />
      </div>
    </div>
  );
}

export default RoadMap;
