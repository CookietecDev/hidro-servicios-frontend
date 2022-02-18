import Image from "next/image";
import React from "react";
import {
  Container,
  ContainerContact,
  ContainerImage,
  ImageContact,
  TextContact,
} from "./style";

const CardContact = () => {
  return (
    <Container>
      <TextContact>Contactanos</TextContact>
      <ContainerContact>
        <ContainerImage>
          <ImageContact src={"/images/logo_call.png"} />
          <TextContact>98754321</TextContact>
        </ContainerImage>
        <ContainerImage>
          <ImageContact src={"/images/logo_wsp_white.png"} />
          <TextContact>987654321</TextContact>
        </ContainerImage>
        <ContainerImage>
          <ImageContact src={"/images/logo_fb.png"} />
          <TextContact>nombre_fb</TextContact>
        </ContainerImage>
      </ContainerContact>
    </Container>
  );
};

export default CardContact;
