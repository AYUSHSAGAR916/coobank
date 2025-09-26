import React, { useState } from 'react';
import { Container, Paper, Box, Typography, TextField, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addMember } from '../store/memberSlice';

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  // State to hold the form data
  const [formData, setFormData] = useState({
    name: '', email: '', mobile: '', aadhar: '', pan: '', password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMember = { id: `MSR-000${Math.floor(Math.random() * 100)}`, ...formData };
    
    // Dispatch the action to add the new member to the Redux store
    dispatch(addMember(newMember));
    
    // Navigate to the login page after successful "registration"
    alert('Registration successful! Please log in.');
    navigate('/login');
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ mt: 4, mb: 4 }}>
      <Paper elevation={3} sx={{ padding: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h1" variant="h5">New Member Registration</Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField name="name" label="Full Name" onChange={handleChange} fullWidth required margin="normal" />
          <TextField name="email" label="Email Address" type="email" onChange={handleChange} fullWidth required margin="normal" />
          <TextField name="mobile" label="Mobile Number" onChange={handleChange} fullWidth required margin="normal" />
          <TextField name="aadhar" label="Aadhar Number" onChange={handleChange} fullWidth required margin="normal" />
          <TextField name="pan" label="PAN Number" onChange={handleChange} fullWidth required margin="normal" />
          <TextField name="password" label="Password" type="password" onChange={handleChange} fullWidth required margin="normal" />
          
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Register
          </Button>
          <Typography variant="body2" align="center">
            Already have an account? <Link to="/login">Sign In</Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default RegistrationPage;