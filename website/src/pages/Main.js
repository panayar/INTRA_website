import React from "react";
import Nav from "../components/Navs/Nav";
import Banner from "../components/banners/Banner";
import BannerText from "../components/banners/BannerText";
import InfoBanner from "../components/banners/InfoBanner";
import Footer from "../components/footers/Footer";
import Mouse from "./../assets/img/mouse.svg";
import dataPage from "./../data/data.json";
import Cardsm from "../components/Cards/SmallCard";

import IconLibrary from "./../assets/img/iconOne.svg";
import IconWallet from "./../assets/img/walletIcon.svg";
import IconNft from "./../assets/img/nftIcon.svg";
import IconSwap from "./../assets/img/swapIcon.svg";
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

   
            <div className="col-12 centrar ">
              <div className="row d-wrap ">
                <div className="col-auto mt-3">
                  <Cardsm
                    img={IconLibrary}
                    smTitle={dataPage.cards[0].smOne.title}
                    smDescription={dataPage.cards[0].smOne.description}
                  />
                </div>
                <div className="col-auto mt-3">
                  <Cardsm
                    img={IconSwap}
                    smTitle={dataPage.cards[0].smTwo.title}
                    smDescription={dataPage.cards[0].smTwo.description}
                  />
                </div>
                <div className="col-auto mt-3">
                  <Cardsm
                    img={IconWallet}
                    smTitle={dataPage.cards[0].smThree.title}
                    smDescription={dataPage.cards[0].smThree.description}
                  />
                </div>
                <div className="col-auto mt-3">
                  <Cardsm
                    img={IconNft}
                    smTitle={dataPage.cards[0].smFour.title}
                    smDescription={dataPage.cards[0].smFour.description}
                  />
                </div>
              </div>
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
