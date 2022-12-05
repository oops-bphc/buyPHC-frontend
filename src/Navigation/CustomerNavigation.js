import { ThemeProvider } from "@mui/material";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeContainer } from "../Components/Container";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar";
import darkTheme from "../Media/DarkTheme";
import AccountPage from "../Pages/Customer/AccountPage/AccountPage";
import ResetPassword from "../Pages/Auth/ResetPassword";
import Login from "../Pages/Auth/Login";
import CartPage from "../Pages/Customer/CartPage";
import Homepage from "../Pages/Customer/Homepage";
import OrderHistoryPage from "../Pages/Customer/OrderHistoryPage";
import ProductDetailPage from "../Pages/Customer/ProductDetailPage";
import WalletPage from "../Pages/Customer/WalletPage";
import ScrollToTop from "../Utils/ScrollToTop";
import Register from "../Pages/Auth/Register";

function CustomerNavigation() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Navbar />
        <HomeContainer>
          <ScrollToTop>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/product" element={<ProductDetailPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/reset-password" element={<ResetPassword />} />
              <Route path="/wallet" element={<WalletPage />} />
              <Route path="/my-orders" element={<OrderHistoryPage />} />
              <Route path="/my-account" element={<AccountPage />} />
            </Routes>
          </ScrollToTop>
        </HomeContainer>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default CustomerNavigation;
