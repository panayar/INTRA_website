import React, { Component } from "react";
import BigCard from "../Cards/BigCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Next from "../../assets/img/Next.png";
import Back from "../../assets/img/Back.png";
import "./Carousel.css";

export default class MyCarousel extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);

    this.fourCards = [
      {
        title: "CEO",
        subtitle: "Ben Dousen",
        textOne:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy tex ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived notonly five centuries.",
        textTwo:
          " But also the leap into electronic typesetting, remaining essentiallyunchanged",
      },
    ];
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    var settings = {
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,

      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 764,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
          },
        },
      ],
    };

    return (
      <div>
        <div className="row d-flex align-items-center">
          <div className="col-9 titleCarousel">
            <h3>Meet Our Teem</h3>
          </div>
          <div className="col-3 img">
            <img className="imgBack" alt={this.props.alt} onClick={this.previous} src={Back} />
            <img className="imgNext" alt={this.props.alt}  onClick={this.next} src={Next} />
          </div>
        </div>
        <div className="carousel">
          <Slider arrows={false} ref={(c) => (this.slider = c)} {...settings}>
            <BigCard
              title={this.fourCards[0].title + "1"}
              subtitle={this.fourCards[0].subtitle}
              textOne={this.fourCards[0].textOne}
              textTwo={this.fourCards[0].textTwo}
            />

            <BigCard
              title={this.fourCards[0].title + "2"}
              subtitle={this.fourCards[0].subtitle}
              textOne={this.fourCards[0].textOne}
              textTwo={this.fourCards[0].textTwo}
            />

            <BigCard
              title={this.fourCards[0].title + "3"}
              subtitle={this.fourCards[0].subtitle}
              textOne={this.fourCards[0].textOne}
              textTwo={this.fourCards[0].textTwo}
            />

            <BigCard
              title={this.fourCards[0].title + "4"}
              subtitle={this.fourCards[0].subtitle}
              textOne={this.fourCards[0].textOne}
              textTwo={this.fourCards[0].textTwo}
            />
            <BigCard
              title={this.fourCards[0].title + "5"}
              subtitle={this.fourCards[0].subtitle}
              textOne={this.fourCards[0].textOne}
              textTwo={this.fourCards[0].textTwo}
            />
            <BigCard
              title={this.fourCards[0].title + "6"}
              subtitle={this.fourCards[0].subtitle}
              textOne={this.fourCards[0].textOne}
              textTwo={this.fourCards[0].textTwo}
            />
          </Slider>
        </div>
      </div>
    );
  }
}
