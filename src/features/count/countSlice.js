import { createSlice } from "@reduxjs/toolkit";

const count = createSlice({
    name: 'count', 
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state, action) => {
            state.value += 1;
        }, 
        decrement: (state, action) => {
            state.value -= 1;
        }, 
        resetValue: (state, action) => {
            state.value = 0;
        }
    }
})

const { reducer, actions } = count;
export const { increment, decrement, resetValue } = actions;
export default reducer;