import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  userRole: null, // 'member' or 'admin'
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  // Reducers are functions that define how the state can be updated
  reducers: {
    // The 'login' action
    login: (state, action) => {
      state.isLoggedIn = true;
      state.userRole = action.payload.role; // We'll pass the role when we log in
    },
    // The 'logout' action
    logout: (state) => {
      state.isLoggedIn = false;
      state.userRole = null;
    },
  },
});

// Export the actions so we can use them in our components
export const { login, logout } = authSlice.actions;

// Export the reducer to be included in the main store
export default authSlice.reducer;