import { FC, useContext } from "react";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ItemsContext } from "../context/ItemsContext";
import CartItem from "./CartItem";

interface ISidebarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

type TotalPrice = (state: ShopItem[]) => number;

const Sidebar: FC<ISidebarProps> = ({ isOpen, setIsOpen }) => {
  const { state } = useContext(ItemsContext);

  const totalPrice: TotalPrice = (state) => {
    return state?.reduce((acc, curr) => (acc += curr?.amount * curr?.price), 0);
  };

  return (
    <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
      <Box
        component="div"
        sx={{
          px: 5,
          py: 2,
          minHeight: "100%",
          width: "100%",
          maxWidth: 500,
          background: "whitesmoke",
        }}
      >
        <Typography
          sx={{ fontSize: "1.5rem", fontWeight: "700", textAlign: "center" }}
        >
          Your cart{!state?.length && " is empty"}
        </Typography>
        {state?.map((item) => (
          <CartItem key={item?.id} item={item} />
        ))}
        {state?.length ? (
          <Typography
            variant="h5"
            sx={{
              display: "inline-block",
              width: "100%",
              fontWeight: "700",
              textAlign: "center",
              marginBlock: "1.25rem",
            }}
          >
            Total: ${totalPrice(state).toFixed(2)}
          </Typography>
        ) : null}
      </Box>
    </Drawer>
  );
};

export default Sidebar;
