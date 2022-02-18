import { IconButton, List, ListItem } from "@mui/material";
import { styled as styledM } from "@mui/material/styles";
export const ListOptions = styledM(List)(() => ({
  height: "100vh",
  position: "relative",
}));

export const ListItemMenu = styledM(ListItem)(() => ({
  color: "#2f5597",
  fontWeight: "bold",

  "&:hover": {
    cursor: "pointer",
  },
}));

export const ButtonClose = styledM(IconButton)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginLeft: "auto",
  marginBottom: "10px",
  marginRight: "10px",
}));
