import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import CardCategory from "../../elements/CardCategory";
import Title from "../../ui/Title";
import { Container, GridCard } from "./style";
import Aos from "aos";
import "aos/dist/aos.css";
import { data } from "./data";
const CardsCategories = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Container>
      <Title>Categorias</Title>
      <Grid container>
        {data.map((data) => (
          <GridCard
            item
            md={3}
            sm={6}
            xs={12}
            data-aos="fade-down"
            data-aos-duration="500"
            key={data.id}
          >
            <CardCategory data={data} />
          </GridCard>
        ))}
      </Grid>
    </Container>
  );
};

export default CardsCategories;
