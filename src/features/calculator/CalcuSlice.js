import { createSlice } from "@reduxjs/toolkit";

const calculator = createSlice({
    name: 'calculator',
    initialState: '',
    reducers: {
        changeClickButuon: (state, action) => {
            return action.payload;
        }
    }
})

export const { changeClickButuon } = calculator.actions;
export default calculator.reducer;