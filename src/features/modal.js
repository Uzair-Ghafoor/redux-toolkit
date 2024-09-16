import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
};

export const counterSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    isModalOpen(state, action) {
      state.isOpen = true;
    },
    isModalClose: (state, action) => {
      state.isOpen = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { isModalOpen, isModalClose } = counterSlice.actions;

export default counterSlice.reducer;
