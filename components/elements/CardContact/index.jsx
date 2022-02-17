import Image from "next/image";
import React from "react";
import {
  Container,
  ContainerContact,
  ContainerImage,
  TextContact,
} from "./style";
import logo_call from "../../../assets/images/logo_call.png";
import logo_wsp_white from "../../../assets/images/logo_wsp_white.png";
import logo_fb from "../../../assets/images/logo_fb.png";

const CardContact = () => {
  return (
    <Container>
      <TextContact>Contactanos</TextContact>
      <ContainerContact>
        <ContainerImage>
          <Image src={logo_call} height={40} width={40} />
          <TextContact>98754321</TextContact>
        </ContainerImage>
        <ContainerImage>
          <Image src={logo_wsp_white} height={40} width={40} />
          <TextContact>987654321</TextContact>
        </ContainerImage>
        <ContainerImage>
          <Image src={logo_fb} height={40} width={40} />
          <TextContact>nombre_fb</TextContact>
        </ContainerImage>
      </ContainerContact>
    </Container>
  );
};

export default CardContact;
