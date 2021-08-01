import React from "react";
import Nav from "../components/Navs/Nav";
import Banner from "../components/banners/Banner";
import BannerText from "../components/banners/BannerText";
import InfoBanner from "../components/banners/InfoBanner";
import Footer from "../components/footers/Footer";
import Mouse from "./../assets/img/mouse.svg";
import dataPage from "./../data/data.json";
import Cardsm from "../components/Cards/SmallCard";
import BigBanner from "../components/banners/BigBanner";
import BannerLogos from "../components/banners/BannerLogos";

import IconLibrary from "./../assets/img/iconOne.svg";
import IconWallet from "./../assets/img/walletIcon.svg";
import IconNft from "./../assets/img/nftIcon.svg";
import IconSwap from "./../assets/img/swapIcon.svg";
import Man from "./../assets/img/sitMan.png";
import "../css/global.css";

function Main() {
  return (
    <div>
      <Nav />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Banner
              bg="bg spacing"
              title={dataPage.mainPage[0].firstBanner[0].titleBanner}
              description={
                dataPage.mainPage[0].firstBanner[0].descriptionBanner
              }
            />
          </div>
          <div className="col-12">
            <InfoBanner
              title={dataPage.mainPage[0].secondBanner[0].title}
              img={Mouse}
              bg="infoLightBg spacing"
              description={dataPage.mainPage[0].secondBanner[0].description}
              btnStyle="d-none"
              timer="d-none"
            />
          </div>
          <div className="col-12">
            <InfoBanner
              subtitle={dataPage.mainPage[0].thirdBanner[0].title}
              bg="infoImgBg spacing"
              btnStyle="intraDarkBtn"
              btnMessage="Suscribe"
            />
          </div>
          <div className="col-12">
            <BannerText
              bg="infoLightBg spacing "
              title={dataPage.mainPage[0].fourthBanner[0].title}
              description={dataPage.mainPage[0].fourthBanner[0].description}
            />
          </div>

          <div className="col-12">
            <div className="row centrado">
              <div className="col-auto">
                <Cardsm
                  img={IconLibrary}
                  smTitle={dataPage.cards[0].smOne.title}
                  smDescription={dataPage.cards[0].smOne.description}
                />
              </div>
              <div className="col-auto">
                <Cardsm
                  img={IconSwap}
                  smTitle={dataPage.cards[0].smTwo.title}
                  smDescription={dataPage.cards[0].smTwo.description}
                />
              </div>
              <div className="col-auto">
                <Cardsm
                  img={IconWallet}
                  smTitle={dataPage.cards[0].smThree.title}
                  smDescription={dataPage.cards[0].smThree.description}
                />
              </div>
              <div className="col-auto">
                <Cardsm
                  img={IconNft}
                  smTitle={dataPage.cards[0].smFour.title}
                  smDescription={dataPage.cards[0].smFour.description}
                />
              </div>
            </div>
          </div>
          <div className="col-12">
            <BigBanner
              style="row bannerText infoLightBg spacing "
              img={Man}
              titleOne={dataPage.mainPage[0].fithBanner[0].textOne[0].title}
              descriptionOne={
                dataPage.mainPage[0].fithBanner[0].textOne[0].description
              }
              titleTwo={dataPage.mainPage[0].fithBanner[0].textTwo[0].title}
              descriptionTwo={
                dataPage.mainPage[0].fithBanner[0].textTwo[0].description
              }
              titleThree={dataPage.mainPage[0].fithBanner[0].textThree[0].title}
              descriptionThree={
                dataPage.mainPage[0].fithBanner[0].textThree[0].description
              }
              titleFour={dataPage.mainPage[0].fithBanner[0].textFour[0].title}
              descriptionFour={
                dataPage.mainPage[0].fithBanner[0].textFour[0].description
              }
            />
          </div>
          <div className="col-12">
            <BannerLogos/>
          </div>
          <div className="col-12">
            <Footer bg="infoLightBg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
