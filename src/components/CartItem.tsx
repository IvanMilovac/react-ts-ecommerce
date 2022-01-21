import { FC, useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import CardMedia from "@mui/material/CardMedia";
import { stringSlicer } from "../utils";
import { ItemsContext } from "../context/ItemsContext";

interface ICartItemProps {
  item: ShopItem;
}

const CartItem: FC<ICartItemProps> = ({ item }) => {
  const { dispatch } = useContext(ItemsContext);

  return (
    <Card sx={{ padding: "0.5rem", marginBottom: "1rem" }}>
      <CardContent sx={{ position: "relative", padding: 0 }}>
        <CardMedia
          component="img"
          height="250"
          image={item?.image}
          alt={item?.title}
        />
        <Typography sx={{ fontWeight: "700", textAlign: "center" }}>
          {stringSlicer(item?.title, 15)}
        </Typography>
        <Typography sx={{ textAlign: "center" }}>
          Price: ${item?.price.toFixed(2)}
        </Typography>
      </CardContent>
      <CardActions>
        <ButtonGroup
          variant="contained"
          sx={{ width: "100%", display: "flex", fontSize: "1rem" }}
        >
          <Button
            onClick={() =>
              dispatch({ type: "REMOVE_FROM_CART", payload: item })
            }
          >
            -
          </Button>
          <Typography
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {item?.amount}
          </Typography>
          <Button
            onClick={() => dispatch({ type: "ADD_TO_CART", payload: item })}
          >
            +
          </Button>
        </ButtonGroup>
      </CardActions>
    </Card>
  );
};

export default CartItem;
