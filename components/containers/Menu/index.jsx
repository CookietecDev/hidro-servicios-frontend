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
  ContainerWhatsapp,
  ContainerButton,
  Line,
  DrawerMenu,
  BtnWhatsapp,
} from "./style";
import OptionMenu from "../../elements/OptionMenu";
import logo_hidro from "../../../assets/images/logo_hidro.svg";
import logo_wsp from "../../../assets/images/logo_wsp.svg";
import Image from "next/image";

const Menu = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <MenuBar position="relative">
        <Toolbar>
          <Hidden mdDown>
            <Container>
              <ContainerItems>
                <Image src={logo_hidro} />
                <TextItems>Producto</TextItems>
                <TextItems>Nosotros</TextItems>
                <TextItems>Contactos</TextItems>
              </ContainerItems>
              <ContainerWhatsapp>
                <BtnWhatsapp>
                  <Image src={logo_wsp} />
                  <p>Contactanos</p>
                </BtnWhatsapp>
              </ContainerWhatsapp>
            </Container>
          </Hidden>
          <Hidden mdUp>
            <ContainerButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </ContainerButton>
          </Hidden>
        </Toolbar>
      </MenuBar>
      <Box component="nav">
        <DrawerMenu
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          anchor="right"
        >
          <OptionMenu onClick={handleDrawerToggle} close={handleDrawerToggle} />
        </DrawerMenu>
      </Box>
    </Box>
  );
};

export default Menu;
