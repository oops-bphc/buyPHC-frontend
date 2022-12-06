import { Divider, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Container } from "../../../Components/Container";
import ItemCarousel from "../../../Components/ItemCarousel";
import { Add, Remove } from "@mui/icons-material";
import {
  CustomContainedButton,
  CustomIconButton,
} from "../../../Components/Button/CustomButton";
import { Stack } from "@mui/system";

function ProductDetailPage({ loggedIn }) {
  const [searchParams] = useSearchParams();
  let id = searchParams?.get("id");
  const navigate = useNavigate();
  const [qty, setQty] = React.useState(1);

  return (
    <>
      <Container>
        <Grid container spacing={2}>
          <Grid item md={1} />
          <Grid item md={4}>
            <img
              src="https://images.meesho.com/images/products/44009963/kxwus_512.jpg"
              alt=""
              style={{ width: "100%", borderRadius: 10, cursor: "zoom-in" }}
            />
          </Grid>
          <Grid item md={1} />
          <Grid item md={5}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
              SHOES
            </Typography>
            <Typography variant="h6" sx={{ textDecoration: "line-through" }}>
              Rs. 2300
            </Typography>
            <Typography variant="h5" sx={{ color: "red" }}>
              Rs. 2000
            </Typography>
            <Typography variant="subtitle2">Only 7 left in stock</Typography>
            <div style={{ marginTop: 30 }}>
              <Typography variant="subtitle1" sx={{ color: "gray" }}>
                Product Descrition
              </Typography>
              <Typography style={{ whiteSpace: "pre-line" }}>
                Amzing Product by this company! {"\n"} Sole: Rubber {"\n"}
                Closure: Pull On{"\n"} Shoe Width: Medium {"\n"}Style
                Name:-Sneaker {"\n"}
                Model Name:-Puma Knit Slip On IDP{"\n"} Material Type:-Mesh and
                Rubber {"\n"}Fastening Type:-Slip-On{"\n"} Wipe with a clean dry
                cloth
              </Typography>
            </div>
            <div style={{ marginTop: 30 }}>
              <Typography variant="subtitle1" sx={{ color: "gray" }}>
                Delivery In
              </Typography>
              <Typography style={{ whiteSpace: "pre-line" }}>
                In 7 business days.
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
