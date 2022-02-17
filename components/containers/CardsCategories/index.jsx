import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import CardCategory from "../../elements/CardCategory";
import Title from "../../ui/Title";
import { Container, GridCard } from "./style";
import Aos from "aos";
import "aos/dist/aos.css";
const CardsCategories = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Container>
      <Title>Categorias</Title>
      <Grid container>
        <GridCard item md={3} sm={6} xs={12} data-aos="fade-right">
          <CardCategory />
        </GridCard>
        <GridCard item md={3} sm={6} xs={12} data-aos="fade-right">
          <CardCategory />
        </GridCard>
        <GridCard item md={3} sm={6} xs={12} data-aos="fade-right">
          <CardCategory />
        </GridCard>
        <GridCard item md={3} sm={6} xs={12} data-aos="fade-right">
          <CardCategory />
        </GridCard>
        <GridCard item md={3} sm={6} xs={12} data-aos="fade-left">
          <CardCategory />
        </GridCard>
        <GridCard item md={3} sm={6} xs={12} data-aos="fade-left">
          <CardCategory />
        </GridCard>
        <GridCard item md={3} sm={6} xs={12} data-aos="fade-left">
          <CardCategory />
        </GridCard>
        <GridCard item md={3} sm={6} xs={12} data-aos="fade-left">
          <CardCategory />
        </GridCard>
      </Grid>
    </Container>
  );
};

export default CardsCategories;
