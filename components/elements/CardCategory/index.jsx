import React from "react";
import { Card, LinkTexT, Text } from "./style";
import logo_mineria from "../../../assets/images/logo_mineria.png";
import Image from "next/image";
const CardCategory = () => {
  return (
    <Card>
      <Text>Mineria</Text>
      <Image src={logo_mineria} height={70} width={70} />
      <LinkTexT>Ver mas</LinkTexT>
    </Card>
  );
};

export default CardCategory;
