import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./css/global.css";
import Nav from "./components/Navs/Nav";
import Banner from "./components/banners/Banner";
import BannerText from "./components/banners/BannerText";
import InfoBanner from "./components/banners/InfoBanner";
import Footer from "./components/footers/Footer";
import Mouse from "./assets/img/mouse.svg";

function App() {
  return (
    <div>
      <Nav />

      <div className="container">
        <Banner bg="bg spacing" />
        <InfoBanner
          title="Join The Presale"
          img={Mouse}
          bg="infoLightBg spacing"
          description="Take part in our quest to support and get early acces"
          btnStyle="d-none"
          timer="d-none"
        />
        <InfoBanner
          subtitle="Presale started Jul 06, 2021 01:00 EST - End on May 14, 2021 - 13:00 EST"
          bg="infoImgBg spacing"
          btnStyle="intraDarkBtn"
          btnMessage="Suscribe"
        />
        <BannerText
          bg="infoLightBg spacing "
          title="About Our Currency"
          description="The INTRA token is the native token of our platform developed in the
           Binance Smart Chain network, through it, holders will be able to play
           our VideoGames and receive rewards for completing missions, earn
           profits with the use of stacking pool and farming, use it as a means of
           payment to exchange NFTs, trade cryptos in our Swap."
        />
      <Footer  bg="infoLightBg" />
      </div>
    </div>
  );
}

export default App;
