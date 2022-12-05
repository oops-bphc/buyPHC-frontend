import { Typography, AppBar, Box, Toolbar, Stack } from "@mui/material";
import React from "react";
import { useLocation, NavLink } from "react-router-dom";
import { CustomOutlinedButton, CustomTextButton } from "../Button/CustomButton";
import SearchModal from "../Search";

export default function Navbar() {
  const location = useLocation();

  const [navbarOpacity, setNavbarOpacity] = React.useState(0);
  const listenScrollEvent = () => {
    if (window.scrollY > window.innerHeight / 2) {
      let opacity =
        ((window.scrollY - window.innerHeight / 2) / window.innerHeight) * 2;
      setNavbarOpacity(opacity);
    } else {
      setNavbarOpacity(0);
    }
  };

  React.useEffect(() => {
    if (location.pathname === "/" || location.pathname.includes("/anime/")) {
      setNavbarOpacity(0);
      window.addEventListener("scroll", listenScrollEvent);
      return () => window.removeEventListener("scroll", listenScrollEvent);
    } else {
      setNavbarOpacity(1);
    }
  }, [location.pathname]);

  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: "none", lg: "block" } }}>
        <AppBar
          position="fixed"
          sx={{
            background: `rgba(0,0,0,${navbarOpacity})`,
            height: 48,
            justifyContent: "center",
          }}
        >
          <Toolbar>
            <Stack direction="row" spacing={0.25}>
              <NavLink
                style={({ isActive }) => {
                  return {
                    background: isActive ? "rgba(139, 92, 246, 1)" : "",
                    borderRadius: 3,
                  };
                }}
                to="/"
              >
                <CustomTextButton>Home</CustomTextButton>
              </NavLink>
              <NavLink
                style={({ isActive }) => {
                  return {
                    background: isActive ? "rgba(139, 92, 246, 1)" : "",
                    borderRadius: 3,
                  };
                }}
                to="/cart"
              >
                <CustomTextButton>Cart</CustomTextButton>
              </NavLink>
              <NavLink
                style={({ isActive }) => {
                  return {
                    background: isActive ? "rgba(139, 92, 246, 1)" : "",
                    borderRadius: 3,
                  };
                }}
                to="/wallet"
              >
                <CustomTextButton>Wallet</CustomTextButton>
              </NavLink>
            </Stack>
            <div
              style={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                cursor: "pointer",
              }}
            >
              <Typography variant="h4" color="secondary">
                BuyPHC
              </Typography>
            </div>
            <Stack
              direction={"row"}
              gap={2}
              sx={{ marginLeft: "auto", marginRight: 0, alignItems: "center" }}
            >
              <SearchModal />
              <NavLink
                style={({ isActive }) => {
                  return {
                    background: isActive ? "rgba(139, 92, 246, 1)" : "",
                    borderRadius: 3,
                  };
                }}
                to="/login"
              >
                <CustomOutlinedButton>Login</CustomOutlinedButton>
              </NavLink>
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
