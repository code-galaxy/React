import { createSlice } from '@reduxjs/toolkit';

export const taskReduceSlice = createSlice({
   name: 'store',
   initialState: { value: 0, text: 'Hello' },
   reducers: {
      add: (state, data) => { state.value += +data.payload; },
      minus: (state, data) => { state.value -= +data.payload; },
      multi: (state, data) => { state.value *= +data.payload; },
      division: (state, data) => { state.value /= +data.payload; },
      addText: (state, data) => { state.value = data.payload }
   },
});

export const { add, minus, multi, division, addText, showConsole } = taskReduceSlice.actions;

export const selectValue = state => state.taskReducer.value;
export const selectText = state => state.taskReducer.text;

export default taskReduceSlice.reducer;