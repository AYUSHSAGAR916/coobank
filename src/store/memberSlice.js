import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  members: [
    { id: 'MSR-0001', name: 'Default User', email: 'user@example.com', mobile: '9876543210', aadhar: '111122223333', pan: 'ABCDE1234F', password: 'password123' }
  ],
};

const memberSlice = createSlice({
  name: 'members',
  initialState,
  reducers: {
    addMember: (state, action) => {
      state.members.push(action.payload);
    },
    // --- ADD THIS NEW REDUCER ---
    updateMember: (state, action) => {
      const { id, updatedData } = action.payload;
      const memberIndex = state.members.findIndex((member) => member.id === id);
      if (memberIndex !== -1) {
        state.members[memberIndex] = { ...state.members[memberIndex], ...updatedData };
      }
    },
    // ----------------------------
  },
});

// --- EXPORT THE NEW ACTION ---
export const { addMember, updateMember } = memberSlice.actions;
export default memberSlice.reducer;