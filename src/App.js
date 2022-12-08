import React from 'react';
import { CustomerNavigation, ManagerNavigation } from './Navigation';
import { ThemeProvider } from '@mui/material';
import darkTheme from './Media/DarkTheme';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar';
import AdminNavigation from './Navigation/AdminNavigation';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [user, setUser] = React.useState({});
  React.useEffect(() => {
		setLoggedIn(localStorage.getItem('loggedIn') === "1")
    if (localStorage.getItem('token')) {
      setLoggedIn(true);
    }
  }, [loggedIn]);
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} user={user} setUser={setUser} />
        {user && user.role === 'ROLE_ADMIN' ? (
          <AdminNavigation loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        ) : user && user.role === 'ROLE_MANAGER' ? (
          <ManagerNavigation loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        ) : (
          <CustomerNavigation
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
            user={user}
            setUser={setUser}
          />
        )}
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
