import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  currentUser: null,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state, action) {
      state.value += 1;
    },
    incrementByAmount(state, action) {
      state.value = action.payload;
    },
    signIn(state, action) {
      state.currentUser = action.payload;
    },
    signOut(state, action) {
      state.currentUser = null;
    },
  },
});
// incrementByAmount(20)
export const { increment, incrementByAmount, signIn, signOut } =
  counterSlice.actions;

export default counterSlice.reducer;
