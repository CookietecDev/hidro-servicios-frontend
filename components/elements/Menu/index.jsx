import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import { Hidden } from "@mui/material";
import {
  TextItems,
  MenuBar,
  Container,
  ContainerItems,
  ContainerLogo,
  ContainerButton,
  Line,
} from "./style";

const Menu = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <MenuBar position="relative">
        <Toolbar>
          <Hidden mdDown>
            <Container>
              <ContainerLogo>
                <TextItems>Logo</TextItems>
              </ContainerLogo>
              <ContainerItems>
                <TextItems>Producto</TextItems>
                <Line />
                <TextItems>Nosotros</TextItems>
                <Line />
                <TextItems>Contactos</TextItems>
              </ContainerItems>
            </Container>
          </Hidden>
          <Hidden mdUp>
            <ContainerButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </ContainerButton>
          </Hidden>
        </Toolbar>
      </MenuBar>
    </Box>
  );
};

export default Menu;
