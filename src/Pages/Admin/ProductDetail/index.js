import { TextField, Typography } from "@mui/material";
import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  CustomContainedButton,
  CustomOutlinedButton,
} from "../../../Components/Button/CustomButton";
import { Container } from "../../../Components/Container";

function ProductDetail() {
  const [searchParams] = useSearchParams();
  let id = searchParams?.get("id");
  const navigate = useNavigate();

  return (
    <Container>
      <CustomOutlinedButton onClick={() => navigate(-1)}>
        Go back
      </CustomOutlinedButton>
      <div
        style={{
          width: "50%",
          padding: 2,
          marginLeft: "auto",
          marginRight: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: 20,
        }}
      >
        <Typography variant="h4">Add / Modify Product</Typography>
        <TextField
          label="Name"
          placeholder="Enter product name"
          size="small"
          type="text"
          InputLabelProps={{
            sx: { color: "primary.main" },
          }}
          sx={{ input: { color: "white" }, width: { xs: "90%", md: "70%" } }}
        />
        <TextField
          label="Price"
          placeholder="Enter price"
          size="small"
          type="text"
          InputLabelProps={{
            sx: { color: "primary.main" },
          }}
          sx={{ input: { color: "white" }, width: { xs: "90%", md: "70%" } }}
        />

        <TextField
          label="Discount Price"
          placeholder="Enter discount price"
          size="small"
          type="text"
          InputLabelProps={{
            sx: { color: "primary.main" },
          }}
          sx={{ input: { color: "white" }, width: { xs: "90%", md: "70%" } }}
        />

        <TextField
          label="Quantity"
          size="small"
          InputLabelProps={{
            sx: { color: "primary.main" },
          }}
          sx={{ input: { color: "white" }, width: { xs: "90%", md: "70%" } }}
        />

        <TextField
          label="Delivery Time"
          placeholder="Enter max days for delivery"
          multiline
          size="small"
          type="text"
          InputLabelProps={{
            sx: { color: "primary.main" },
          }}
          sx={{ input: { color: "white" }, width: { xs: "90%", md: "70%" } }}
        />

        <TextField
          label="Category"
          placeholder="Enter category of item"
          multiline
          size="small"
          type="text"
          InputLabelProps={{
            sx: { color: "primary.main" },
          }}
          sx={{ input: { color: "white" }, width: { xs: "90%", md: "70%" } }}
        />

        <TextField
          label="Description"
          placeholder="Enter description"
          multiline
          size="small"
          type="text"
          InputLabelProps={{
            sx: { color: "primary.main" },
          }}
          sx={{ input: { color: "white" }, width: { xs: "90%", md: "70%" } }}
        />

        <CustomContainedButton
        // onClick={() => handleSubmit()}
        >
          Submit
        </CustomContainedButton>
      </div>
    </Container>
  );
}

export default ProductDetail;
