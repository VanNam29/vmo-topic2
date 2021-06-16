import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Item from "./component/Item";
import {
    addTodo,
    removeTodo,
    changeIsCompleteTodo,
    removeTodoIsComplete,
    changeActiveToComplete,
    changeCompleteToActive,
    changeLitteActiveToComplete
} from "./todoSlice";

import Footer from "./component/Footer";
import { stringify } from "postcss";

Todo.propTypes = {

}

const randomNumber = () => {
    return Math.trunc(Math.random() * 1000);
}

function Todo(props) {
    const [inputValue, setInputValue] = useState('');
    let checkOptionAll = false;

    let { todos, filters } = useSelector(state => state);
    const dispatch = useDispatch();
    // console.log(todos);

    const countActive = (todos) => {
        let count = 0;
        todos.map((todo) => {  
            if (todo.isComplete === false) {
                count += 1;
            }
        })
        return count;
    }

    const filterTodo = (todos, filter) => {
        switch (filter) {
            case 'ALL':
                return todos;
            case 'ACTIVE':
                return todos.filter((todo) => !todo.isComplete);
            case 'COMPLETE':
                return todos.filter((todo) => todo.isComplete);
            default: return;
        }
    }

    const visibleTodos = filterTodo(todos, filters);
    const countActiveTodo = countActive(todos);
    let countIsComplete = todos.length - countActiveTodo;

    if (countActiveTodo === 0) {
        checkOptionAll = true;
    }

    const onClickOptionAll = () => {
        if (countActiveTodo === 0) {     //all complete
            let isComplete = false;
            const action = changeCompleteToActive(isComplete);
            dispatch(action);
        }
        else if (countActiveTodo === todos.length) {      //all active
            let isComplete = true;
            const action = changeActiveToComplete(isComplete);
            dispatch(action);
        }
        else {      //active + complete
            let isComplete = true;
            const action = changeLitteActiveToComplete(isComplete);
            dispatch(action);
        }
    }

    const handleChange = (event) => {
        setInputValue(event.target.value);
    }

    const handleSubmit = (event) => {
        const newId = randomNumber();
        let newTodo = {
            id: newId,
            name: inputValue,
            isComplete: false
        }
        if (inputValue.trim() !== '') {
            const action = addTodo(newTodo);
            dispatch(action);
        }
        setInputValue('');

        // local storage
        let localTodo = {
            id: newId,
            name: inputValue,
            isComplete: false
        };
        let data;
        if(localStorage.getItem('data') === null) {
            data = [];
        }
        else {
            data = JSON.parse(localStorage.getItem('data'));
        }
        data.push(localTodo);
        localStorage.setItem('data', JSON.stringify(data));
        console.log('save');
        // localStorage.clear();

        event.preventDefault();
    }

    const changeIsComplete = (todo) => {
        let changeTodo = {
            id: todo.id,
            name: todo.name,
            isComplete: !todo.isComplete
        }
        const action = changeIsCompleteTodo(changeTodo);
        dispatch(action);
    }

    const removeItem = (id) => {
        console.log(id);
        const action = removeTodo(id);
        dispatch(action);
    }

    const handleClearComplete = () => {
        const isComplete = true;
        const action = removeTodoIsComplete(isComplete);
        dispatch(action);
    }

    let elmShowOptionAll = null;
    let todoLength = todos.length;
    if (todoLength > 0) {
        elmShowOptionAll = <i className={`fas fa-chevron-down
        absolute bottom-0 left-0 mb-2 ml-2 text-3xl
        ${checkOptionAll ? 'opacity-40' : 'opacity-10'}`}></i>
    }

    let elmShowFooter = null;
    if (todoLength > 0) {
        elmShowFooter = <Footer
            todo={todos}
            countActiveTodo={countActiveTodo}
            handleClearComplete={handleClearComplete}
            countIsComplete={countIsComplete} />
    }

    return (
        <div className="w-full font-serif text-2xl">
            <section className="w-full">
                <p className="text-center text-9xl opacity-50 text-red-200 mb-8">todos</p>
            </section>
            <div className="w-1/3 m-auto bg-white rounded shadow-2xl">
                <form onSubmit={handleSubmit}
                    className="w-full flex h-16 min-w-full">
                    <div onClick={onClickOptionAll} className="h-14 w-1/12 relative">
                        {/* optionAll */}
                        {elmShowOptionAll}
                    </div>
                    <input
                        value={inputValue}
                        onChange={handleChange}
                        className="placeholder-gray-500 w-11/12 opacity-75 ml-1.5"
                        placeholder="What needs to be done?"
                    ></input>
                </form>
                <div className="h-0.5 bg-gray-200 w-full">
                </div>

                <section className="text-left">
                    <ul>
                        {visibleTodos &&
                            visibleTodos.map((todo) =>
                                <Item key={todo.id} todo={todo} removeItem={removeItem}
                                    changeIsComplete={changeIsComplete} />)}
                    </ul>
                </section>

                {/* footer */}
                {elmShowFooter}
            </div>
            {/* <div className="h-1 w-3/12 bg-gray-400 m-auto shadow-2xl"></div> */}
        </div>

    );
}

export default Todo;