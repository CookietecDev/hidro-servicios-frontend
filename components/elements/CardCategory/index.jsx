import React from "react";
import { Card, LinkTexT, Text } from "./style";
import logo_mineria from "../../../assets/images/logo_mineria.png";
import Image from "next/image";
import "animate.css";

const CardCategory = () => {
  return (
    <Card className="animate__animated animate__bounceInLeft">
      <Text>Mineria</Text>
      <Image src={logo_mineria} height={70} width={70} />
      <LinkTexT>Ver mas</LinkTexT>
    </Card>
  );
};

export default CardCategory;
