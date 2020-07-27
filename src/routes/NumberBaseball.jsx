import React, { useState } from 'react';

const NumberBaseball = () => {

    const [result, setResult] = useState();
    const [value, setValue] = useState();
    const [answer, setAnswer] = useState(getNumbers());
    const [tryies, setTryies] = useState([]);

    const getNumbers = () => {
        const item = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const array = [];
        for (let i = 0; i < 4; i += 1) {
            const chosen = item.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
            array.push[chosen];
        };
        return array;
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (value === answer.join('')) {
            setResult('홈런!');
            setTryies([tryies, { try: value, result: '홈런!' }]);
        } else {
            const answerArry = value.split('').map((v) => parseInt(v));
            let strike = 0;
            let ball = 0;
            if (tryies.length >= 9) {
                setResult('10번 넘게 틀려서 실패!! 답은' + { answer } + '였습니다.');
                alert('게임을 다시 시작합니다.');
                setValue('');
                setAnswer(getNumbers());
                setTryies([]);
            } else {
                for (let i = 0; i < 4; i += 1){
                    if(answerArry[i] === answer[i]){
                        strike +=1;
                    }else if(answer.includes(answerArry[i])){
                        ball +=1;
                    }
                }
                setTryies(tryies, {try:value, result:strike +'스트라이크,' +ball+ '볼입니다.'});
                setValue('');
            }

        }
    };


    return (
        <div>
            <h1>{result}</h1>
            <form onSubmit={onSubmit}>
                <input maxLength={4} value={value} onChange={onChange} />
            </form>
            <div>시도 : {tryies.length} </div>
            <ul>
                {tryies.map( (v, i) => {
                    return (
                        <Try key={i+1} tryInfo={v}/>
                    );
                })}
            </ul>
        </div>
    );
};

export default NumberBaseball;