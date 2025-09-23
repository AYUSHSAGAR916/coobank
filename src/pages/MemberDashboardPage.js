import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';

// --- DUMMY DATA ---
// We use this hardcoded data because we don't have a backend server yet.
// This simulates the data that would come from a database.
const accountSummary = {
  accountId: "ACC-10001",
  type: "savings",
  balance: 12500.50,
  interestRate: 4.0,
};

const transactions = [
  { txnId: "TXN-900001", type: "credit", mode: "cash", amount: 5000, narration: "Cash Deposit" },
  { txnId: "TXN-900002", type: "debit", mode: "upi", amount: 1200, narration: "Grocery Store" },
  { txnId: "TXN-900003", type: "debit", mode: "internal", amount: 3000, narration: "Loan EMI" },
  { txnId: "TXN-900004", type: "credit", mode: "neft", amount: 2500, narration: "Salary Credit" },
];
// --------------------

const MemberDashboardPage = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        My Dashboard
      </Typography>
      
      {/* Account Summary Section */}
      <Paper elevation={3} sx={{ p: 2, mb: 3, borderRadius: '8px' }}>
        <Typography variant="h6" sx={{ mb: 2 }}>Account Summary</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}><Typography><b>Account ID:</b> {accountSummary.accountId}</Typography></Grid>
          <Grid item xs={12} sm={6} md={3}><Typography><b>Type:</b> {accountSummary.type.toUpperCase()}</Typography></Grid>
          <Grid item xs={12} sm={6} md={3}><Typography><b>Interest Rate:</b> {accountSummary.interestRate}%</Typography></Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h5" color="primary" sx={{ fontWeight: 'bold' }}>
              Balance: ₹{accountSummary.balance.toFixed(2)}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      
      {/* Transaction History Section */}
      <Paper elevation={3} sx={{ p: 2, borderRadius: '8px' }}>
        <Typography variant="h6">Recent Transactions</Typography>
        <Box 
          component="table" 
          sx={{ 
            width: '100%', 
            mt: 2,
            borderCollapse: 'collapse' 
          }}
        >
          <thead>
            <tr style={{ borderBottom: '2px solid #ddd' }}>
              <th style={{ textAlign: 'left', padding: '8px' }}>Txn ID</th>
              <th style={{ textAlign: 'left', padding: '8px' }}>Type</th>
              <th style={{ textAlign: 'left', padding: '8px' }}>Narration</th>
              <th style={{ textAlign: 'right', padding: '8px' }}>Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((txn) => (
              <tr key={txn.txnId} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '8px' }}>{txn.txnId}</td>
                <td style={{ padding: '8px' }}>{txn.type}</td>
                <td style={{ padding: '8px' }}>{txn.narration}</td>
                <td style={{ textAlign: 'right', padding: '8px', color: txn.type === 'credit' ? 'green' : 'red', fontWeight: 'bold' }}>
                  {txn.type === 'credit' ? '+' : '-'}₹{txn.amount.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </Box>
      </Paper>
    </Box>
  );
};

export default MemberDashboardPage;