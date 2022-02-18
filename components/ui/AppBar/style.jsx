import { AppBar, Drawer, IconButton } from "@mui/material";
import { styled as styledM } from "@mui/material/styles";
import styled from "styled-components";

export const MenuBar = styledM(AppBar)(() => ({
  backgroundColor: "#FFFFFF",
  color: "#000000",
  padding: "1px 40px",
  height: "70px",
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
  color: ${(props) => props.theme.primary};
  font-weight: bold;
  margin: 0px 30px;
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
  height: 70px;
`;

export const Item = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  border-top: 0px solid ${(props) => props.theme.primary};
  transition: all 0.1s ease-out;
  &:hover {
    cursor: pointer;
    border-top: 2px solid ${(props) => props.theme.primary};
  }
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
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.default};
  height: 40px;
  width: 150px;
  cursor: pointer;
`;
