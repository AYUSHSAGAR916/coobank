import React, { useState } from 'react';
import { Box } from '@mui/material';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { Routes, Route } from 'react-router-dom';
import MemberDashboardPage from '../pages/MemberDashboardPage';
import LoanApplicationPage from '../pages/LoanApplicationPage';
import ProfilePage from '../pages/ProfilePage';
import TransactionHistoryPage from '../pages/TransactionHistoryPage'; // <-- 1. IMPORT THE NEW PAGE

const DashboardLayout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar handleDrawerToggle={handleDrawerToggle} />
      <Sidebar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: '64px' }}>
        <Routes>
          <Route path="/" element={<MemberDashboardPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/apply-loan" element={<LoanApplicationPage />} />
          <Route path="/history" element={<TransactionHistoryPage />} /> {/* <-- 2. ADD THE NEW ROUTE */}
        </Routes>
      </Box>
    </Box>
  );
};

export default DashboardLayout;