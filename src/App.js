import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage'; // <-- 1. IMPORT THE NEW PAGE

// Set this to false to see your login and registration pages
const isAuthenticated = false; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} /> {/* <-- 2. ADD THE NEW ROUTE */}
        
        <Route 
          path="/*" 
          element={
            isAuthenticated ? <DashboardLayout /> : <Navigate to="/login" />
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;