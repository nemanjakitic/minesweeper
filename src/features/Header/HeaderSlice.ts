import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
export interface HeaderState {
  difficulty: number;
};

const initialState: HeaderState = {
  difficulty: 1
};

export const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    setDifficulty: (state, action: PayloadAction<number>) => {
      state.difficulty = action.payload;
    },
  }
});

export const { setDifficulty } = headerSlice.actions;

export const selectDifficulty = (state: RootState) => state.header.difficulty;

export default headerSlice.reducer;