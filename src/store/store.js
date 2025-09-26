import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import memberReducer from './memberSlice';
import accountReducer from './accountSlice';
import loanReducer from './loanSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    members: memberReducer,
    account: accountReducer,
    loans: loanReducer,
  },
});