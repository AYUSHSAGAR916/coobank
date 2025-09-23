import React from 'react';
import { Box } from '@mui/material';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const DashboardLayout = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar />
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: '64px' }}>
        <h2>Welcome to the Dashboard</h2>
        <p>Page content will be displayed here.</p>
      </Box>
    </Box>
  );
};

export default DashboardLayout;