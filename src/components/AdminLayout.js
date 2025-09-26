import React from 'react';
import { Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom'; // <-- 1. IMPORT ROUTING TOOLS
import Navbar from './Navbar';
import AdminSidebar from './AdminSidebar';
import AdminDashboardPage from '../pages/AdminDashboardPage';
import ReportsPage from '../pages/ReportsPage'; // <-- 2. IMPORT THE NEW PAGE

const AdminLayout = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar />
      <AdminSidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: '64px' }}>
        {/* 3. SET UP NESTED ROUTES */}
        <Routes>
          <Route path="/" element={<AdminDashboardPage />} />
          <Route path="/reports" element={<ReportsPage />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default AdminLayout;