import React, { useEffect } from "react";
import logo_services from "../../../assets/images/logo_services.png";
import Image from "next/image";
import {
  Container,
  ContainerCard,
  ContainerMiniCard,
  Description,
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
      <div>
        <Image
          src={logo_services}
          width={450}
          height={300}
          data-aos="zoom-in"
        />
      </div>
      <ContainerCard data-aos="zoom-in">
        <TitleDescription>Instalaciones</TitleDescription>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in dui
          nec leo semper malesuada eu eu nibh. In hac habitasse platea dictumst.
          In a blandit elit, quis lacinia urna.
        </Description>
        <ContainerMiniCard>
          <MiniCard>Equipos contra incendios</MiniCard>
          <MiniCard>Bombas domesticas</MiniCard>
          <MiniCard>Equipo hidroneumatico</MiniCard>
          <MiniCard>Equipo de presion constante</MiniCard>
          <MiniCard>Tableros electricos</MiniCard>
        </ContainerMiniCard>
      </ContainerCard>
    </Container>
  );
};

export default CardService;
