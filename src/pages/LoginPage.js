import React from 'react';
import { Container, Paper, Box, Typography, TextField, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'; // <-- 1. IMPORT HOOKS
import { login } from '../store/authSlice'; // <-- 2. IMPORT THE ACTION

const LoginPage = () => {
  const dispatch = useDispatch(); // <-- 3. INITIALIZE DISPATCH
  const navigate = useNavigate(); // For redirection after login

  const handleLogin = () => {
    // 4. DISPATCH THE LOGIN ACTION
    // For now, we'll log in as a 'member'. We could add logic here to check credentials.
    dispatch(login({ role: 'member' }));
    navigate('/'); // Navigate to the dashboard after login
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ mt: 8 }}>
      <Paper elevation={3} sx={{ padding: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h1" variant="h5">Member Login</Typography>
        <Box component="form" sx={{ mt: 1 }}>
          <TextField margin="normal" required fullWidth label="Email or Mobile" />
          <TextField margin="normal" required fullWidth name="password" label="Password" type="password" />
          {/* 5. ATTACH THE HANDLER TO THE BUTTON */}
          <Button type="button" onClick={handleLogin} fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Sign In
          </Button>
          <Typography variant="body2" align="center">
            Don't have an account? <Link to="/register">Register Now</Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default LoginPage;