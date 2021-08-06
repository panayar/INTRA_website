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
import SmallBanner from "../components/banners/SmallBanner";
import Carousel from "../components/Carousel/Carousel";
import MyCalendar from "../components/Calendar/calendar"

import IconLibrary from "./../assets/img/iconOne.svg";
import IconWallet from "./../assets/img/walletIcon.svg";
import IconCalendar from "./../assets/img/Calendar.svg";
import IconNft from "./../assets/img/nftIcon.svg";
import IconSwap from "./../assets/img/swapIcon.svg";
import IconDiscord from "./../assets/img/discord.png";
import IconTelegram from "./../assets/img/telegram.png";
import Man from "./../assets/img/sitMan.png";
import Wallet from "./../assets/img/Wallet.png";
import 'bootstrap';
import "../css/global.css";

function Main() {
  return (
        <div className="row"  data-bs-spy="scroll"  data-bs-target="#nav">
          <div className="col-12">
            <Banner
              bg="bg spacing"
              title={dataPage.mainPage[0].firstBanner[0].titleBanner}
              description={
                dataPage.mainPage[0].firstBanner[0].descriptionBanner
              }
              contOne = {dataPage.mainPage[0].firstBanner[0].contOne}
              contTwo = {dataPage.mainPage[0].firstBanner[0].contTwo}
              contThree = {dataPage.mainPage[0].firstBanner[0].contThree}
            />
          </div>
          <div className="col-12">
            <InfoBanner
              title={dataPage.mainPage[0].secondBanner[0].title}
              img={Mouse}
              bg="infoLightBg"
              description={dataPage.mainPage[0].secondBanner[0].description}
              btnStyle="d-none"
              timer="d-none"
              roadmap="d-none"
              imgspace = "imgSpace"
            />
          </div>
          <div className="col-12">
            <InfoBanner
              subtitle={dataPage.mainPage[0].thirdBanner[0].title}
              timer="d-flex timer"
              space="secciones"
              bg="infoImgBg spacing "
              btnStyle="intraDarkBtn"
              btnMessage="Suscribe"
              modal="#presaleModal"
              roadmap="d-none"
              modalId ="presaleModal"
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
          <div className="col-12 spacing">
            <Carousel/>
          </div>
      
          <div className="col-12">
            <BannerLogos style="row infoLightBg centrado spacing" />
          </div>
          <div className="col-12">
            <InfoBanner
              title={dataPage.mainPage[0].sixBanner[0].title}
              description={dataPage.mainPage[0].sixBanner[0].description}
              bg="infobgBn spacing"
              btnStyle="intraBigDarkBtn"
              btnMessage={dataPage.mainPage[0].sixBanner[0].btn}
              timer="d-none"
              modal="#presaleModal"
              roadmap="d-none"
              modalId ="presaleModal"
            />
          </div>
          <div className="col-12 align-center spacing">
            <h3>Bienvenido a nuestra comunidad</h3>
          </div>
    
          <div className="col-lg-6 col-md-6 col-sm-12">
            <SmallBanner
              img={IconTelegram}
              bg="bgBannerSmallOne"
              description={dataPage.mainPage[0].miniBannerOne[0].text}
              btnStyle="intraLightBtn"
              btnMessage={dataPage.mainPage[0].miniBannerOne[0].btn}
              btnLink = "https://t.me/IntraEcosystemGrupo"
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <SmallBanner
              img={IconDiscord}
              bg="bgBannerSmallTwo "
              description={dataPage.mainPage[0].miniBannerTwo[0].text}
              btnStyle="intraLightBtn"
              btnMessage={dataPage.mainPage[0].miniBannerTwo[0].btn}
              btnLink = "https://discord.gg/GeMTVhSB"
            />
          </div>
          <div className="col-12 d-lg-block spacing hideCalendar">
          <MyCalendar/>
          </div>

          <div className="col-12" id="roadMap">
            <InfoBanner
              img={IconCalendar}
              imgspace = "imgSpace"
              bg="infoLightBg spacing"
              subtitle={dataPage.mainPage[0].roadMap[0].title}
              description={dataPage.mainPage[0].roadMap[0].description}
              timer="d-none"
              btnStyle="d-none"
              roadmap="roadMap"
            />
          </div>

          <div className="col-12">
            <InfoBanner
              img={Wallet}
              imgspace = "imgSpace"
              bg="infobgBn spacing"
              subtitle={dataPage.mainPage[0].sevenBanner[0].title}
              description={dataPage.mainPage[0].sevenBanner[0].description}
              btnMessage={dataPage.mainPage[0].sevenBanner[0].btn}
              timer="d-none"
              modal="#walletModal"
              idModal="walletModal"
              roadmap="d-none"
              btnStyle="intraBigDarkBtn"
            />
          </div>
        </div>
  );
}

export default Main;
