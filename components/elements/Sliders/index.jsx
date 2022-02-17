import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import img_solutions from "../../../assets/images/img_solutions.png";
import { Container } from "./style";

const Sliders = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Container>
      <Slider {...settings}>
        <div>
          <Image src={img_solutions} />
        </div>
        <div>
          <Image src={img_solutions} />
        </div>
      </Slider>
    </Container>
  );
};

export default Sliders;
