import React from "react";
import { Card, Text } from "./style";
import Link from "next/link";

const CardCategory = ({ ...item }) => {
  return (
    <Link href="/categories">
      <Card>
        <Text>{item.name}</Text>
        <img src={item.image} height={70} width={70} />
      </Card>
    </Link>
  );
};

export default CardCategory;
