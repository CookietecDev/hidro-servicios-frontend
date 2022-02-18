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

const CardService = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Container>
      <ImageService
        src={"/images/logo_services.png"}
        width="100%"
        data-aos="zoom-in"
      />
      <ContainerCard data-aos="zoom-in">
        <TitleDescription>Instalaciones</TitleDescription>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in dui
          nec leo semper malesuada eu eu nibh. In hac habitasse platea dictumst.
          In a blandit elit, quis lacinia urna.
        </Description>
        <ContainerMiniCard>
          <MiniCard>Bombas domesticas</MiniCard>
          <MiniCard>Equipo hidroneumatico</MiniCard>
          <MiniCard>Equipo de presion constante</MiniCard>
          <MiniCard>Tableros electricos</MiniCard>
          <MiniCard>Equipo de presion constante</MiniCard>
        </ContainerMiniCard>
      </ContainerCard>
    </Container>
  );
};

export default CardService;
