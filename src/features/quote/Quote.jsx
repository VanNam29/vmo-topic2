import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuotes } from './quoteSlice';


Quote.propTypes = {}

const ColorArray = [
    {
        bg_color: 'bg-gray-200',
        color: 'text-gray-200',
        bg_hover: 'hover:bg-gray-100'
    },
    {
        bg_color: 'bg-red-200',
        color: 'text-red-200',
        bg_hover: 'hover:bg-red-100'
    },
    {
        bg_color: 'bg-blue-200',
        color: 'text-blue-200',
        bg_hover: 'hover:bg-blue-100'
    },
    {
        bg_color: 'bg-yellow-200',
        color: 'text-yellow-200',
        bg_hover: 'hover:bg-yellow-100'
    },
    {
        bg_color: 'bg-green-200',
        color: 'text-green-200',
        bg_hover: 'hover:bg-green-100'
    },
    {
        bg_color: 'bg-indigo-200',
        color: 'text-indigo-200',
        bg_hover: 'hover:bg-indigo-100'
    },
    {
        bg_color: 'bg-pink-200',
        color: 'text-pink-200',
        bg_hover: 'hover:bg-pink-100'
    },

]

const NumberRandom = () => {
    return Math.floor(Math.random() * 102);
}

const ColorRandom = () => {
    return Math.floor(Math.random() * 7);
}

function Quote(props) {
    const [numberRandom, setNumberRandom] = useState(NumberRandom());
    const [colorRandom, setColorNumber] = useState(ColorRandom());

    const dispatch = useDispatch();
    const quotes = useSelector(state => state.quotes.list.quotes);
    // const quotes = useSelector(state => state.quotes)
    console.log('list', quotes);

    useEffect(() => {
        dispatch(getQuotes());
    }, []);

    const ClickRandom = () => {
        const newNumber = NumberRandom();
        const newColor = ColorRandom();

        setNumberRandom(newNumber);
        setColorNumber(newColor);

    }

    if (!quotes) {
        return <div>loading...</div>
    }

    return (
        <div className={`w-screen absolute z-0 top-0 h-screen flex ${ColorArray[colorRandom].bg_color}`}>
            <div className="w-2/5 h-auto m-auto bg-gray-50 relative rounded-lg">
                <div className="float-left">
                    <p className={`p-8 text-center text-2xl ${ColorArray[colorRandom].color}`}>
                        <i className={`fas fa-quote-left mr-2 ${ColorArray[colorRandom].color}`}></i>
                        {quotes[numberRandom].quote}</p>
                </div>
                <div className="h-12 float-left w-full">
                    <p className={`text-lg float-right mr-12 ${ColorArray[colorRandom].color}`}>
                        -{quotes[numberRandom].author}</p>
                </div>
                <div className="float-left w-full h-16 mt-8">
                    <button></button>
                    <button></button>
                    <button onClick={ClickRandom}
                        className={`float-right mr-12 text-2xl w-32 h-14 rounded-lg
                          ${ColorArray[colorRandom].bg_color} ${ColorArray[colorRandom].bg_hover}`}>
                        <span className="text-xl text-white">New Quote</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Quote;