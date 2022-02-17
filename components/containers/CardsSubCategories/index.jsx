import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import CardSubCategory from "../../elements/CardSubCategory";
import Title from "../../ui/Title";
import { Container, GridCard } from "./style";
import Aos from "aos";
import "aos/dist/aos.css";
const CardsSubCategories = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Container>
      <Title>Mineria</Title>
      <Grid container>
        <GridCard
          item
          md={3}
          sm={6}
          xs={12}
          data-aos="fade-down"
          data-aos-duration="500"
        >
          <CardSubCategory />
        </GridCard>
        <GridCard
          item
          md={3}
          sm={6}
          xs={12}
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <CardSubCategory />
        </GridCard>
        <GridCard
          item
          md={3}
          sm={6}
          xs={12}
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          <CardSubCategory />
        </GridCard>
        <GridCard
          item
          md={3}
          sm={6}
          xs={12}
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          <CardSubCategory />
        </GridCard>
        <GridCard
          item
          md={3}
          sm={6}
          xs={12}
          data-aos="fade-down"
          data-aos-duration="500"
        >
          <CardSubCategory />
        </GridCard>
        <GridCard
          item
          md={3}
          sm={6}
          xs={12}
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <CardSubCategory />
        </GridCard>
        <GridCard
          item
          md={3}
          sm={6}
          xs={12}
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          <CardSubCategory />
        </GridCard>
        <GridCard
          item
          md={3}
          sm={6}
          xs={12}
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          <CardSubCategory />
        </GridCard>
      </Grid>
    </Container>
  );
};

export default CardsSubCategories;
