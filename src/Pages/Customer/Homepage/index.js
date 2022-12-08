import { Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import HomePageCarousel from "../../../Components/HomepageCarousel";
import ItemCarousel from "../../../Components/ItemCarousel";

function Homepage({ products, categories }) {
  const capitalize = (s) => {
    const lower = s.toLowerCase();
    return s.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    <>
      <HomePageCarousel />
      <div style={{ padding: 20 }}>
        <div>
          <Typography variant="h4" pb={2}>
            New Arrivals
          </Typography>
          <ItemCarousel data={products} />
        </div>
        {categories.map((category) => (
          <div style={{ marginTop: 30 }} key={category}>
            <Typography variant="h4" pb={2}>
              Top {capitalize(category)}
            </Typography>
            <ItemCarousel
              data={products.filter((product) => product.category === category)}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Homepage;
