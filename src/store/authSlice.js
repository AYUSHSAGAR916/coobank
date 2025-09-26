import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  userRole: null, // 'member' or 'admin'
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.userRole = action.payload.role;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.userRole = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

