import React, { useState } from 'react';
import { Box, Paper, Typography, TextField, Button, Grid, Slider } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { applyForLoan } from '../store/loanSlice';

const LoanApplicationPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [principal, setPrincipal] = useState(50000);
  const [tenure, setTenure] = useState(12);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(applyForLoan({ principal, tenure }));
    alert('Your loan application has been submitted for review!');
    navigate('/');
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>Apply for a New Loan</Typography>
      <Paper elevation={3} sx={{ p: 3, borderRadius: '8px' }}>
        <Typography variant="h6" sx={{ mb: 2 }}>Loan Details</Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            label="Loan Amount (Principal)"
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(parseInt(e.target.value))}
            fullWidth
            required
            margin="normal"
          />
          <Typography gutterBottom sx={{ mt: 2 }}>Tenure (in Months)</Typography>
          <Slider
            value={tenure}
            onChange={(e, newValue) => setTenure(newValue)}
            aria-label="Tenure"
            valueLabelDisplay="auto"
            step={6}
            marks
            min={12}
            max={72}
          />
          <Button type="submit" variant="contained" size="large" fullWidth sx={{ mt: 3 }}>
            Submit Application
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default LoanApplicationPage;