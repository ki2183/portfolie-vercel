import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './../store';


const initialState = {
    w:window.innerWidth,
    h:window.innerHeight,
}
type wh_type = typeof initialState;

export const WHSlice = createSlice({
    name: 'wh',
    initialState,
    reducers: {
        setWH: (state, action: PayloadAction<wh_type>) => {
            state.w = action.payload.w;
            state.h = action.payload.h;
          }
    }
})

export const { setWH } = WHSlice.actions;
export const selectWH = (state: RootState) => state.wh;
export default WHSlice.reducer;