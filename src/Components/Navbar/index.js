import {
  Typography,
  AppBar,
  Box,
  Toolbar,
  Stack,
  Menu,
  MenuItem,
} from "@mui/material";
import React from "react";
import { useLocation, NavLink, useNavigate } from "react-router-dom";
import { CustomOutlinedButton, CustomTextButton } from "../Button/CustomButton";
import SearchModal from "../Search";

export default function Navbar({ loggedIn, setLoggedIn, user }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const location = useLocation();
  const navigate = useNavigate();
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

  const Logout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
    navigate("/");
  };

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
              {loggedIn ? (
                user && user.role === "ROLE_CUSTOMER" ? (
                  <>
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
                  </>
                ) : null
              ) : null}
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
              {!loggedIn ? (
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
              ) : (
                <>
                  <CustomOutlinedButton onClick={handleClick}>
                    Hi, {user.username}
                  </CustomOutlinedButton>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem
                      onClick={() => {
                        navigate("/my-account");
                        handleClose();
                      }}
                    >
                      My Account
                    </MenuItem>
                    {user && user.role === "ROLE_CUSTOMER" ? (
                      <MenuItem
                        onClick={() => {
                          navigate("/my-orders");
                          handleClose();
                        }}
                      >
                        My Orders
                      </MenuItem>
                    ) : null}
                    <MenuItem
                      onClick={() => {
                        handleClose();
                        Logout();
                      }}
                    >
                      Logout
                    </MenuItem>
                  </Menu>
                </>
              )}
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
