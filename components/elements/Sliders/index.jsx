import React from "react";
import Slider from "react-slick";
import { Container } from "./style";

const Sliders = () => {
  const settings = {
    dots: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };
  return (
    <Container>
      <Slider {...settings}>
        <div>
          <img src={"/images/img_solutions.png"} width="100%" />
        </div>
        <div>
          <img src={"/images/img_solutions.png"} width="100%" />
        </div>
      </Slider>
    </Container>
  );
};

export default Sliders;
