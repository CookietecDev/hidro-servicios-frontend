import { Grid } from "@mui/material";
import React from "react";
import CardCategory from "../../elements/CardCategory";
import Title from "../../ui/Title";
import { Container, GridCard } from "./style";

const CardsCategories = () => {
  return (
    <Container>
      <Title>Categorias</Title>
      <Grid container>
        <GridCard item md={3} sm={6} xs={12}>
          <CardCategory />
        </GridCard>
        <GridCard item md={3} sm={6} xs={12}>
          <CardCategory />
        </GridCard>
        <GridCard item md={3} sm={6} xs={12}>
          <CardCategory />
        </GridCard>
        <GridCard item md={3} sm={6} xs={12}>
          <CardCategory />
        </GridCard>
        <GridCard item md={3} sm={6} xs={12}>
          <CardCategory />
        </GridCard>
        <GridCard item md={3} sm={6} xs={12}>
          <CardCategory />
        </GridCard>
        <GridCard item md={3} sm={6} xs={12}>
          <CardCategory />
        </GridCard>
        <GridCard item md={3} sm={6} xs={12}>
          <CardCategory />
        </GridCard>
      </Grid>
    </Container>
  );
};

export default CardsCategories;
