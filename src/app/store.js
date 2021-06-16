import { configureStore } from "@reduxjs/toolkit"
import countSlice from './../features/count/countSlice';
import todoSlice from './../features/todo/todoSlice';
import filterSlice from './../features/todo/filterSlice';
import CalcSlice from './../features/calculator/CalcuSlice';
import quoteSlice from './../features/quote/quoteSlice';

const rootReducer = {
    counts: countSlice,
    todos: todoSlice,
    filters: filterSlice,
    calculators: CalcSlice,
    quotes: quoteSlice
}

const store = configureStore({
    reducer: rootReducer
});

export default store;