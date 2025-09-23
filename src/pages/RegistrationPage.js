import React from 'react';
import { Container, Paper, Box, Typography, TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const RegistrationPage = () => {
  return (
    <Container component="main" maxWidth="xs" sx={{ mt: 4, mb: 4 }}>
      <Paper elevation={3} sx={{ padding: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h1" variant="h5">
          New Member Registration
        </Typography>
        <Box component="form" sx={{ mt: 1 }}>
          <TextField margin="normal" required fullWidth label="Full Name" />
          <TextField margin="normal" required fullWidth label="Email Address" />
          <TextField margin="normal" required fullWidth label="Mobile Number" />
          <TextField margin="normal" required fullWidth label="Aadhar Number" />
          <TextField margin="normal" required fullWidth label="PAN Number" />
          <TextField margin="normal" required fullWidth label="Password" type="password" />
          
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Register
          </Button>
           <Typography variant="body2" align="center">
            Already have an account?{' '}
            <Link to="/login">
              Sign In
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default RegistrationPage;