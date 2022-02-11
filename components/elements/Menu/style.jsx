import { AppBar, IconButton } from "@mui/material";
import { styled as styledM } from "@mui/material/styles";
import styled from "styled-components";

export const MenuBar = styledM(AppBar)(() => ({
  backgroundColor: "#FFFFFF",
  color: "#000000",
}));

export const ContainerButton = styledM(IconButton)(() => ({
  position: "absolute",
  right: "1px",
}));

export const TextItems = styled.p`
  font-family: Red Hat Display;
  color: #2f5597;
  font-weight: bold;

  &:hover {
    cursor: pointer;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const ContainerItems = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  align-items: center;
`;

export const ContainerLogo = styled.div`
  width: 100%;
`;

export const Line = styled.div`
  width: 3px;
  height: 25px;
  background-color: #000000;
`;
