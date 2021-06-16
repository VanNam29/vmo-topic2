import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeTodo } from './../todoSlice';

Item.propTypes = {

}

function Item(props) {

    const { todo } = props;
    // let checkOnMouseRemove = false;
    const [showRemove, setShowRemove] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [inputValue, setValue] = useState(todo.name);

    const dispatch = useDispatch();

    const removeItem = (id) => {
        props.removeItem(id);
    }

    const changeIsComplete = (todo) => {
        props.changeIsComplete(todo);
    }

    const onMouseShowRemove = () => {
        setShowRemove(true);
    }

    const onMouseHideRemove = () => {
        setShowRemove(false);
    }

    const onDBShowEdit = () => {
        setShowEdit(true);
        setShowRemove(false);
    }

    const hideInputEdit = () => {
        setShowEdit(false);
    }

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const onSubmitEdit = (event) => {
        event.preventDefault();
        let editTodo = {
            id: todo.id,
            name: inputValue,
            isComplete: todo.isComplete
        }
        const action = changeTodo(editTodo);
        dispatch(action);
        setShowEdit(false);
    }

    return (
        <div className="h-14">
            <li className="flex h-12 mt-4"
                onMouseOver={onMouseShowRemove}
                onMouseOut={onMouseHideRemove}
                onDoubleClick={onDBShowEdit} >
                <div className="h-12 w-1/12 relative" onClick={() => changeIsComplete(todo)}>
                    <i className={`far fa-circle absolute mb-2 ml-2  text-3xl
                            ${todo.isComplete ? 'opacity-30' : 'opacity-20'}`}></i>

                    <i className={`fas fa-check absolute  ml-3 text-xl 
                            ${todo.isComplete ? 'mt-1.5 text-green-300' : 'hidden'}`}></i>
                </div>

                {/* edit todo  */}
                {showEdit ?
                    <form onSubmit={onSubmitEdit} className="w-full">
                        <input onBlur={hideInputEdit} className="opacity-60 w-full h-12"
                            value={inputValue}
                            onChange={handleChange}></input>
                    </form>
                    : <label className="w-10/12 break-words">
                        <span className={`delay-80 transition
                            ${todo.isComplete ? 'line-through opacity-30' : 'opacity-60'}`}>
                            {todo.name}
                        </span>
                    </label>}

                <i className={`text-red-300 fas fa-times text-xl mt-1  
                 ${showRemove ? 'opacity-100 w-1/12' : 'opacity-0 w-0'}`}
                    onClick={() => removeItem(todo.id)}></i>
            </li>
            <div className="h-0.5 bg-gray-200 w-full mt-4">
            </div>
        </div>

    );
}

export default Item;