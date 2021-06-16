import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getQuotes = createAsyncThunk('quotes/getQuotes', async ()=>{
    const res = await fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json');
        if(res.ok) {
            const data = await res.json();
            return data;
        }
})

const quoteSlice = createSlice({
    name: 'quotes', 
    initialState: {
        list: [],
        status: null
    },
    extraReducers: {
        [getQuotes.pending]: (state, action) => {
            state.status = 'loading'
        },
        [getQuotes.fulfilled]: (state, action) => {
            state.list = action.payload;
            state.status = 'success';
        },
        [getQuotes.rejected]: (state, action) => {
            state.status = 'failed'
        }
    }
});

export default quoteSlice.reducer;