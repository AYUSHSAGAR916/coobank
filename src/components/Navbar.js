import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux'; // <-- IMPORT HOOKS
import { logout } from '../store/authSlice'; // <-- IMPORT ACTION

const Navbar = () => {
  const { isLoggedIn } = useSelector((state) => state.auth); // Check if logged in
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };
  
  const drawerWidth = 240;

  return (
    <AppBar position="fixed" sx={{ width: isLoggedIn ? `calc(100% - ${drawerWidth}px)` : '100%', ml: isLoggedIn ? `${drawerWidth}px` : 0 }}>
      <Toolbar>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          Co-operative Society Bank
        </Typography>
        {/* Only show logout button if the user is logged in */}
        {isLoggedIn && (
          <Button color="inherit" onClick={handleLogout}>Logout</Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;