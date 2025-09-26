import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Grid, Paper, Typography, Button, Modal, TextField, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { deposit, withdraw, transfer } from '../store/accountSlice';

const style = {
  position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
  width: 400, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4,
};

const MemberDashboardPage = () => {
  const dispatch = useDispatch();
  const account = useSelector((state) => state.account);
  const allLoans = useSelector((state) => state.loans.loans);
  const approvedLoans = allLoans.filter(loan => loan.memberId === 'MSR-0001' && loan.status === 'approved');

  const [open, setOpen] = useState(false);
  const [modalType, setModalType] = useState('');
  const [amount, setAmount] = useState(0);
  const [recipientId, setRecipientId] = useState('');
  const [narration, setNarration] = useState('');

  const handleOpen = (type) => {
    setModalType(type);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setAmount(0);
    setRecipientId('');
    setNarration('');
  };

  const handleSubmit = () => {
    if (modalType === 'deposit') {
      dispatch(deposit({ amount }));
    } else if (modalType === 'withdraw') {
      dispatch(withdraw({ amount }));
    } else if (modalType === 'transfer') {
      dispatch(transfer({ amount, recipientId, narration }));
    }
    handleClose();
  };
  
  const renderModalContent = () => {
    if (modalType === 'transfer') {
      return (
        <>
          <Typography variant="h6" component="h2">Fund Transfer</Typography>
          <TextField label="Recipient Account ID" value={recipientId} onChange={(e) => setRecipientId(e.target.value)} fullWidth margin="normal" />
          <TextField label="Amount" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} fullWidth margin="normal" />
          <TextField label="Narration (Optional)" value={narration} onChange={(e) => setNarration(e.target.value)} fullWidth margin="normal" />
        </>
      );
    }
    return (
      <>
        <Typography variant="h6" component="h2">{modalType === 'deposit' ? 'Make a Deposit' : 'Make a Withdrawal'}</Typography>
        <TextField label="Amount" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} fullWidth margin="normal" />
      </>
    );
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>My Dashboard</Typography>
      
      <Paper elevation={3} sx={{ p: 2, mb: 3, borderRadius: '8px' }}>
        <Typography variant="h6" sx={{ mb: 2 }}>Account Summary</Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography><b>Account ID:</b> ACC-10001</Typography>
            <Typography variant="h5" color="primary" sx={{ fontWeight: 'bold', mt:1 }}>Balance: ₹{account.balance.toFixed(2)}</Typography>
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            <Button variant="contained" color="success" onClick={() => handleOpen('deposit')}>Deposit</Button>
            <Button variant="outlined" color="error" onClick={() => handleOpen('withdraw')}>Withdraw</Button>
            <Button variant="contained" onClick={() => handleOpen('transfer')}>Transfer</Button>
          </Grid>
        </Grid>
      </Paper>

       <Paper elevation={3} sx={{ p: 2, mb: 3, borderRadius: '8px' }}>
        <Typography variant="h6" sx={{ mb: 2 }}>My Active Loans</Typography>
        {approvedLoans.length > 0 ? (
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Loan ID</TableCell><TableCell>Amount</TableCell><TableCell>Tenure</TableCell><TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {approvedLoans.map((loan) => (
                <TableRow key={loan.id}>
                  <TableCell>{loan.id}</TableCell><TableCell>₹{loan.principal.toLocaleString()}</TableCell><TableCell>{loan.tenure} months</TableCell><TableCell sx={{ color: 'green', fontWeight: 'bold' }}>{loan.status.toUpperCase()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <Typography sx={{ mt: 2, color: 'text.secondary' }}>You have no active loans.</Typography>
        )}
      </Paper>
      
      <Paper elevation={3} sx={{ p: 2, borderRadius: '8px' }}>
        <Typography variant="h6">Recent Transactions</Typography>
        <Table sx={{ mt: 2 }}>
          <TableHead>
            <TableRow>
              <TableCell>Txn ID</TableCell><TableCell>Type</TableCell><TableCell>Narration</TableCell><TableCell align="right">Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {account.transactions.map((txn) => (
              <TableRow key={txn.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell>{txn.id}</TableCell><TableCell>{txn.mode}</TableCell><TableCell>{txn.narration}</TableCell>
                <TableCell align="right" sx={{ color: txn.type === 'credit' ? 'green' : 'red', fontWeight: 'bold' }}>
                  {txn.type === 'credit' ? '+' : '-'}₹{txn.amount.toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          {renderModalContent()}
          <Button variant="contained" sx={{ mt: 2 }} onClick={handleSubmit}>Submit</Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default MemberDashboardPage;