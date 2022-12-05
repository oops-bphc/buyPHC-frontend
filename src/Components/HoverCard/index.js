import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { CustomOutlinedButton } from "../Button/CustomButton";
import "./styles.css";

function HoverCard({ item, type }) {
  const [hoverState, setHoverState] = React.useState(false);
  return (
    <Card
      sx={{
        color: "white",
      }}
      raised
      onMouseEnter={() => setHoverState(true)}
      onMouseLeave={() => setHoverState(false)}
    >
      <CardMedia
        component="img"
        sx={{ width: "100%" }}
        image="https://images.meesho.com/images/products/44009963/kxwus_512.jpg"
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          transitionDuration: "0.3s",
          background: hoverState ? "#111111" : "#333333",
        }}
      >
        <CardContent
          sx={{
            flex: "1 0 auto",
            root: {
              backgroundColor: "#111111",
            },
          }}
        >
          <Typography component="div" variant="h6">
            Sexy Shoes
          </Typography>

          {type === "old" ? null : (
            <Typography variant="subtitle2">Delivery by 01-01-23</Typography>
          )}
        </CardContent>
      </Box>
      <Accordion
        expanded={hoverState}
        sx={{ background: "black", color: "white", width: "100%" }}
      >
        <AccordionSummary>
          <Typography variant="body2">Hover for details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="subtitle1">Rs. 2000</Typography>
          {type === "current" ? null : (
            <Typography variant="subtitle2">Delivered on 01-01-23</Typography>
          )}
          {type === "old" ? null : (
            <CustomOutlinedButton aria-label="upload picture" component="label">
              Cancel Order
            </CustomOutlinedButton>
          )}
        </AccordionDetails>
      </Accordion>
    </Card>
  );
}

export default HoverCard;
