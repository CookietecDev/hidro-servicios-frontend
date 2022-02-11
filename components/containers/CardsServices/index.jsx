import { Grid } from "@mui/material";
import React from "react";
import CardService from "../../elements/CardService";
import Title from "../../ui/Title";
import { Container } from "./style";

const CardsServices = () => {
  return (
    <Container>
      <Title>Servicios</Title>
      <CardService />
    </Container>
  );
};

export default CardsServices;
