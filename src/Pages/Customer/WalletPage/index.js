import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { CustomContainedButton } from "../../../Components/Button/CustomButton";
import { Container } from "../../../Components/Container";

function WalletPage() {
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
          Your Wallet
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
          <Typography variant="h5" color="secondary">
            Balance: Rs. 2000
          </Typography>

          <Accordion sx={{ background: "black", color: "white", width: "50%" }}>
            <AccordionSummary
              expandIcon={<ExpandMore style={{ color: "white" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Add money</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Enter the amount of money you want to add to your wallet.
              </Typography>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                  gap: 20,
                }}
              >
                <TextField
                  id="gorgotPassword"
                  label="Enter Amount"
                  size="small"
                  inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                  InputLabelProps={{
                    sx: { color: "primary.main" },
                  }}
                  sx={{
                    input: { color: "white" },
                    margin: 2,
                  }}
                />

                <CustomContainedButton
                // onClick={() => handleSubmit()}
                >
                  Add
                </CustomContainedButton>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
        <Typography variant="body2" color="secondary">
          Recent Transactions
        </Typography>
      </div>
    </Container>
  );
}

export default WalletPage;
