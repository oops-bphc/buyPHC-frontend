import { ThemeProvider } from "@mui/material";
import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { HomeContainer } from "../Components/Container";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar";
import darkTheme from "../Media/DarkTheme";
import Login from "../Pages/Auth/Login";
import ResetPassword from "../Pages/Auth/ResetPassword";
import AccountPage from "../Pages/Admin/AccountPage/AccountPage";
import Dashboard from "../Pages/Admin/Dashboard";
import ProductDetail from "../Pages/Admin/ProductDetail";
import ScrollToTop from "../Utils/ScrollToTop";

function AdminNavigation({ loggedIn, setLoggedIn }) {
  return (
    <>
      <HomeContainer>
        <ScrollToTop>
          {loggedIn ? (
            <Routes>
              <Route path="/dash" element={<Dashboard />} />
              <Route path="/my-account" element={<AccountPage />} />
              <Route path="*" element={<Navigate to={"/dash"} />} />
              <Route path="/product" element={<ProductDetail />} />
            </Routes>
          ) : (
            <Routes>
              <Route
                path="/login"
                element={
                  <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
                }
              />
              <Route path="/reset-password" element={<ResetPassword />} />
              <Route path="*" element={<Navigate to={"/login"} />} />
            </Routes>
          )}
        </ScrollToTop>
      </HomeContainer>
      <Footer />
    </>
  );
}

export default AdminNavigation;
