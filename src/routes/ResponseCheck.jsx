import React, { memo, useState, useRef } from 'react';
import '../components/Response.css';

const ResponseCheck = memo(() => {
    const [state, setState] = useState('waitting');
    const [message, setMessage] = useState('클릭해서 시작하세요');
    const [result, setResult] = useState([]);

    const timeOut = useRef(null);
    const startTime = useRef();
    const endTime = useRef();

    const onClickScreen = () => {
        if (state === 'waitting') {
            timeOut.current = setTimeout(() => {
                setState('now');
                setMessage('지금 클릭!!!');
                startTime.current = new Date();
            }, Math.floor(Math.random() * 1000) + 2000);
            setState('ready');
            setMessage('초록색이 되면 클릭하세요');

        } else if (state === 'ready') {
            clearTimeout(timeOut.current);
            setState('waitting');
            setMessage('성급하시네요');
        } else if (state === 'now') {
            endTime.current = new Date();
            setState('waitting');
            setMessage('클릭해서 시작하세요');
            setResult((prevResult) => {
                return [...prevResult, endTime.current - startTime.current];
            });
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
                    <div>평균 시간 : {result.reduce((a, c) => a + c) / result.length}ms</div>
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