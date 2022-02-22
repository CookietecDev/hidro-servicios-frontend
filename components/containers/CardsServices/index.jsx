import React from "react";
import CardService from "../../elements/CardService";
import Title from "../../ui/Title";
import { Container } from "./style";

const CardsServices = ({ data }) => {
  return (
    <>
      <Title>Servicios</Title>
      <Container>
        {data.map((item, index) => (
          <CardService key={index} {...item} />
        ))}
      </Container>
    </>
  );
};

export default CardsServices;
