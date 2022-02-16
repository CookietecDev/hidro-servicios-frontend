import { styled as styledM } from "@mui/material/styles";
import { Grid } from "@mui/material";
import styled from "styled-components";
export const GridCard = styledM(Grid)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const Container = styled.div`
  margin: 40px 40px;
`;
