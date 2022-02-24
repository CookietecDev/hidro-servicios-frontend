import React from "react";
import CardAbout from "../../elements/CardAbout";
import Title from "../../ui/Title";
import { data, directorio } from "./data";
import { Container, ContainerDirectory, TitleJob } from "./style";

const CardsAbouts = () => {
  return (
    <>
      <Title>Nuestra Empresa</Title>
      <Container>
        {data.map((item, index) => (
          <CardAbout key={index} {...item} />
        ))}
      </Container>
      <Title>Directorio</Title>
      <ContainerDirectory>
        {directorio.map((item, index) => (
          <div key={index}>
            <TitleJob>{item.job}</TitleJob>
            <p>{item.name}</p>
            <p>{item.email}</p>
            <p>{item.phone}</p>
          </div>
        ))}
      </ContainerDirectory>
    </>
  );
};

export default CardsAbouts;
