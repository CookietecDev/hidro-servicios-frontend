import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import CardCategory from "../../elements/CardCategory";
import Title from "../../ui/Title";
import { Container, GridCard } from "./style";

import { data } from "./data";

const CardsCategories = () => {
  return (
    <>
      <Title>Categorias</Title>
      <Container>
        <Grid container>
          {data.map((item, index) => (
            <GridCard
              item
              md={3}
              sm={6}
              xs={12}
              data-aos="fade-down"
              data-aos-duration="500"
              key={index}
            >
              <CardCategory {...item} />
            </GridCard>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default CardsCategories;
