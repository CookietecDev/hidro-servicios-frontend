import React from "react";
import Slider from "react-slick";
import { Container, ContainerSlider } from "./style.";

const BannerRepresent = ({ data }) => {
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
            <img src={item.image} />
          </ContainerSlider>
        ))}
      </Slider>
    </Container>
  );
};

export default BannerRepresent;
