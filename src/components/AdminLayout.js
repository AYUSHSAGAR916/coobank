import React from 'react';
import { Box } from '@mui/material';
import Navbar from './Navbar';
import AdminSidebar from './AdminSidebar';
import AdminDashboardPage from '../pages/AdminDashboardPage';

const AdminLayout = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar />
      <AdminSidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: '64px' }}>
        {/* For now, we only have one admin page. We can add routing here later. */}
        <AdminDashboardPage />
      </Box>
    </Box>
  );
};

export default AdminLayout;