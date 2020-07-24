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
            setTryies([tryies, {try : value, result:'홈런!'}]);
        }else{
            const answerArry = value.split('').map( (v) => parseInt(v));
            
        }
    };


    return (
        <div>

        </div>
    );
};

export default NumberBaseball;