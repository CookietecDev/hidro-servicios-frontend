import React from "react";
import Slider from "react-slick";
import { Contianer } from "./style";

const BannerHome = () => {
  const settings = {
    dots: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };
  return (
    <Contianer>
      <Slider {...settings}>
        <div>
          <img src={"/images/img_solutions.png"} width="100%" />
        </div>
        <div>
          <img src={"/images/img_solutions.png"} width="100%" />
        </div>
      </Slider>
    </Contianer>
  );
};

export default BannerHome;
