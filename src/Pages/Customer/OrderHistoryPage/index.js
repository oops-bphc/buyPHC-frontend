import { Grid, Typography } from "@mui/material";
import React from "react";
import { Container } from "../../../Components/Container";
import Masonry from "react-masonry-css";
import "./styles.css";
import HoverCard from "../../../Components/HoverCard";
import axios from "axios";

function OrderHistoryPage({ user }) {
  const [currentOrders, setCurrentOrders] = React.useState([]);

  const breakpointColumnsObj = {
    default: 4,
  };

  React.useEffect(() => {
    const orders = async () => {
      const order = await axios.get(
        `${process.env.REACT_APP_ROOT_URL}/customer?customer-id=${user.id}`
      );
      setCurrentOrders(
        order?.data?.cart?.filter(
          (cartItem) => cartItem !== null && cartItem.status === "ORDERED"
        )
      );
    };
    if (currentOrders.length === 0) orders();
  }, [currentOrders]);

  console.log(currentOrders);

  return (
    <>
      <Container>
        <Grid container spacing={2}>
          <Grid item md={2} />
          <Grid item md={8}>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Current Orders
            </Typography>
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {currentOrders?.map((item, id) => (
                <HoverCard key={id} item={item} type={"current"} />
              ))}
            </Masonry>

            <Typography variant="h5" sx={{ mb: 2 }}>
              Past Orders
            </Typography>
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {[1, 1, 1, 1, 1, 1].map((item, id) => (
                <HoverCard key={id} item={item} type={"old"} />
              ))}
            </Masonry>
          </Grid>
          <Grid item md={2} />
        </Grid>
      </Container>
    </>
  );
}

export default OrderHistoryPage;
