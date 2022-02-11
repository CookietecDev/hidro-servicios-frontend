import styled from "styled-components";
import { styled as styledM } from "@mui/material/styles";
import { Grid } from "@mui/material";

export const ContainerFooter = styled.div`
  width: 100%;
  height: 100%;
  background-color: #35393a;
  padding: 50px 0px 0px 50px;
  @media (max-width: 900px) {
    padding: 10px 0px 0px 10px;
  }
`;

export const Description = styled.p`
  color: #b0b0b0;
  width: 400px;
  @media (max-width: 900px) {
    width: 300px;
  }

  @media (max-width: 600px) {
    width: 200px;
  }
`;

export const ContainerContact = styled.div`
  display: flex;
  align-items: center;
  color: #b0b0b0;
`;

export const GridContainer = styledM(Grid)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
