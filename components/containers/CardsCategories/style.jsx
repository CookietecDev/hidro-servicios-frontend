import styled from "styled-components";
import { styled as styledM } from "@mui/material/styles";
import { Grid } from "@mui/material";

export const Container = styled.div`
  padding: 20px 0px;
`;

export const GridCard = styledM(Grid)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
