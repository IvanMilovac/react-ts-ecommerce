import { FC, useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { stringSlicer } from "../utils";
import { ItemsContext } from "../context/ItemsContext";

import { CustomBadge, ButtonStyle } from "./Shop.styles";

interface IStateProps {
  item: ShopItem;
}

const ShopItem: FC<IStateProps> = ({ item }) => {
  const { dispatch } = useContext(ItemsContext);
  return (
    <Card>
      <CardContent sx={{ position: "relative", padding: 0 }}>
        <CardMedia
          component="img"
          height="220"
          width="100%"
          image={item?.image}
          alt={item?.title}
        />
        <CustomBadge>{item?.category}</CustomBadge>
        <Typography
          sx={{
            textAlign: "center",
            marginBottom: ".5rem",
            marginTop: "1.5rem",
          }}
          variant="h6"
          color="text.secondary"
        >
          {stringSlicer(item?.title, 20)}
        </Typography>
        <Typography
          sx={{ textAlign: "center", fontSize: "14px", marginBlock: ".5rem" }}
          color="text.secondary"
        >
          {stringSlicer(item?.description, 45)}
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: 600,
            marginTop: ".5rem",
            marginBottom: "1.5rem",
          }}
          color="text.secondary"
        >
          ${item?.price.toFixed(2)} / pc
        </Typography>
      </CardContent>
      <CardActions sx={{ padding: 0 }}>
        <ButtonStyle
          onClick={() => dispatch({ type: "ADD_TO_CART", payload: item })}
        >
          Add to cart
        </ButtonStyle>
      </CardActions>
    </Card>
  );
};

export default ShopItem;
