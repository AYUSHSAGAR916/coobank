import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loans: [
    // We'll start with one pending loan for the admin to see initially
    { id: 'LN-20001', memberId: 'MSR-0001', principal: 150000, tenure: 24, status: 'pending' }
  ],
};

const loanSlice = createSlice({
  name: 'loans',
  initialState,
  reducers: {
    applyForLoan: (state, action) => {
      const newLoan = {
        id: `LN-${Math.floor(Math.random() * 10000)}`,
        memberId: 'MSR-0001', // Hardcoded for now, as we only have one member
        ...action.payload,
        status: 'pending',
      };
      state.loans.push(newLoan);
    },
    approveLoan: (state, action) => {
      const loan = state.loans.find(l => l.id === action.payload.id);
      if (loan) {
        loan.status = 'approved';
      }
    },
    rejectLoan: (state, action) => {
      const loan = state.loans.find(l => l.id === action.payload.id);
      if (loan) {
        loan.status = 'rejected';
      }
    },
  },
});

export const { applyForLoan, approveLoan, rejectLoan } = loanSlice.actions;
export default loanSlice.reducer;