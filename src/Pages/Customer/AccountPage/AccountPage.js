import React from "react";
import {
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
// import { ReactComponent as AniliteLoader } from "../Media/AniliteLoader.svg";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Edit, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  CustomContainedButton,
  CustomTextButton,
} from "../../../Components/Button/CustomButton";
import { Container } from "../../../Components/Container";

var getCookies = function () {
  const allCookies = document.cookie;
  console.log(allCookies);
};

function AccountPage() {
  const [name, setName] = React.useState("Aarush Sinha");
  const [editable, setEditable] = React.useState(false);

  const navigate = useNavigate();
  return (
    <Container>
      <div
        className="loginWrapper"
        style={{
          width: "50%",
          marginLeft: "auto",
          marginRight: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: 20,
        }}
      >
        <Typography variant="h4" color="primary">
          Tell me about myself!
        </Typography>

        <CustomTextButton
          style={{ marginLeft: "auto", marginRight: "10%" }}
          onClick={() => setEditable(true)}
        >
          Edit
          <Edit />
        </CustomTextButton>
        <div
          style={{
            width: "80%",
            padding: 2,
            marginLeft: "auto",
            marginRight: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: 20,
            border: "0.7px solid white",
            borderRadius: 20,
            padding: 20,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
              width: "100%",
            }}
          >
            <Typography variant="body2">Name: </Typography>
            <TextField
              id="loginEmail"
              size="small"
              type="text"
              value={name}
              disabled={!editable}
              InputLabelProps={{
                sx: { color: "primary.main" },
              }}
              sx={{
                input: { color: "white" },
                width: "50%",
              }}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
              width: "100%",
            }}
          >
            <Typography variant="body2">Email: </Typography>
            <TextField
              size="small"
              type="text"
              value={"sinhaaarush11@gmail.com"}
              InputLabelProps={{
                sx: { color: "primary.main" },
              }}
              sx={{
                input: { color: "white" },
                width: "50%",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
              width: "100%",
            }}
          >
            <Typography variant="body2">Name: </Typography>
            <TextField
              id="loginEmail"
              size="small"
              type="text"
              value={"Aarush Sinha"}
              InputLabelProps={{
                sx: { color: "primary.main" },
              }}
              sx={{
                input: { color: "white" },
                width: "50%",
              }}
            />
          </div>
        </div>

        <CustomTextButton
          disabled={!editable}
          variant="body2"
          sx={{ color: "primary.main" }}
        >
          Save
        </CustomTextButton>
        <CustomTextButton
          variant="body2"
          color="secondary"
          onClick={() => navigate("/reset-password")}
        >
          Change Password
        </CustomTextButton>
      </div>
    </Container>
  );
}

export default AccountPage;
