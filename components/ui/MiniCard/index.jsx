import React from "react";
import { Container, Text } from "./style";

const MiniCard = ({ children }) => {
  return (
    <Container>
      <Text>{children}</Text>
    </Container>
  );
};

export default MiniCard;
