import React from 'react';
import { Box, Paper, Typography, Table, TableHead, TableBody, TableRow, TableCell, Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { approveLoan, rejectLoan } from '../store/loanSlice';

const AdminDashboardPage = () => {
  const dispatch = useDispatch();
  const allLoans = useSelector((state) => state.loans.loans);
  const pendingLoans = allLoans.filter(loan => loan.status === 'pending');
  
  const pendingKYC = [
    { memberId: 'MSR-0002', name: 'Ayush sagar', joinedAt: '2025-09-22' },
    { memberId: 'MSR-0003', name: 'nipun ahuja', joinedAt: '2025-09-23' },
  ];

  return (
    <Box>
      <Typography variant="h4" gutterBottom>Admin Dashboard</Typography>
      
      <Paper sx={{ p: 2, mb: 4, borderRadius: '8px' }}>
        <Typography variant="h6" sx={{ mb: 2 }}>KYC Approval Queue</Typography>
        <Table>
          <TableHead><TableRow><TableCell>Member ID</TableCell><TableCell>Name</TableCell><TableCell>Date Joined</TableCell><TableCell align="right">Actions</TableCell></TableRow></TableHead>
          <TableBody>
            {pendingKYC.map((member) => (
              <TableRow key={member.memberId}>
                <TableCell>{member.memberId}</TableCell><TableCell>{member.name}</TableCell><TableCell>{member.joinedAt}</TableCell>
                <TableCell align="right">
                  <Button variant="contained" color="success" size="small" sx={{ mr: 1 }}>Approve</Button>
                  <Button variant="contained" color="error" size="small">Reject</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>

      <Paper sx={{ p: 2, borderRadius: '8px' }}>
        <Typography variant="h6" sx={{ mb: 2 }}>Loan Approval Queue</Typography>
        <Table>
          <TableHead><TableRow><TableCell>Loan ID</TableCell><TableCell>Member ID</TableCell><TableCell>Amount</TableCell><TableCell>Tenure</TableCell><TableCell align="right">Actions</TableCell></TableRow></TableHead>
          <TableBody>
            {pendingLoans.map((loan) => (
              <TableRow key={loan.id}>
                <TableCell>{loan.id}</TableCell><TableCell>{loan.memberId}</TableCell><TableCell>₹{loan.principal.toLocaleString()}</TableCell><TableCell>{loan.tenure} months</TableCell>
                <TableCell align="right">
                  <Button variant="contained" color="success" size="small" sx={{ mr: 1 }} onClick={() => dispatch(approveLoan({ id: loan.id }))}>Approve</Button>
                  <Button variant="contained" color="error" size="small" onClick={() => dispatch(rejectLoan({ id: loan.id }))}>Reject</Button>
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