import React, { useEffect } from "react";
import logo_services from "../../../assets/images/logo_services.png";
import Image from "next/image";
import {
  CardShadow,
  Container,
  ContainerCard,
  ContainerImage,
  Description,
  GridCard,
  GridContainer,
} from "./style";
import Aos from "aos";
import "aos/dist/aos.css";

const CardService = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Container>
      <ContainerCard data-aos="zoom-in">
        <ContainerImage>
          <Image src={logo_services} width={400} height={250} />
        </ContainerImage>
        <CardShadow />
      </ContainerCard>
      <Description data-aos="zoom-in">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in dui nec
        leo semper malesuada eu eu nibh. In hac habitasse platea dictumst. In a
        blandit elit, quis lacinia urna. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Duis in dui nec leo semper malesuada eu eu nibh. In hac
        habitasse platea dictumst. In a blandit elit, quis lacinia urna. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Duis in dui nec leo
        semper malesuada eu eu nibh. In hac habitasse platea dictumst. In a
        blandit elit, quis lacinia urna. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Duis in dui nec leo semper malesuada eu eu nibh. In hac
        habitasse platea dictumst. In a blandit elit, quis lacinia urna.
      </Description>
    </Container>
  );
};

export default CardService;
