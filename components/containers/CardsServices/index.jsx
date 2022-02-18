import React from "react";
import CardService from "../../elements/CardService";
import Title from "../../ui/Title";
import { Container } from "./style";
import { data } from "./data";

const CardsServices = () => {
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
