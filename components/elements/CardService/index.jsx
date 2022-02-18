import React, { useEffect } from "react";
import {
  Container,
  ContainerCard,
  ContainerMiniCard,
  Description,
  ImageService,
  TitleDescription,
} from "./style";
import Aos from "aos";
import "aos/dist/aos.css";
import MiniCard from "../../ui/MiniCard";

const CardService = ({ ...item }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Container>
      <ImageService src={item.src} width="100%" data-aos="zoom-in" />
      <ContainerCard data-aos="zoom-in">
        <TitleDescription>{item.title}</TitleDescription>
        <Description>{item.description}</Description>
        <ContainerMiniCard>
          <MiniCard>{item.item1}</MiniCard>
          <MiniCard>{item.item2}</MiniCard>
          <MiniCard>{item.item3}</MiniCard>
          <MiniCard>{item.item4}</MiniCard>
          <MiniCard>{item.item5}</MiniCard>
        </ContainerMiniCard>
      </ContainerCard>
    </Container>
  );
};

export default CardService;
