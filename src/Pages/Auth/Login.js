import React from "react";
import {
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
// import { ReactComponent as AniliteLoader } from "../Media/AniliteLoader.svg";
import { Link, useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { CustomContainedButton } from "../../Components/Button/CustomButton";
import { Container } from "../../Components/Container";
import axios from "axios";

var getCookies = function () {
  const allCookies = document.cookie;
  console.log(allCookies);
};

function Login({ setLoggedIn, setUser }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [credentialError, setCredentialError] = React.useState(false);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    // var xhr = new XMLHttpRequest();
    // xhr.open("POST", `${process.env.REACT_APP_ROOT_URL}/token`);
    // xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    // xhr.send("Username=" + username, "Password=" + password);
    // xhr.onload = function () {
    //   let data = JSON.parse(xhr.responseText);
    //   console.log("Signed in as: ", data);
    // localStorage.setItem("SavedToken", "Bearer " + data.token);
    // setLoggedIn(true);
    // };
    localStorage.setItem(
      "token",
      "eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJzZWxmIiwic3ViIjoiY29nbnVzYm9pIiwiZXhwIjoxNjcwMzI2MDkwLCJpYXQiOjE2NzAzMjI0OTAsInNjb3BlIjoiUk9MRV9BRE1JTiJ9.ZFTS8uLNpk3bPmReeH_LIEtrVma1HxOFPjTKmP2rU_2fPGXWDE79__j1b8a8rcQoYWTZUMEVdKBV4mLyJiXqWHPdd7Zqw1IYN2lbUOoPdTszQvNsxWqWHdrp2Djud83KziUpo13VHnQKd5tgCGHyCCkYAKvPn7DZaK59Kk9lG2ur2ynRazWBAGCq3NFrM-R9Lru5yDXIz5N3QKZjGL55xqDPvQZtWynGscTVWwFakx4oE4lUKreDTxRT9IgsD4BnxD4fPojwSYH798v2FSib9oz5A9IyCvG8jJ8t-05-jUCBv4ISoNYGg5Dm1i5BKg83z5u-_2wbroIrNeHtzaH4qA"
    );
		const response = await axios.get(
			`${process.env.REACT_APP_ROOT_URL}/user`,
			{ params: { email, password }, 
				headers: { Authorization: localStorage.getItem("token") } 
			},
		);
		setUser(response.data);
    setLoggedIn(true);
    navigate("/");
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
            onChange={(e) => setEmail(e.target.value)}
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
            onClick={() => handleSubmit()}
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
