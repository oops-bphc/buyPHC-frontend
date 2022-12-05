import React from "react";
import { Button, TextField, Typography } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { CustomContainedButton } from "../../Components/Button/CustomButton";
import axios from "axios";
import { Link } from "react-router-dom";
import { Container } from "../../Components/Container";

var getCookies = function () {
  const allCookies = document.cookie;
  console.log(allCookies);
};

function ResetPassword() {
  const [mail, setMail] = React.useState("");
  const [credentialError, setCredentialError] = React.useState(false);
  // const handleSubmit = async () => {
  //   try {
  //     await axios
  //       .post(
  //         "https://fab6-103-48-103-234.ngrok.io/user/ForgotPassword",
  //         {
  //           email: mail,
  //           password: password,
  //         },
  //         {
  //           credentials: "include",
  //         }
  //       )
  //       .then((res) => console.log(res));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const newEntry = {
    email: mail,
  };
  const handleSubmit = async () => {
    try {
      await fetch("https://dcbb-103-48-103-234.ngrok.io/user/ForgotPassword", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newEntry),
        credentials: "include",
      }).then((res) => res.json().then((data) => console.log(data)));
    } catch (error) {
      console.log(error);
    }
  };

  const handleUser = async () => {
    try {
      await fetch("https://dcbb-103-48-103-234.ngrok.io/user", {
        method: "GET",
        credentials: "include",
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch("https://dcbb-103-48-103-234.ngrok.io/user/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      }).then((res) => res.json().then((data) => console.log(data)));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <div
        className="registerWrapper"
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
        <Typography variant="h4" color="primary" sx={{ pt: 2 }}>
          RESET PASSWORD
        </Typography>
        <div
          style={{
            width: "100%",
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
          {/* <Typography
            variant="subtitle1"
            color="secondary"
            sx={{ textAlign: "center" }}
          >
            Enter your mail linked to your BuyPHC account and we will send
            further instructions on how to reset your password there.
          </Typography> */}
          <TextField
            id="gorgotPassword"
            label="Email"
            size="small"
            InputLabelProps={{
              sx: { color: "primary.main" },
            }}
            sx={{ input: { color: "white" }, width: { xs: "90%", md: "70%" } }}
            error={credentialError ? true : false}
            helperText={
              credentialError
                ? "No account linked with this email found. Please create a new account."
                : ""
            }
            onChange={(e) => setMail(e.target.value)}
          />

          <TextField
            id="gorgotPassword"
            label="New Password"
            size="small"
            InputLabelProps={{
              sx: { color: "primary.main" },
            }}
            sx={{ input: { color: "white" }, width: { xs: "90%", md: "70%" } }}
            error={credentialError ? true : false}
          />

          <CustomContainedButton disabled={credentialError ? true : false}>
            Submit
          </CustomContainedButton>
        </div>
      </div>
    </Container>
  );
}

export default ResetPassword;
