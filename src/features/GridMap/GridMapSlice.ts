import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
export interface GridMapState {
  gridMap: string[][];
  difficulty: number;
  newGame: boolean;
  status: string;
};

const initialState: GridMapState = {
  gridMap: [],
  difficulty: 1,
  newGame: false,
  status: 'playing',
};

export const gridMapSlice = createSlice({
  name: 'gridMap',
  initialState,
  reducers: {
    setGridMap: (state, action: PayloadAction<string[][]>) => {      
      state.gridMap = action.payload;
    },
    setStatus: (state, action: PayloadAction<string>) => {
      state.status = action.payload;
    },
    setNewGame: (state, action: PayloadAction<boolean>) => {
      state.newGame = action.payload;
    }
  }
});

export const { setGridMap, setStatus, setNewGame } = gridMapSlice.actions;

export const selectGridMap = (state: RootState) => state.gridMap.gridMap;
export const selectStatus = (state: RootState) => state.gridMap.status;
export const selectNewGame = (state: RootState) => state.gridMap.newGame;

export default gridMapSlice.reducer;