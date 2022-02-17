import React from "react";
import { Container, Text } from "./style";

const Title = ({ children }) => {
  return (
    <Container>
      <Text>{children}</Text>
    </Container>
  );
};

export default Title;
