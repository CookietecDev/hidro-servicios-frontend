import { Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import logo_pedrollo from "../../../assets/images/logo_pedrollo.png";
import logo_simiens from "../../../assets/images/logo_simiens.png";
import logo_hidrostal from "../../../assets/images/logo_hidrostal.png";
import logo_epsa from "../../../assets/images/logo_epsa.png";
import logo_pentax from "../../../assets/images/logo_pentax.png";
import logo_ebara from "../../../assets/images/logo_ebara.png";
import logo_delcrosa from "../../../assets/images/logo_delcrosa.png";
import logo_weg from "../../../assets/images/logo_weg.png";
import { Container, GridCard } from "./style";
import Title from "../../ui/Title";

const CardRepresentation = () => {
  return (
    <Container>
      <Title>Representaciones</Title>
      <Grid container spacing={3}>
        <GridCard item xs={12} sm={12} md={6} lg={4}>
          <Image width={250} src={logo_pedrollo} />
        </GridCard>
        <GridCard item xs={12} sm={12} md={6} lg={4}>
          <Image width={250} src={logo_simiens} />
        </GridCard>
        <GridCard item xs={12} sm={12} md={6} lg={4}>
          <Image width={250} src={logo_hidrostal} />
        </GridCard>
        <GridCard item xs={12} sm={12} md={6} lg={4}>
          <Image width={250} src={logo_epsa} />
        </GridCard>
        <GridCard item xs={12} sm={12} md={6} lg={4}>
          <Image width={250} src={logo_pentax} />
        </GridCard>
        <GridCard item xs={12} sm={12} md={6} lg={4}>
          <Image width={250} src={logo_ebara} />
        </GridCard>
        <GridCard item xs={12} sm={12} md={6} lg={4}>
          <Image width={250} src={logo_delcrosa} />
        </GridCard>
        <GridCard item xs={12} sm={12} md={6} lg={4}>
          <Image width={250} src={logo_weg} />
        </GridCard>
      </Grid>
    </Container>
  );
};

export default CardRepresentation;
