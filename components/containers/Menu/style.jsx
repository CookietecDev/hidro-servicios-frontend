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
  align-items: center;
  width: 100%;
`;

export const ContainerItems = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const ContainerWhatsapp = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const BtnWhatsapp = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #2f5597;
  color: #ffffff;
  height: 40px;
  width: 150px;
`;
