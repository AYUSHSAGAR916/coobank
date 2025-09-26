import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  balance: 12500.50,
  // --- TRANSACTIONS ADDED HERE ---
  transactions: [
    { id: "TXN-900001", type: "credit", mode: "cash", amount: 15000, narration: "Initial Deposit" },
    { id: "TXN-900002", type: "debit", mode: "upi", amount: 2499.50, narration: "Electronics Store" },
  ],
  // --------------------------------
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    deposit: (state, action) => {
      const amount = parseFloat(action.payload.amount);
      if (!isNaN(amount) && amount > 0) {
        state.balance += amount;
        state.transactions.unshift({
          id: `TXN-${Math.floor(Math.random() * 10000)}`,
          type: 'credit',
          mode: 'cash',
          amount: amount,
          narration: 'Cash Deposit'
        });
      }
    },
    withdraw: (state, action) => {
      const amount = parseFloat(action.payload.amount);
      if (!isNaN(amount) && amount > 0 && state.balance >= amount) {
        state.balance -= amount;
        state.transactions.unshift({
          id: `TXN-${Math.floor(Math.random() * 10000)}`,
          type: 'debit',
          mode: 'cash',
          amount: amount,
          narration: 'Cash Withdrawal'
        });
      } else {
        alert('Withdrawal amount is invalid or exceeds balance.');
      }
    },
    transfer: (state, action) => {
      const { amount, recipientId, narration } = action.payload;
      const transferAmount = parseFloat(amount);
      if (!isNaN(transferAmount) && transferAmount > 0 && state.balance >= transferAmount) {
        state.balance -= transferAmount;
        state.transactions.unshift({
          id: `TXN-${Math.floor(Math.random() * 10000)}`,
          type: 'debit',
          mode: 'internal transfer',
          amount: transferAmount,
          narration: `To ${recipientId}: ${narration}`
        });
      } else {
        alert('Transfer amount is invalid or exceeds balance.');
      }
    },
  },
});

export const { deposit, withdraw, transfer } = accountSlice.actions;
export default accountSlice.reducer;