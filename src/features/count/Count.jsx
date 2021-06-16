import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, resetValue } from './countSlice';


Count.propTypes = {}

function Count(props) {
    //hooks
    const [count, setCount] = useState(0);

    //redux
    const countValue = useSelector(state => state.counts.value);
    const dispatch = useDispatch();
    // console.log(countValue);

    const handleIncrement = () => {
        let newValue = countValue + 1;
        const action = increment(newValue);
        dispatch(action);
    }

    const handleDescrement = () => {
        let newValue = countValue - 1;
        const action = decrement(newValue);
        dispatch(action);
    }

    const handleReset = () => {
        let newValue = 0;
        const action = resetValue(newValue);
        dispatch(action);
    }

    return (
        <div className="text-center font-serif">
            <section className="use-hooks">
                <p className="text-5xl mt-12">{count}</p>
                <button onClick={() => setCount(count - 1)}
                    className="text-3xl w-12 rounded-lg bg-green-100 hover:bg-white hover:shadow-lg mt-10 active:bg-red-700"
                >-</button>
                <button onClick={() => setCount(0)}
                    className="text-3xl w-36 rounded-lg hover:bg-white hover:shadow-lg mx-2"
                >Reset</button>
                <button onClick={() => setCount(count + 1)}
                    className="text-3xl w-12 rounded-lg bg-green-100 hover:bg-white hover:shadow-lg"
                >+</button>
            </section>

            <section className="useRedux mt-20">
                <p className="text-5xl">{countValue}</p>
                <button onClick={handleDescrement}
                    className="text-3xl w-12 rounded-lg bg-green-100 hover:bg-white hover:shadow-lg mt-10"
                >-</button>
                <button onClick={handleReset}
                    className="text-3xl w-36 rounded-lg hover:bg-white hover:shadow-lg mx-2"
                >Reset</button>
                <button onClick={handleIncrement}
                    className="text-3xl w-12 rounded-lg bg-green-100 hover:bg-white hover:shadow-lg"
                >+</button>
            </section>
        </div>
    )
}

export default Count;