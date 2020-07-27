import React, { useState, useRef } from 'react';

const Hooks = () => {

    const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
    const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const inputRef = useRef(null); //useRef로 dom에 접근

    const onChangeInput = (e) => {
        setValue(e.target.value);
    };

    const onSubmitForm = (e) => {
        e.preventDefault();
        if (parseInt(value) === first * second) {
            setResult('answer : ' + first + ' * ' + second + ' = ' + first * second);
            setFirst(Math.ceil(Math.random() * 9));
            setSecond(Math.ceil(Math.random() * 9));
            setValue('');
            inputRef.current.focus();
        } else {
            setResult('Wrong answer : ' + value);
            setValue('');
            inputRef.current.focus();
        }
    };

    return (
        <div className="text-center">
            <div>Hooks gugudan!</div>
            <br />
            <div> {first} * {second} = ? </div>
            <form onSubmit={onSubmitForm}>
                <input ref={inputRef} onChange={onChangeInput} type="number" value={value} />
                <button>input</button>
            </form>
            <br />
            <div id="result">{result}</div>
        </div>
    );
}
export default Hooks;