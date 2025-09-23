import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux'; // <-- IMPORT USE SELECTOR
import DashboardLayout from './components/DashboardLayout';
import AdminLayout from './components/AdminLayout';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';

function App() {
  // Get the auth state from the Redux store
  const { isLoggedIn, userRole } = useSelector((state) => state.auth);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        
        <Route 
          path="/*" 
          element={
            isLoggedIn ? (
              userRole === 'admin' ? <AdminLayout /> : <DashboardLayout />
            ) : (
              <Navigate to="/login" />
            )
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;