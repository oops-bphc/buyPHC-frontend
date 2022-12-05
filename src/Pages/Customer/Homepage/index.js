import { Typography } from "@mui/material";
import React from "react";
import HomePageCarousel from "../../../Components/HomepageCarousel";
import ItemCarousel from "../../../Components/ItemCarousel";

function Homepage() {
  return (
    <>
      <HomePageCarousel />
      <div style={{ padding: 20 }}>
        <div>
          <Typography variant="h4" pb={2}>
            New Arrivals
          </Typography>
          <ItemCarousel data={[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]} />
        </div>
        <div style={{ marginTop: 30 }}>
          <Typography variant="h4" pb={2}>
            Top Fashion
          </Typography>
          <ItemCarousel data={[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]} />
        </div>
        <div style={{ marginTop: 30 }}>
          <Typography variant="h4" pb={2}>
            Top Electronics
          </Typography>
          <ItemCarousel data={[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]} />
        </div>
      </div>
    </>
  );
}

export default Homepage;
