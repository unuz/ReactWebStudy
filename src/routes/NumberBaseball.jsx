import React, { useState, memo, useRef } from 'react';
import Try from './Try';
import getNumbers from '../js/getNumbers';

const NumberBaseball = memo(() => { //리렌더링을 막기위해 memo

    const [result, setResult] = useState('');
    const [value, setValue] = useState('');
    const [answer, setAnswer] = useState(getNumbers());
    const [tryies, setTryies] = useState([]);
    const inputRef = useRef(null); //useRef로 dom에 접근

    const onSubmit = (e) => {
        e.preventDefault();
        if (value === answer.join('')) {
            setResult('홈런!');
            setTryies((prevTries) => {
                return [...prevTries, { try: value, result: '홈런!' }]
            });
            alert('게임을 다시 시작합니다!');
            setValue('');
            setAnswer(getNumbers());
            setTryies([]);
        } else {
            const answerArry = value.split('').map((v) => parseInt(v));
            let strike = 0;
            let ball = 0;
            if (tryies.length >= 9) {
                setResult('10번 넘게 틀려서 실패!! 답은' + answer + '였습니다.');
                alert('게임을 다시 시작합니다.');
                setValue('');
                setAnswer(getNumbers());
                setTryies([]);
            } else {
                for (let i = 0; i < 4; i += 1) {
                    if (answerArry[i] === answer[i]) {
                        strike += 1;
                    } else if (answer.includes(answerArry[i])) {
                        ball += 1;
                    }
                }
                setTryies((prevTries) => [...prevTries, { try: value, result: strike + '스트라이크, ' + ball + '볼입니다.' }]);
                setValue('');
                setResult('');
            }
        }
        inputRef.current.focus();
    };

    const onChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <div className="text-center">
            <div>NumberBaseballGame</div>
            <h1>{result}</h1>
            <div>
                <form onSubmit={onSubmit}>
                    <input ref={inputRef} maxLength={4} value={value} onChange={onChange} />
                </form>
            </div>
            <div>시도 : {tryies.length}</div>
            <ul>
                {tryies.map((v, i) => {
                    return (
                        <Try key={i} tryInfo={v} />
                    )
                })}
            </ul>
        </div>
    )
});

export default NumberBaseball;