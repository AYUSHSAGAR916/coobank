import React from 'react';
import { Box, Paper, Typography, TextField, Button, Grid, Slider } from '@mui/material';

const LoanApplicationPage = () => {
  // Dummy values for the EMI calculation example
  const principal = 500000;
  const tenureMonths = 60;
  const interestRate = 10.5;
  const emi = 10624.50;

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Apply for a New Loan
      </Typography>
      <Grid container spacing={4}>
        {/* Loan Application Form */}
        <Grid item xs={12} md={7}>
          <Paper elevation={3} sx={{ p: 3, borderRadius: '8px' }}>
            <Typography variant="h6" sx={{ mb: 2 }}>Loan Details</Typography>
            <Box component="form">
              <TextField
                label="Loan Amount (Principal)"
                type="number"
                fullWidth
                required
                margin="normal"
                defaultValue={principal} // Using default value for demo
              />
              <Typography gutterBottom sx={{ mt: 2 }}>Tenure (in Months)</Typography>
              <Slider
                defaultValue={tenureMonths}
                aria-label="Tenure"
                valueLabelDisplay="auto"
                step={6}
                marks
                min={12}
                max={72}
              />
              <Button
                type="submit"
                variant="contained"
                size="large"
                fullWidth
                sx={{ mt: 3 }}
              >
                Submit Application
              </Button>
            </Box>
          </Paper>
        </Grid>

        {/* EMI Calculation Example */}
        <Grid item xs={12} md={5}>
          <Paper elevation={3} sx={{ p: 3, borderRadius: '8px', backgroundColor: '#f4f6f8' }}>
            <Typography variant="h6" sx={{ mb: 2 }}>EMI Calculation Example</Typography>
            <Typography variant="body1" sx={{ mb: 1 }}><b>Loan Amount:</b> ₹{principal.toLocaleString()}</Typography>
            <Typography variant="body1" sx={{ mb: 1 }}><b>Interest Rate:</b> {interestRate}% p.a.</Typography>
            <Typography variant="body1" sx={{ mb: 2 }}><b>Tenure:</b> {tenureMonths} months</Typography>
            <Typography variant="h5" color="primary" sx={{ fontWeight: 'bold' }}>
              Monthly EMI: ₹{emi.toLocaleString()}
            </Typography>
            <Typography variant="caption" display="block" sx={{ mt: 2 }}>
              *This is an example calculation based on the details provided. The final EMI may vary.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoanApplicationPage;