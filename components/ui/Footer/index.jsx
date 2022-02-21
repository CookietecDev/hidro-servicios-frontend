import React from "react";
import {
  ContainerFooter,
  ContainerContact,
  Description,
  GridContainer,
  Subtitle,
  ContainerLogo,
  Contaier,
  Image,
} from "./style";
import { Grid } from "@mui/material";

const Footer = () => {
  return (
    <ContainerFooter>
      <GridContainer container spacing={4}>
        <Grid item md={4}>
          <ContainerLogo>
            <img src="/images/logo_footer.png" />
            <Description>Todos los derechos reservados &copy;2022</Description>
          </ContainerLogo>
        </Grid>
        <Grid item md={4}>
          <ContainerContact>
            <Image src="/images/logo_gps.png" />
            <p>Lima sede central, portada del sol 722 - Lima 354</p>
          </ContainerContact>
          <ContainerContact>
            <Image src="/images/logo_phone.png" />
            <p>01-7654321</p>
          </ContainerContact>
          <ContainerContact>
            <Image src="/images/logo_email.png" />
            <p>correo@correo.com</p>
          </ContainerContact>
        </Grid>
        <Grid item md={4}>
          <Subtitle>Desarrollador por</Subtitle>
          <img src="/images/logo_cookietec.png" />
        </Grid>
      </GridContainer>
    </ContainerFooter>
  );
};

export default Footer;
