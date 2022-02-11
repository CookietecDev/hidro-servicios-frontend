import React from "react";
import { ButtonClose, ListItemMenu, ListOptions } from "./style";
import CloseIcon from "@mui/icons-material/Close";

const OptionMenu = ({ close }) => {
  return (
    <ListOptions>
      <ButtonClose onClick={close}>
        <CloseIcon />
      </ButtonClose>
      <ListItemMenu>Producto</ListItemMenu>
      <ListItemMenu>Nosotros</ListItemMenu>
      <ListItemMenu>Contactanos</ListItemMenu>
    </ListOptions>
  );
};

export default OptionMenu;
