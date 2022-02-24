import React from "react";
import BannerRepresent from "../../elements/BannerRepresent";
import Title from "../../ui/Title";
import { Container } from "./style";

const CardsRepresentations = ({ data }) => {
  return (
    <Container>
      <Title>Representaciones</Title>
      <BannerRepresent data={data} />
    </Container>
  );
};

export default CardsRepresentations;
