import Image from "next/image";
import React from "react";
import {
  ContainerFooter,
  ContainerContact,
  Description,
  GridContainer,
} from "./style";
import logo_hidro from "../../../assets/images/logo_hidro.svg";
import logo_contact from "../../../assets/images/logo_contact.png";
import { Grid } from "@mui/material";

const Footer = () => {
  return (
    <ContainerFooter>
      <GridContainer container spacing={3}>
        <Grid item md={6}>
          <Image src={logo_hidro} height={50} width={200} />
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in dui
            nec leo semper malesuada eu eu nibh. In hac habitasse platea
            dictumst. In a blandit elit, quis lacinia urna.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in dui
            nec leo semper malesuada eu eu nibh. In hac habitasse platea
            dictumst. In a blandit elit, quis lacinia urna.
          </Description>
        </Grid>
        <Grid item md={6}>
          <ContainerContact>
            <Image src={logo_contact} height={25} width={25} />
            <p>Avenida las flores 456 - paradero 6</p>
          </ContainerContact>
          <ContainerContact>
            <Image src={logo_contact} height={25} width={25} />
            <p>Avenida las flores 456 - paradero 6</p>
          </ContainerContact>
          <ContainerContact>
            <Image src={logo_contact} height={25} width={25} />
            <p>Avenida las flores 456 - paradero 6</p>
          </ContainerContact>
          <ContainerContact>
            <Image src={logo_contact} height={25} width={25} />
            <p>Avenida las flores 456 - paradero 6</p>
          </ContainerContact>
        </Grid>
      </GridContainer>
    </ContainerFooter>
  );
};

export default Footer;
