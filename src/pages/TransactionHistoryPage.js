import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Paper, Typography, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

const TransactionHistoryPage = () => {
  // Get the transaction data from our Redux store
  const { transactions } = useSelector((state) => state.account);

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Full Transaction History
      </Typography>
      <Paper elevation={3} sx={{ p: 2, borderRadius: '8px' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>Txn ID</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Type</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Narration</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }} align="right">Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((txn) => (
              <TableRow key={txn.id} hover>
                <TableCell>{txn.id}</TableCell>
                <TableCell>{txn.mode}</TableCell>
                <TableCell>{txn.narration}</TableCell>
                <TableCell align="right" sx={{ color: txn.type === 'credit' ? 'green' : 'red', fontWeight: 'bold' }}>
                  {txn.type === 'credit' ? '+' : '-'}₹{txn.amount.toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
};

export default TransactionHistoryPage;