import Image from "next/image";
import React from "react";
import {
  ContainerFooter,
  ContainerContact,
  Description,
  GridContainer,
  Subtitle,
  ContainerLogo,
  Contaier,
} from "./style";
import logo_footer from "../../../assets/images/logo_footer.png";
import logo_gps from "../../../assets/images/logo_gps.png";
import logo_phone from "../../../assets/images/logo_phone.png";
import logo_email from "../../../assets/images/logo_email.png";
import logo_cookietec from "../../../assets/images/logo_cookietec.png";
import { Grid } from "@mui/material";

const Footer = () => {
  return (
    <ContainerFooter>
      <GridContainer container spacing={4}>
        <Grid item md={4}>
          <ContainerLogo>
            <Image src={logo_footer} />
            <Description>Todos los derechos reservados &copy;2022</Description>
          </ContainerLogo>
        </Grid>
        <Grid item md={4}>
          <ContainerContact>
            <Image src={logo_gps} />
            <p>Lima sede central, portada del sol 722 - Lima 354</p>
          </ContainerContact>
          <ContainerContact>
            <Image src={logo_phone} />
            <p>01-7654321</p>
          </ContainerContact>
          <ContainerContact>
            <Image src={logo_email} />
            <p>correo@correo.com</p>
          </ContainerContact>
        </Grid>
        <Grid item md={4}>
          <Subtitle>Desarrollador por</Subtitle>
          <Image src={logo_cookietec} />
        </Grid>
      </GridContainer>
    </ContainerFooter>
  );
};

export default Footer;
