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
import { useSearchParams } from "react-router-dom";
import { Container } from "../../../Components/Container";
import { Add, Delete, Remove } from "@mui/icons-material";
import {
  CustomContainedButton,
  CustomIconButton,
} from "../../../Components/Button/CustomButton";
import { Stack } from "@mui/system";

function CartPage() {
  const [searchParams] = useSearchParams();
  let id = searchParams?.get("id");

  return (
    <>
      <Container>
        <Grid container spacing={2}>
          <Grid item md={4} />
          <Grid item md={4}>
            <Stack gap={2}>
              {[1, 1, 1, 1, 1, 1].map((item, id) => (
                <Card
                  sx={{
                    display: "flex",
                    background: "#111111",
                    color: "white",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image="https://images.meesho.com/images/products/44009963/kxwus_512.jpg"
                    alt="Live from space album cover"
                  />
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <CardContent sx={{ flex: "1 0 auto" }}>
                      <Typography component="div" variant="h5">
                        Sexy Shoes
                      </Typography>
                      <Typography variant="subtitle1">Rs. 2000</Typography>
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
                          value={1}
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
                        >
                          <Add />
                        </CustomIconButton>
                        <CustomIconButton
                          aria-label="upload picture"
                          component="label"
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
        <Typography>Select Address </Typography>

        <Divider orientation="vertical" />
        <div>
          <CustomContainedButton>Place Order</CustomContainedButton>
        </div>
      </Stack>
    </>
  );
}

export default CartPage;
