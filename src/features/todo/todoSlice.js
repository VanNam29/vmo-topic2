import { createSlice } from '@reduxjs/toolkit';

// const initialTodo = JSON.parse(localStorage.getItem('todos'));
const initialTodo = [];

const todo = createSlice({
    name: 'todo',
    initialState: initialTodo,
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload);
        },
        removeTodo: (state, action) => {
            return state.filter(todo => todo.id !== action.payload);
        },
        changeIsCompleteTodo: (state, action) => {
            const { id, isComplete } = action.payload;
            const todoChange = state.find((todo) => todo.id === id);
            if (todoChange) {
                todoChange.isComplete = isComplete;
            }
        },
        removeTodoIsComplete: (state, action) => {
            const isComplete = action.payload;
            return state = state.filter((todo) => todo.isComplete === !isComplete);
        },
        changeActiveToComplete: (state, action) => {
            const isComplete = action.payload;
            for (var i of state) {
                let todoChange = state.find((todo) => todo.isComplete === !isComplete);
                if (todoChange) {
                    todoChange.isComplete = isComplete;
                }
            }
        },
        changeCompleteToActive: (state, action) => {
            const isComplete = action.payload;
            for(var i of state) {
                let todoChange = state.find((todo) => todo.isComplete === !isComplete);
                if(todoChange) {
                    todoChange.isComplete = isComplete;
                }
            }
        },
        changeLitteActiveToComplete: (state, action) => {
            const isComplete = action.payload;
            for(var i of state) {
                let todoChange = state.find((todo)=> todo.isComplete === !isComplete);
                if(todoChange) {
                    todoChange.isComplete = isComplete;
                }
            }
        },
        changeTodo: (state, action) => {
            const editTodo = action.payload;
            let changeTodo = state.find((todo) => todo.id === editTodo.id);
            if(changeTodo) {
                changeTodo.name = editTodo.name;
            }
        }
    }
});

const { reducer, actions } = todo;
export const {
    addTodo,
    removeTodo,
    changeIsCompleteTodo,
    removeTodoIsComplete,
    changeActiveToComplete,
    changeCompleteToActive,
    changeLitteActiveToComplete,
    changeTodo
} = actions;
export default reducer;