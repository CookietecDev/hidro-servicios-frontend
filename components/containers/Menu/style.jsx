import { AppBar, Drawer, IconButton } from "@mui/material";
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

export const DrawerMenu = styledM(Drawer)(() => ({
  width: 240,
  margin: 0,
  "& .MuiDrawer-paper": {
    boxSizing: "border-box",
    width: 240,
  },
}));

export const TextItems = styled.p`
  color: #2f5597;
  font-weight: bold;
  margin: 0px 30px;

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
