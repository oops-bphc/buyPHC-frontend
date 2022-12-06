import React from "react";
import { CustomerNavigation, ManagerNavigation } from "./Navigation";
import { ThemeProvider } from "@mui/material";
import darkTheme from "./Media/DarkTheme";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";
import AdminNavigation from "./Navigation/AdminNavigation";

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [user, setUser] = React.useState("customer");
  React.useEffect(() => {
    if (localStorage.getItem("token")) {
      setLoggedIn(true);
    }
  }, [loggedIn]);
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} user={user} />
        {user === "customer" ? (
          <CustomerNavigation loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        ) : user === "manager" ? (
          <ManagerNavigation loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        ) : (
          <AdminNavigation loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        )}
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
