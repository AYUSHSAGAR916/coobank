import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';

export const store = configureStore({
  reducer: {
    // We name this piece of state 'auth'
    auth: authReducer,
  },
});