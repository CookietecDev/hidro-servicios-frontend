import { Grid } from "@mui/material";
import React from "react";
import CardRepresentation from "../../elements/CardRepresentation";
import Title from "../../ui/Title";
import { data } from "./data";
import { Container, GridCard } from "./style";

const CardsRepresentations = () => {
  return (
    <Container>
      <Title>Representaciones</Title>
      <Grid container spacing={5}>
        {data.map((data) => (
          <GridCard key={data.id} item xs={12} sm={12} md={6} lg={4}>
            <CardRepresentation data={data} />
          </GridCard>
        ))}
      </Grid>
    </Container>
  );
};

export default CardsRepresentations;
