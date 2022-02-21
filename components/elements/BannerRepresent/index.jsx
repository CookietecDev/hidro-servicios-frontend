import React from "react";
import Slider from "react-slick";
import { data } from "./data";
import { Container, ContainerSlider } from "./style.";

const BannerRepresent = ({ ...item }) => {
  const settings = {
    dots: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container>
      <Slider {...settings}>
        {data.map((item, index) => (
          <ContainerSlider key={index}>
            <img src={item.src} />
          </ContainerSlider>
        ))}
      </Slider>
    </Container>
  );
};

export default BannerRepresent;
