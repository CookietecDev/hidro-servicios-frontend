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
      <ImageService src={item.image} width="100%" data-aos="zoom-in" />
      <ContainerCard data-aos="zoom-in">
        <TitleDescription>{item.name}</TitleDescription>
        <Description>{item.description}</Description>
        <ContainerMiniCard>
          {item.specs?.map((item, index) => (
            <MiniCard key={index}>{item}</MiniCard>
          ))}
        </ContainerMiniCard>
      </ContainerCard>
    </Container>
  );
};

export default CardService;
