import React, { memo, useState, useRef } from 'react';
import '../components/Response.css';

const ResponseCheck = memo(() => {
    const [state, setState] = useState('waitting');
    const [message, setMessage] = useState('Click to start');
    const [result, setResult] = useState([]);

    //화면에 영향을 주지 않는 변수는 useRef로 선언
    const timeOut = useRef(null);
    const startTime = useRef();
    const endTime = useRef();

    const onClickScreen = () => {
        if (state === 'waitting') {
            timeOut.current = setTimeout(() => {
                setState('now');
                setMessage('Now Click!!!');
                startTime.current = new Date();
            }, Math.floor(Math.random() * 1000) + 2000);
            setState('ready');
            setMessage('Click when it is green');

        } else if (state === 'ready') {
            clearTimeout(timeOut.current); //setTime 초기화
            setState('waitting');
            setMessage('You are impatient');
        } else if (state === 'now') {
            endTime.current = new Date();
            setState('waitting');
            setMessage('Click to start');
            setResult((prevResult) => {
                return [...prevResult, endTime.current - startTime.current];
            });
            console.log('Reaction rate : ' + (endTime.current - startTime.current) + 'ms');
        }
    };

    const onClickReset = () => {
        setResult([]);
    }

    const renderAverage = () => {
        return (
            result.length === 0
                ? null
                :
                <>
                    <div>Average Time : {result.reduce((a, c) => a + c) / result.length}ms</div>
                    <button onClick={onClickReset}>reset</button>
                </>
        );
    }

    return (
        <div className="text-center">
            <div>ResponseCheck</div>
            <div
                id="screen"
                className={state}
                onClick={onClickScreen}>
                {message}
            </div>
            {renderAverage()}
        </div>
    );
});

export default ResponseCheck;