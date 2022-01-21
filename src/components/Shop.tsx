import { FC } from "react";
import { useQuery } from "react-query";
import Grid from "@mui/material/Grid";
import LinearProgress from "@mui/material/LinearProgress";
import Alert from "@mui/material/Alert";
import { v4 as uuidv4 } from "uuid";
import ShopItem from "./ShopItem";

const Shop: FC = () => {
  const fetchData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data.map((item: ShopItem) => ({ ...item, id: uuidv4(), amount: 0 }));
  };

  const { isLoading, error, data } = useQuery("productData", fetchData);

  if (isLoading) return <LinearProgress color="primary" />;

  if (error)
    <Alert severity="error" color="info">
      Error during data fetching!
    </Alert>;

  return (
    <>
      <Grid
        sx={{
          padding: "1rem",
          backgroundColor: "whitesmoke",
          minHeight: "100vh",
        }}
        container
        spacing={2}
      >
        {data?.map((dataItem: ShopItem) => (
          <Grid key={dataItem?.title} item xs={12} sm={6} md={4} lg={3}>
            <ShopItem item={dataItem} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Shop;
