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

function CustomerNavigation({ loggedIn, setLoggedIn }) {
  const [products, setProducts] = React.useState([]);
  return (
    <>
      <HomeContainer>
        <ScrollToTop>
          {loggedIn ? (
            <Routes>
              <Route
                path="/"
                element={
                  <Homepage products={products} setProducts={setProducts} />
                }
              />
              <Route
                path="/product"
                element={<ProductDetailPage loggedIn={loggedIn} />}
              />
              <Route path="/reset-password" element={<ResetPassword />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/wallet" element={<WalletPage />} />
              <Route path="/my-orders" element={<OrderHistoryPage />} />
              <Route path="/my-account" element={<AccountPage />} />
              <Route
                path="/*"
                element={
                  <Homepage products={products} setProducts={setProducts} />
                }
              />
            </Routes>
          ) : (
            <Routes>
              <Route
                path="/"
                element={
                  <Homepage products={products} setProducts={setProducts} />
                }
              />
              <Route
                path="/product"
                element={<ProductDetailPage loggedIn={loggedIn} />}
              />
              <Route path="/reset-password" element={<ResetPassword />} />
              <Route
                path="/login"
                element={
                  <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
                }
              />
              <Route path="/register" element={<Register />} />
              <Route path="*" element={<Navigate to={"/login"} />} />
            </Routes>
          )}
        </ScrollToTop>
      </HomeContainer>
      <Footer />
    </>
  );
}

export default CustomerNavigation;
