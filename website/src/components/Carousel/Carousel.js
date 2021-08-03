import React from "react";
import BigCard from "../Cards/BigCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Next from "../../assets/img/Next.png";
import Back from "../../assets/img/Back.png";
import "./Carousel.css";

export default function Carousel(props) {
  let nextArrow = <img src={Next} />;
  let backArrow = <img src={Back} />;
  let settings = {
    infinite: false,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: nextArrow,
    prevArrow: backArrow,
  };
  if(window.screen.width < "980"){
    settings.slidesToShow = 2
  }
  if(window.screen.width < "600"){
    settings.slidesToShow = 1
  }
  
  nextArrow=settings.nextArrow;
  backArrow=settings.prevArrow;
  const [fourCards, setFourCards] = React.useState([
    {
      title: "CEO",
      subtitle: "Ben Dousen",
      textOne:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy tex ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived notonly five centuries.",
      textTwo:
        " But also the leap into electronic typesetting, remaining essentiallyunchanged",
    },
  ]);

  return (
    <div >
      <div className="row">
        <div className="col-6">
          <h3>Meet Our Teem</h3>
        </div>
        <div className="col-5" style={{ textAlign: "end" }}>
        {backArrow}

        </div>
        <div className="col-1" style={{ textAlign: "end" }}>
          {nextArrow}
        </div>
      </div>
      <div className="carousel" style={{ marginTop: "6%" }}>
        <Slider {...settings} id="sliderg" >
          <BigCard
            title={fourCards[0].title + "1"}
            subtitle={fourCards[0].subtitle}
            textOne={fourCards[0].textOne}
            textTwo={fourCards[0].textTwo}
          />

          <BigCard
            title={fourCards[0].title + "2"}
            subtitle={fourCards[0].subtitle}
            textOne={fourCards[0].textOne}
            textTwo={fourCards[0].textTwo}
          />

          <BigCard
            title={fourCards[0].title + "3"}
            subtitle={fourCards[0].subtitle}
            textOne={fourCards[0].textOne}
            textTwo={fourCards[0].textTwo}
          />

          <BigCard
            title={fourCards[0].title + "4"}
            subtitle={fourCards[0].subtitle}
            textOne={fourCards[0].textOne}
            textTwo={fourCards[0].textTwo}
          />
          <BigCard
            title={fourCards[0].title + "5"}
            subtitle={fourCards[0].subtitle}
            textOne={fourCards[0].textOne}
            textTwo={fourCards[0].textTwo}
          />
          <BigCard
            title={fourCards[0].title + "6"}
            subtitle={fourCards[0].subtitle}
            textOne={fourCards[0].textOne}
            textTwo={fourCards[0].textTwo}
          />
        </Slider>
      </div>
    </div>
  );
}
