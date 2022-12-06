import { Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import HomePageCarousel from "../../../Components/HomepageCarousel";
import ItemCarousel from "../../../Components/ItemCarousel";

function Homepage() {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    const AllProducts = async () => {
      const data = await axios.get(
        `${process.env.REACT_APP_ROOT_URL}/product/all`,
        {
          headers: { Authorization: localStorage.getItem("token") },
        }
      );
      console.log(data);
      setProducts(data.data);
      // var xhr = new XMLHttpRequest();
      // xhr.open("GET", `${process.env.REACT_APP_ROOT_URL}/product/all`);
      // xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      // // xhr.send("Username=" + username, "Password=" + password);
      // xhr.onload = function () {
      //   let data = JSON.parse(xhr.responseText);
      //   console.log("Signed in as: ", data);
      //   // localStorage.setItem("SavedToken", "Bearer " + data.token);
      //   // setLoggedIn(true);
      // };
    };
    AllProducts();
  }, []);

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
