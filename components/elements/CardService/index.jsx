import React from "react";
import logo_services from "../../../assets/images/logo_services.png";
import Image from "next/image";
import {
  CardShadow,
  ContainerCard,
  ContainerImage,
  Description,
  GridCard,
  GridContainer,
} from "./style";

const CardService = () => {
  return (
    <>
      <GridContainer container spacing={3}>
        <GridCard item md={6}>
          <ContainerCard>
            <ContainerImage>
              <Image src={logo_services} width={400} height={250} />
            </ContainerImage>
            <CardShadow />
          </ContainerCard>
        </GridCard>
        <GridCard item md={6}>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in dui
            nec leo semper malesuada eu eu nibh. In hac habitasse platea
            dictumst. In a blandit elit, quis lacinia urna. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Duis in dui nec leo semper
            malesuada eu eu nibh. In hac habitasse platea dictumst. In a blandit
            elit, quis lacinia urna. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Duis in dui nec leo semper malesuada eu eu nibh. In
            hac habitasse platea dictumst. In a blandit elit, quis lacinia urna.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in dui
            nec leo semper malesuada eu eu nibh. In hac habitasse platea
            dictumst. In a blandit elit, quis lacinia urna.
          </Description>
        </GridCard>
      </GridContainer>

      <GridContainer container>
        <GridCard item md={6}>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in dui
            nec leo semper malesuada eu eu nibh. In hac habitasse platea
            dictumst. In a blandit elit, quis lacinia urna. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Duis in dui nec leo semper
            malesuada eu eu nibh. In hac habitasse platea dictumst. In a blandit
            elit, quis lacinia urna. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Duis in dui nec leo semper malesuada eu eu nibh. In
            hac habitasse platea dictumst. In a blandit elit, quis lacinia urna.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in dui
            nec leo semper malesuada eu eu nibh. In hac habitasse platea
            dictumst. In a blandit elit, quis lacinia urna.
          </Description>
        </GridCard>
        <GridCard item md={6}>
          <ContainerCard>
            <ContainerImage>
              <Image src={logo_services} width={400} height={250} />
            </ContainerImage>
            <CardShadow />
          </ContainerCard>
        </GridCard>
      </GridContainer>

      <GridContainer container>
        <GridCard item md={6}>
          <ContainerCard>
            <ContainerImage>
              <Image src={logo_services} width={400} height={250} />
            </ContainerImage>
            <CardShadow />
          </ContainerCard>
        </GridCard>
        <GridCard item md={6}>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in dui
            nec leo semper malesuada eu eu nibh. In hac habitasse platea
            dictumst. In a blandit elit, quis lacinia urna. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Duis in dui nec leo semper
            malesuada eu eu nibh. In hac habitasse platea dictumst. In a blandit
            elit, quis lacinia urna. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Duis in dui nec leo semper malesuada eu eu nibh. In
            hac habitasse platea dictumst. In a blandit elit, quis lacinia urna.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in dui
            nec leo semper malesuada eu eu nibh. In hac habitasse platea
            dictumst. In a blandit elit, quis lacinia urna.
          </Description>
        </GridCard>
      </GridContainer>
    </>
  );
};

export default CardService;
