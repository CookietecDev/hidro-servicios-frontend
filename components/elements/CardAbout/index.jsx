import React, { useEffect } from "react";
import {
  Container,
  ContainerCard,
  Description,
  ImageService,
  TitleDescription,
} from "./style";
import Aos from "aos";
import "aos/dist/aos.css";

const CardAbout = ({ ...item }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Container>
      <ImageService src={item.image} width="100%" data-aos="zoom-in" />
      <ContainerCard data-aos="zoom-in">
        <TitleDescription>{item.name}</TitleDescription>
        <Description>{item.description}</Description>
      </ContainerCard>
    </Container>
  );
};

export default CardAbout;
