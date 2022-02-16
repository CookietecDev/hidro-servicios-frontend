import React from "react";
import CardService from "../../elements/CardService";
import Title from "../../ui/Title";
import { Container } from "./style";

const CardsServices = () => {
  return (
    <Container>
      <Title>Servicios</Title>
      <CardService />
      <CardService />
      <CardService />
    </Container>
  );
};

export default CardsServices;
