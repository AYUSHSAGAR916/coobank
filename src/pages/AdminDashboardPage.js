import React from 'react';
import { Box, Paper, Typography, Table, TableHead, TableBody, TableRow, TableCell, Button } from '@mui/material';

// --- DUMMY DATA for Admin View ---
const pendingKYC = [
  { memberId: 'MSR-0002', name: 'Suyash gehlot', joinedAt: '2025-09-22' },
  { memberId: 'MSR-0003', name: 'Nipun ahuja', joinedAt: '2025-09-23' },
];

const pendingLoans = [
  { loanId: 'LN-20002', memberId: 'MSR-0001', principal: 250000, tenureMonths: 24 },
  { loanId: 'LN-20003', memberId: 'MSR-0002', principal: 800000, tenureMonths: 60 },
];
// --------------------------------

const AdminDashboardPage = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>Admin Dashboard</Typography>
      
      {/* KYC Approval Queue */}
      <Paper sx={{ p: 2, mb: 4, borderRadius: '8px' }}>
        <Typography variant="h6" sx={{ mb: 2 }}>KYC Approval Queue</Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Member ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Date Joined</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pendingKYC.map((member) => (
              <TableRow key={member.memberId}>
                <TableCell>{member.memberId}</TableCell>
                <TableCell>{member.name}</TableCell>
                <TableCell>{member.joinedAt}</TableCell>
                <TableCell align="right">
                  <Button variant="contained" color="success" size="small" sx={{ mr: 1 }}>Approve</Button>
                  <Button variant="contained" color="error" size="small">Reject</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>

      {/* Loan Approval Queue */}
      <Paper sx={{ p: 2, borderRadius: '8px' }}>
        <Typography variant="h6" sx={{ mb: 2 }}>Loan Approval Queue</Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Loan ID</TableCell>
              <TableCell>Member ID</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Tenure</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pendingLoans.map((loan) => (
              <TableRow key={loan.loanId}>
                <TableCell>{loan.loanId}</TableCell>
                <TableCell>{loan.memberId}</TableCell>
                <TableCell>₹{loan.principal.toLocaleString()}</TableCell>
                <TableCell>{loan.tenureMonths} months</TableCell>
                <TableCell align="right">
                  <Button variant="contained" color="success" size="small" sx={{ mr: 1 }}>Approve</Button>
                  <Button variant="contained" color="error" size="small">Reject</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
};

export default AdminDashboardPage;