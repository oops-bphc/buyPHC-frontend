import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "../../../Components/Container";
import { Add, Delete, Remove } from "@mui/icons-material";
import {
  CustomContainedButton,
  CustomIconButton,
} from "../../../Components/Button/CustomButton";
import { Stack } from "@mui/system";
import axios from "axios";

function CartPage({ user, setUser }) {
  const [cartItems, setCartItems] = React.useState([]);
  const [cartTotal, setCartTotal] = React.useState(0);
  const [wallet, setWallet] = React.useState(0);

  const navigate = useNavigate();

  const modifyCartItemQty = async (cartItem, qty) => {
    await axios.post(`${process.env.REACT_APP_ROOT_URL}/cart`, {
      customerId: user.id,
      productId: cartItem.product.id,
      qty: qty,
    });
    const response = await axios.get(
      `${process.env.REACT_APP_ROOT_URL}/customer`,
      { params: { "customer-id": user.id } }
    );
    console.log(response.data);
  };

  const placeOrder = async () => {
    await axios.put(
      `${process.env.REACT_APP_ROOT_URL}/cart/order?customer-id=${user.id}`
    );
    cartData();
  };

  const cartTotalAmount = async () => {
    const total = await axios.get(
      `${process.env.REACT_APP_ROOT_URL}/cart?customer-id=${user.id}`
    );
    setCartTotal(total.data);
  };

  const cartData = async () => {
    const userData = await axios.get(
      `${process.env.REACT_APP_ROOT_URL}/customer?customer-id=${user.id}`
    );
    console.log(userData);
    setCartItems(
      userData?.data?.cart?.filter(
        (cartItem) => cartItem !== null && cartItem.status === "IN_CART"
      )
    );
    setWallet(userData.data.wallet);
  };

  React.useEffect(() => {
    if (cartItems.length === 0) cartData();

    cartTotalAmount();
  }, []);

  return (
    <>
      <Container>
        <Grid container spacing={2}>
          <Grid item md={4} />
          <Grid item md={4}>
            <Stack gap={2}>
              {cartItems?.map((item) => (
                <Card
                  key={item.id}
                  sx={{
                    display: "flex",
                    background: "#111111",
                    color: "white",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image={item.product.image}
                    alt="Live from space album cover"
                  />
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <CardContent sx={{ flex: "1 0 auto" }}>
                      <Typography component="div" variant="h5">
                        {item.product.name}
                      </Typography>
                      <Typography variant="subtitle1">
                        Rs. {item.product.offer}
                      </Typography>
                    </CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        pl: 1,
                        pb: 1,
                      }}
                    >
                      <div>
                        <CustomIconButton
                          sx={{ color: "white", borderRadius: 999 }}
                          aria-label="upload picture"
                          component="label"
                          onClick={() => modifyCartItemQty(item, item.qty - 1)}
                        >
                          <Remove />
                        </CustomIconButton>
                        <TextField
                          InputLabelProps={{
                            sx: { color: "white" },
                          }}
                          inputProps={{
                            inputMode: "numeric",
                            pattern: "[0-9]*",
                          }}
                          value={item.qty}
                          sx={{
                            input: {
                              color: "white",
                              width: 50,
                              textAlign: "center",
                            },
                            marginLeft: 2,
                            marginRight: 2,
                          }}
                          variant="standard"
                        />
                        <CustomIconButton
                          sx={{ color: "white", borderRadius: 999 }}
                          aria-label="upload picture"
                          component="label"
                          onClick={() => modifyCartItemQty(item, item.qty + 1)}
                        >
                          <Add />
                        </CustomIconButton>
                        <CustomIconButton
                          aria-label="upload picture"
                          component="label"
                          onClick={() => modifyCartItemQty(item, 0)}
                        >
                          <Delete />
                        </CustomIconButton>
                      </div>
                    </Box>
                  </Box>
                </Card>
              ))}
            </Stack>
          </Grid>
          <Grid item md={4} />
        </Grid>
      </Container>
      <Stack
        direction={"row"}
        gap={2}
        style={{
          width: "100%",
          background: "black",
          height: 100,
          position: "absolute",
          bottom: 0,
          zIndex: 1000,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          padding: 20,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography>Address: {user?.address}</Typography>

        <Divider orientation="vertical" style={{ background: "white" }} />
        <Typography>Total Amount: {cartTotal}</Typography>
        <Divider orientation="vertical" style={{ background: "white" }} />
        <Typography>Wallet Balance: {wallet}</Typography>
        <div>
          <CustomContainedButton
            onClick={() =>
              wallet < cartTotal ? navigate("/wallet") : placeOrder()
            }
          >
            {wallet < cartTotal ? "Add money" : "Place Order"}
          </CustomContainedButton>
        </div>
      </Stack>
    </>
  );
}

export default CartPage;
