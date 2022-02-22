import React from "react";
import Slider from "react-slick";
import { Contianer } from "./style";

const BannerHome = ({ data }) => {
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
        {data.map((item, index) => (
          <div key={index}>
            <img src={item.image} width="100%" />
          </div>
        ))}
      </Slider>
    </Contianer>
  );
};

export default BannerHome;
