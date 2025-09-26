import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Paper, Typography, Grid, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const ReportsPage = () => {
  // Get data from our Redux store
  const { loans } = useSelector((state) => state.loans);
  const { transactions } = useSelector((state) => state.account);

  // --- Calculate Report Metrics (Simulated) ---
  const approvedLoans = loans.filter(loan => loan.status === 'approved');
  const totalLoanOutstanding = approvedLoans.reduce((sum, loan) => sum + loan.principal, 0);

  const dailyDeposits = transactions.filter(t => t.type === 'credit').reduce((sum, t) => sum + t.amount, 0);
  const dailyWithdrawals = transactions.filter(t => t.type === 'debit').reduce((sum, t) => sum + t.amount, 0);
  const netCashFlow = dailyDeposits - dailyWithdrawals;
  // ---------------------------------------------

  return (
    <Box>
      <Typography variant="h4" gutterBottom>Financial Reports</Typography>
      
      {/* Summary Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
            <Typography variant="h6">Total Loan Outstanding</Typography>
            <Typography variant="h4" color="primary">₹{totalLoanOutstanding.toLocaleString()}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
            <Typography variant="h6">Today's Deposits</Typography>
            <Typography variant="h4" color="green">₹{dailyDeposits.toLocaleString()}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
            <Typography variant="h6">Net Cash Flow</Typography>
            <Typography variant="h4" color={netCashFlow >= 0 ? 'green' : 'red'}>
              ₹{netCashFlow.toLocaleString()}
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Loan Outstanding Report Table */}
      <Paper elevation={3} sx={{ p: 2, borderRadius: '8px' }}>
        <Typography variant="h6" sx={{ mb: 2 }}>Loan Outstanding Details</Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Loan ID</TableCell>
              <TableCell>Member ID</TableCell>
              <TableCell>Status</TableCell>
              <TableCell align="right">Principal Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {approvedLoans.map((loan) => (
              <TableRow key={loan.id}>
                <TableCell>{loan.id}</TableCell>
                <TableCell>{loan.memberId}</TableCell>
                <TableCell sx={{ color: 'green', textTransform: 'capitalize' }}>{loan.status}</TableCell>
                <TableCell align="right">₹{loan.principal.toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
};

export default ReportsPage;