import * as React from "react";
import Link from "next/link";
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
  Item,
} from "./style";
import OptionMenu from "../../elements/OptionMenu";

const AppBar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <>
      <MenuBar position="relative">
        <Hidden mdDown>
          <Container>
            <img src={"/images/logo_hidro.png"} />
            <ContainerItems>
              <Item>
                <TextItems>Producto</TextItems>
              </Item>
              <Item>
                <Link href="/nosotros">
                  <TextItems>Nosotros</TextItems>
                </Link>
              </Item>
              <Item>
                <Link href="/contactos">
                  <TextItems>Contacto</TextItems>
                </Link>
              </Item>
            </ContainerItems>
            <ContainerWhatsapp>
              <BtnWhatsapp>
                <img src={"/images/logo_wsp.svg"} />
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
      </MenuBar>
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
    </>
  );
};

export default AppBar;
