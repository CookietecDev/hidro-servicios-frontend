import styled from "styled-components";
import { styled as styledM } from "@mui/material/styles";
import { Grid } from "@mui/material";

export const ContainerFooter = styled.footer`
  background: ${(props) => props.theme.text};
`;

export const Description = styled.p`
  color: ${(props) => props.theme.default};
  text-align: center;
`;

export const ContainerContact = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.default};
  padding: 0px 20px;
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
  color: ${(props) => props.theme.default};
`;

export const ContainerLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Contaier = styled.div`
  background: ${(props) => props.theme.primary} !important;
`;

export const Image = styled.img`
  margin-right: 10px;
`;
