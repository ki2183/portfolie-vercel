import { RootState } from './../store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: boolean = false

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        modal_open:(state)=>{
            document.documentElement.classList.add('no-scroll');
            return true
        },
        modal_close:(state)=>{
            document.documentElement.classList.remove('no-scroll'); 
            return false
        }
    }
})

export const { modal_open,modal_close } = modalSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.modal

export default modalSlice.reducer