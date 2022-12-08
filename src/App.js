import React from "react";
import { CustomerNavigation, ManagerNavigation } from "./Navigation";
import { ThemeProvider } from "@mui/material";
import darkTheme from "./Media/DarkTheme";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import AdminNavigation from "./Navigation/AdminNavigation";
import Register from "./Pages/Auth/Register";
import Login from "./Pages/Auth/Login";
import ResetPassword from "./Pages/Auth/ResetPassword";
import Homepage from "./Pages/Customer/Homepage";
import ProductDetailPage from "./Pages/Customer/ProductDetailPage";
import Footer from "./Components/Footer/Footer";
import { HomeContainer } from "./Components/Container";
import ScrollToTop from "./Utils/ScrollToTop";
import axios from "axios";

function App() {
  const [categories, setCategories] = React.useState([]);
  const [products, setProducts] = React.useState([]);
  const [loggedIn, setLoggedIn] = React.useState(
    localStorage.getItem("token") ? true : false
  );
  const [user, setUser] = React.useState({});

  React.useEffect(() => {
    if (localStorage.getItem("token")) {
      setLoggedIn(true);
    }
  }, [loggedIn]);

  React.useEffect(() => {
    // Get all the products
    const AllProducts = async () => {
      const repsonse = await axios.get(
        `${process.env.REACT_APP_ROOT_URL}/product/all`
      );
      setProducts(repsonse.data);
    };
    AllProducts();

    const getAllCategories = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_ROOT_URL}/product/categories`
      );
      setCategories(["ELECTRONICS"]);
    };
    getAllCategories();
  }, []);

  console.log(products);

  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Navbar
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
          user={user}
          setUser={setUser}
          products={products}
        />
        {!loggedIn ? (
          <>
            <HomeContainer>
              <ScrollToTop>
                <Routes>
                  <Route path="/reset-password" element={<ResetPassword />} />
                  <Route
                    path="/login"
                    element={
                      <Login
                        loggedIn={loggedIn}
                        setLoggedIn={setLoggedIn}
                        setUser={setUser}
                      />
                    }
                  />
                  <Route path="/register" element={<Register />} />
                  <Route
                    path="/"
                    element={
                      <Homepage products={products} categories={categories} />
                    }
                  />
                  <Route
                    path="/product"
                    element={<ProductDetailPage loggedIn={loggedIn} />}
                  />
                  <Route path="*" element={<Navigate to={"/login"} />} />
                </Routes>
              </ScrollToTop>
            </HomeContainer>
            <Footer />
          </>
        ) : user && user.role === "ROLE_ADMIN" ? (
          <AdminNavigation loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        ) : user && user.role === "ROLE_MANAGER" ? (
          <ManagerNavigation loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        ) : (
          <CustomerNavigation
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
            user={user}
            setUser={setUser}
            products={products}
            categories={categories}
          />
        )}
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
