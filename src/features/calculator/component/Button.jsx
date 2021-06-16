import { useState } from "react";
import { useDispatch } from "react-redux";

Button.propTypes = {}

function Button(props) {
    const { id, value, styleButton, styleNumber } = props;
    const [onMouse, setOnMouse] = useState(false);

    const dispatch = useDispatch();

    const onMouseOver = () => {
        setOnMouse(true);
    }

    const onMouseOut = () => {
        setOnMouse(false);
    }

    const onClickNumber = (id, value) => {
        props.onClickGetValue(id, value);
        // dispatch(value);
    }

    let elmButton = <p className="w-full text-white">{value}</p>;
    if (onMouse == true) {
        elmButton = <p className="w-full text-gray-900">{value}</p>;
    }

    return (
        <div
            className={`${styleButton} ${onMouse ? 'border border-gray-700' : ''}`}
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}
            onClick={()=>onClickNumber(id, value)} >
            {
                value === '=' ?
                    <button className={`${styleNumber} w-full h-33`}>
                        {elmButton}
                    </button>
                    : <button className={`${styleNumber} w-full h-16`}>
                        {elmButton}
                    </button>}
        </div>
    );
}

export default Button;