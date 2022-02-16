import React from "react";
import { Card, LinkTexT, Text } from "./style";
import logo_mineria from "../../../assets/images/logo_mineria.png";
import Image from "next/image";
import { Hidden } from "@mui/material";
const CardCategory = () => {
  return (
    <Card>
      <Text>Mineria</Text>
      <Image src={logo_mineria} height={70} width={70} />
      <Hidden mdDown>
        <LinkTexT>Ver mas</LinkTexT>
      </Hidden>
    </Card>
  );
};

export default CardCategory;
