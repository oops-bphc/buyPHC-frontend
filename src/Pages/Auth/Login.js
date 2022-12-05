import React from "react";
import {
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
// import { ReactComponent as AniliteLoader } from "../Media/AniliteLoader.svg";
import { Link } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { CustomContainedButton } from "../../Components/Button/CustomButton";
import { Container } from "../../Components/Container";

var getCookies = function () {
  const allCookies = document.cookie;
  console.log(allCookies);
};

function Login() {
  const [mail, setMail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [credentialError, setCredentialError] = React.useState(false);
  // const handleSubmit = async () => {
  //   try {
  //     await axios
  //       .post(
  //         "https://fab6-103-48-103-234.ngrok.io/user/login",
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
    password: password,
  };

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
        <Typography variant="h4" color="primary" sx={{ pt: 2 }}>
          LOGIN
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
          <TextField
            id="loginEmail"
            label="Email"
            size="small"
            type="text"
            InputLabelProps={{
              sx: { color: "primary.main" },
            }}
            sx={{ input: { color: "white" }, width: { xs: "90%", md: "70%" } }}
            onChange={(e) => setMail(e.target.value)}
          />
          <TextField
            id="loginPassword"
            label="Password"
            size="small"
            InputLabelProps={{
              sx: { color: "primary.main" },
            }}
            sx={{ input: { color: "white" }, width: { xs: "90%", md: "70%" } }}
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword((password) => !password)}
                    edge="end"
                    color="secondary"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            error={credentialError ? true : false}
            helperText={credentialError ? "Invalid Email/Password" : ""}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Typography
            variant="subtitle2"
            color="secondary"
            sx={{
              textAlign: "right",
              width: { xs: "90%", md: "70%" },
            }}
          >
            <Link to="/reset-password" style={{ color: "white" }}>
              Forgot Password?
            </Link>
          </Typography>
          <CustomContainedButton
            disabled={credentialError ? true : false}
            // onClick={() => handleSubmit()}
          >
            Submit
          </CustomContainedButton>
        </div>
        <Typography variant="body2" color="secondary">
          Don't have an account?
        </Typography>
        <Link to="/register">
          <Button variant="body2" sx={{ color: "primary.main" }}>
            Join Now
          </Button>
        </Link>
      </div>
    </Container>
  );
}

export default Login;
