import React from 'react';
import { Box } from '@mui/material';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { Routes, Route } from 'react-router-dom'; // <-- 1. IMPORT ROUTING TOOLS
import MemberDashboardPage from '../pages/MemberDashboardPage';
import LoanApplicationPage from '../pages/LoanApplicationPage'; // <-- 2. IMPORT THE NEW PAGE

const DashboardLayout = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar />
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: '64px' }}>
        {/* 3. SET UP THE ROUTES FOR THE DASHBOARD AREA */}
        <Routes>
          <Route path="/" element={<MemberDashboardPage />} />
          <Route path="/apply-loan" element={<LoanApplicationPage />} />
          {/* We can add more routes here later, like for transaction history */}
        </Routes>
      </Box>
    </Box>
  );
};

export default DashboardLayout;