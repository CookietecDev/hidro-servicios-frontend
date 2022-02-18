import styled from "styled-components";
import { styled as styledM } from "@mui/material/styles";
import { Grid } from "@mui/material";

export const ContainerFooter = styled.footer`
  background: #000000;
`;

export const Description = styled.p`
  color: #ffffff;
  text-align: center;
`;

export const ContainerContact = styled.div`
  display: flex;
  align-items: center;
  color: #ffffff;
  padding: 0px 10px;
`;

export const GridContainer = styledM(Grid)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const Subtitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #ffffff;
`;

export const ContainerLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Contaier = styled.div`
  background: ${(props) => props.theme.primary} !important;
`;
