import React from "react";
import { Card, Text } from "./style";
import logo_mineria from "../../../assets/images/logo_mineria.png";
import Image from "next/image";
import Link from "next/link";
const CardCategory = ({ data }) => {
  return (
    <Link href="/categories">
      <Card>
        <Text>{data.title}</Text>
        <Image src={data.image} height={70} width={70} />
      </Card>
    </Link>
  );
};

export default CardCategory;
