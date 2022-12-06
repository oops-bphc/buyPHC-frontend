import React from "react";
import { TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Edit } from "@mui/icons-material";
import {
  CustomOutlinedButton,
  CustomTextButton,
} from "../../../Components/Button/CustomButton";
import { Container } from "../../../Components/Container";

function AccountPage() {
  const [name, setName] = React.useState("Aarush Sinha");
  const [editable, setEditable] = React.useState(false);

  const navigate = useNavigate();
  return (
    <Container>
      <CustomOutlinedButton onClick={() => navigate(-1)}>
        Go back
      </CustomOutlinedButton>
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
            <Typography variant="body2">Username: </Typography>
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
              disabled={true}
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
        <CustomTextButton
          variant="body2"
          style={{ color: "red" }}
          onClick={() => navigate("/reset-password")}
        >
          Delete Account
        </CustomTextButton>
      </div>
    </Container>
  );
}

export default AccountPage;
