import React from "react";
import { Card, Text } from "./style";
import logo_bomba from "../../../assets/images/logo_bomba.png";
import Image from "next/image";
const CardSubCategory = () => {
  return (
    <Card>
      <Image src={logo_bomba} height={100} width={150} />
      <Text>Bomba Centrífuga</Text>
    </Card>
  );
};

export default CardSubCategory;
