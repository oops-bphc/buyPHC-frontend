import { Divider, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Container } from "../../../Components/Container";
import ItemCarousel from "../../../Components/ItemCarousel";
import { Add, Remove, SettingsRemoteSharp } from "@mui/icons-material";
import {
  CustomContainedButton,
  CustomIconButton,
} from "../../../Components/Button/CustomButton";
import { Stack } from "@mui/system";
import axios from "axios";

function ProductDetailPage({ loggedIn, data }) {
  const [searchParams] = useSearchParams();
  let id = searchParams?.get("id");
	const [productDetails, setProductDetails] = React.useState({});
  const navigate = useNavigate();
  const [qty, setQty] = React.useState(1);

	React.useEffect(() => {
		const fetchProductDetails = async () => {
			const params = new URLSearchParams([['product-id', id]]);
			const response = await axios.get(`${process.env.REACT_APP_ROOT_URL}/product`,
				{ params, headers: { Authorization: localStorage.getItem("token") } },
				);
			setProductDetails(response.data);
		};
		fetchProductDetails().catch(console.error);
	}, []);

  return (
    <>
      <Container>
        <Grid container spacing={2}>
          <Grid item md={1} />
          <Grid item md={4}>
            <img
              src={productDetails.image}
              alt=""
              style={{ width: "100%", borderRadius: 10, cursor: "zoom-in" }}
            />
          </Grid>
          <Grid item md={1} />
          <Grid item md={5}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
							{productDetails.name}
            </Typography>
            <Typography variant="h6" sx={{ textDecoration: "line-through" }}>
              Rs. {productDetails.price}
            </Typography>
            <Typography variant="h5" sx={{ color: "red" }}>
              Rs. {productDetails.offer}
            </Typography>
            <Typography variant="subtitle2">Only {productDetails.qtyAvailable} left in stock</Typography>
            <div style={{ marginTop: 30 }}>
              <Typography variant="subtitle1" sx={{ color: "gray" }}>
                Product Description
              </Typography>
              <Typography style={{ whiteSpace: "pre-line" }}>
								{productDetails.description}
              </Typography>
            </div>
            <div style={{ marginTop: 30 }}>
              <Typography variant="subtitle1" sx={{ color: "gray" }}>
                Delivery In
              </Typography>
              <Typography style={{ whiteSpace: "pre-line" }}>
                In {productDetails.deliveryTime} business days.
              </Typography>
            </div>
          </Grid>
          <Grid item md={1} />
          <Grid item md={12}>
            <div style={{ marginTop: 60, marginBottom: 20 }}>
              <Typography variant="h4">Similar Products</Typography>
              <ItemCarousel data={[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]} />
            </div>
          </Grid>
        </Grid>
      </Container>
      {loggedIn ? (
        <Stack
          direction={"row"}
          gap={2}
          style={{
            width: "100%",
            background: "black",
            height: 100,
            position: "sticky",
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
          <Typography>Select Quantity </Typography>
          <div>
            <CustomIconButton
              component="label"
              onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
            >
              <Remove />
            </CustomIconButton>
            <TextField
              InputLabelProps={{
                sx: { color: "white" },
              }}
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
              value={qty}
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
            <CustomIconButton component="label" onClick={() => setQty(qty + 1)}>
              <Add />
            </CustomIconButton>
          </div>
          <Divider orientation="vertical" />
          <div>
            <CustomContainedButton onClick={() => navigate("/cart")}>
              Add to Cart
            </CustomContainedButton>
          </div>
        </Stack>
      ) : null}
    </>
  );
}

export default ProductDetailPage;
