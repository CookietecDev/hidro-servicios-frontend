import React from "react";
import { Line, Text } from "./style";

const Title = ({ children }) => {
  return (
    <>
      <Text>{children}</Text>
      <Line />
    </>
  );
};

export default Title;
