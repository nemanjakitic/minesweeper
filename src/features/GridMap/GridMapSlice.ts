import { createSlice } from '@reduxjs/toolkit';
export interface GridMapState {
    gridMap: string[][];
};

const initialState: GridMapState = {
    gridMap: []
};

export const gridMapSlice = createSlice({
    name: 'gridMap',
    initialState,
    reducers: {
    }
});

export default gridMapSlice.reducer;