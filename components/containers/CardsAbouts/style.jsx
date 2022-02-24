import styled from "styled-components";
import { styled as styledM } from "@mui/material/styles";
import { Grid } from "@mui/material";

export const Container = styled.div`
  padding: 20px 40px;
`;

export const GridCard = styledM(Grid)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const ContainerDirectory = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 0px 40px;
`;

export const TitleJob = styled.p`
  font-weight: bold;
  font-size: 20px;
`;
