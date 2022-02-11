import styled from "styled-components";
import { styled as styledM } from "@mui/material/styles";
import { Grid } from "@mui/material";

export const CardShadow = styled.div`
  height: 250px;
  width: 400px;
  background-color: #a2c7e6;
  @media (max-width: 600px) {
    height: 125px;
    width: 200px;
  }
`;

export const ContainerCard = styled.div`
  position: relative;
  margin: 70px 50px;
`;

export const ContainerImage = styled.div`
  position: absolute;
  bottom: 30px;
  left: -35px;
  @media (max-width: 600px) {
    width: 200px;
  }
`;

export const Description = styled.p`
  font-size: 20px;
  width: 500px;

  @media (max-width: 1200px) {
    width: 320px;
  }

  @media (max-width: 600px) {
    width: 300px;
  }

  @media (max-width: 325px) {
    width: 200px;
  }
`;

export const GridCard = styledM(Grid)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const GridContainer = styledM(Grid)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
