import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { HomeContainer } from "../Components/Container";
import Footer from "../Components/Footer/Footer";
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

function CustomerNavigation({
  loggedIn,
  setLoggedIn,
  user,
  setUser,
  products,
  categories,
}) {
  return (
    <>
      <HomeContainer>
        <ScrollToTop>
          <Routes>
            <Route
              path="/"
              element={<Homepage products={products} categories={categories} />}
            />
            <Route
              path="/product"
              element={
                <ProductDetailPage
                  loggedIn={loggedIn}
                  user={user}
                  setUser={setUser}
                  products={products}
                />
              }
            />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route
              path="/cart"
              element={<CartPage user={user} setUser={setUser} />}
            />
            <Route
              path="/wallet"
              element={<WalletPage user={user} setUser={setUser} />}
            />
            <Route
              path="/my-orders"
              element={<OrderHistoryPage user={user} />}
            />
            <Route
              path="/my-account"
              element={<AccountPage user={user} setUser={setUser} />}
            />
            <Route
              path="/*"
              element={<Homepage products={products} categories={categories} />}
            />
          </Routes>
        </ScrollToTop>
      </HomeContainer>
      <Footer />
    </>
  );
}

export default CustomerNavigation;
