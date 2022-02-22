import Image from "next/image";
import React from "react";

const CardRepresentation = ({ data }) => {
  return <Image width={200} height={60} src={data.image} />;
};

export default CardRepresentation;
