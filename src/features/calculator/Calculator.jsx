import { useState } from "react";
import Button from "./component/Button";
import listButton from './model/Number';
import { evaluate } from 'mathjs';

Calculator.propTypes = {

}

function Calculator(props) {
    const [strInput, setStrInput] = useState('');
    const [valueBefore, setValueBefore] = useState('');
    const [strCal, setStrCal] = useState('');
    const [strRes, setStrRes] = useState('');
    const [showLimit, setShowLimit] = useState(false);
    const [doubleCalc, setDoubleCal] = useState(false);
    const [isCounted, setIsCounted] = useState(false);
    const [limitCal, setLimitCal] = useState(false);

    const onClickValue = (id, value) => {
        const valueEndCal = strCal.charAt(strCal.length - 1);
        if (id === 'AC') {
            setStrInput('');
            setStrCal('');
            setStrRes('');
            setIsCounted(false);
        }
        // Chia
        else if (id === '/') {
            if (isCounted === true) {        //check xem da click vao dau = chua
                setStrCal(strRes + '/');
                setIsCounted(false);
                setStrInput('/');
            }
            else {
                if (valueBefore === '/' || valueBefore === 'x' || valueBefore === '-' || valueBefore === '+') {
                    if (doubleCalc === true) {
                        setStrCal(strCal.slice(0, strCal.length - 2) + value);
                        setDoubleCal(false);
                        setStrInput('/');
                    }
                    else {
                        setStrCal(strCal.slice(0, strCal.length - 1) + value);
                        setStrInput('/');
                    }
                }
                else {
                    setStrInput('/');
                    setStrCal((strCal) => strCal += '/');
                }

            }
            setValueBefore('/');
        }
        // Nhan
        else if (id === 'x') {
            if (isCounted === true) {        //check xem da click vao dau = chua
                setStrCal(strRes + '*');
                setIsCounted(false);
                setStrInput('x');
            }
            else {
                if (valueBefore === '/' || valueBefore === 'x' || valueBefore === '-' || valueBefore === '+') {
                    if (doubleCalc === true) {
                        setStrCal(strCal.slice(0, strCal.length - 2) + '*');
                        setDoubleCal(false);
                        setStrInput('x');
                    }
                    else {
                        setStrCal(strCal.slice(0, strCal.length - 1) + '*');
                        setStrInput('x');
                    }
                }
                else {
                    setStrInput('x');
                    setStrCal((strCal) => strCal += '*');

                }
            }
            setValueBefore('x');
        }

        // tru
        else if (id === '-') {
            if (isCounted === true) {        //check xem da click vao dau = chua
                setStrCal(strRes + '-');
                setIsCounted(false);
                setStrInput('-');
            }
            else {
                if (valueBefore === '-') {
                    setStrCal((strCal.slice(0, strCal.length - 1) + value));
                    // setValueBefore('-');
                }
                else if (valueEndCal === '/' || valueEndCal === 'x' || valueEndCal === '+') {
                    setDoubleCal(true);
                    setStrInput('-');
                    setStrCal((strCal) => strCal + '-');
                    // setValueBefore('-');
                }
                else {
                    setStrInput('-');
                    setStrCal((strCal) => strCal + '-');
                    // setValueBefore('-');
                }
            }
            setValueBefore('-');
        }

        // Cong
        else if (id === '+') {
            if (isCounted === true) {        //check xem da click vao dau = chua
                setStrCal(strRes + '+');
                setIsCounted(false);
                setStrInput('+');
            }
            else {
                if (valueBefore === '/' || valueBefore === 'x' || valueBefore === '-' || valueBefore === '+') {
                    if (doubleCalc === true) {
                        setStrCal(strCal.slice(0, strCal.length - 2) + value);
                        setDoubleCal(false);
                        setStrInput('+');
                    }
                    else {
                        setStrCal(strCal.slice(0, strCal.length - 1) + value);
                        setStrInput('+');
                    }
                }
                else {
                    setStrInput('+');
                    setStrCal((strCal) => strCal + '+');
                }
            }
            setValueBefore('+');
        }

        else if (id === '=' && isCounted === false) {
            // Tinh ket qua.
            let result = '';
            if (strCal === '') {
                console.log('demo');
                result = 'NAN';
                setStrInput('NAN');
                setStrCal('=NAN');
            }
            else {
                result = evaluate(strCal);
                setStrRes(result);
                setStrInput(result);
                setStrCal(strCal + '=' + result);
                let lenCal = (strCal + '=' + result).length;
                if (lenCal >= 28) {
                    setLimitCal(true);
                }
            }
            setIsCounted(true);
        }

        else if (id === 'dot') {
            if (valueBefore === '/' || valueBefore === 'x' || valueBefore === '-' || valueBefore === '+') {
                setStrInput(0 + value);
                setStrCal(strCal + '0' + value);
            }
            else if (strInput === '') {
                setStrInput('0' + value);
                setStrCal('0' + value);
            }
            else if (valueBefore !== 'dot') {
                setStrInput(strInput + value);
                setStrCal((strCal) => strCal + '.');
                setValueBefore('dot');
            }

        }

        else {
            if (strInput.length >= 22) {
                setStrCal(strCal);
                setShowLimit(true);
                setTimeout(() => {
                    setShowLimit(false);
                }, 1000);
            }

            else if (valueBefore === '/' || valueBefore === 'x' || valueBefore === '-' || valueBefore === '+') {
                setStrInput(value);
                setStrCal((strCal) => strCal + value);
                setValueBefore('');
            }
            else {
                // nhap number
                if (isCounted === false) {      //chua click dau =
                    setStrInput(strInput + value);
                    setStrCal(strCal + value);
                    setLimitCal(false);
                }
                else {                          //sau khi da click dau =
                    setStrInput(value);
                    setStrCal(value);
                    setIsCounted(false);
                    setLimitCal(false);
                }
            }
        }
    }

    return (
        <div className="w-80 h-auto m-auto mt-28">

            {/* show result */}
            <section className="w-full h-16 bg-blue-200 font-mono">
                <div className="w-full h-8 text-lg flex flex-row-reverse w-80 break-words">
                    <p
                        className={`pt-2 pb-1 pl-1 pr-1 text-yellow-500 ${limitCal ? 'overflow-auto' : ''}
                        ${!strInput ? 'opacity-0' : 'opacity-700'}`}
                    >{strCal}</p>
                </div>
                <div className="w-full h-8 text-2xl flex flex-row-reverse">
                    {!showLimit ?
                        <p className="pt-2 pb-1 pl-1 pr-1">{strInput ? strInput : '0'}</p>
                        : <p>Limit</p>
                    }

                </div>
            </section>

            {/* button */}
            <section className="w-full h-auto bg-blue-200 grid grid-flow-row grid-cols-4 grid-rows-4 
                        gap-1 p-1">

                {listButton.map((button) => <Button
                    key={button.id}
                    id={button.id}
                    value={button.value}
                    styleButton={button.styleButon}
                    styleNumber={button.styleNumber}
                    onClickGetValue={onClickValue}
                />)}

            </section>
        </div>
    );
}

export default Calculator;