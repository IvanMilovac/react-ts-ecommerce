import { FC, useContext } from "react";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { ItemsContext } from "../context/ItemsContext";

interface INavbar {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: FC<INavbar> = ({ setIsOpen }) => {
  const { state } = useContext(ItemsContext);

  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography
          variant="h4"
          component="div"
          sx={{ flexGrow: 1, display: "inline-block" }}
        >
          ECom
        </Typography>
        <Badge badgeContent={state?.length}>
          <ShoppingCartIcon
            color="inherit"
            sx={{ cursor: "pointer" }}
            onClick={() => setIsOpen(true)}
          />
        </Badge>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
