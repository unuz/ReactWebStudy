import React, { memo, useState, useRef, useEffect, useCallback } from 'react';
import '../components/RSP.css';

const rspCoords = {
    rock: 0,
    scissor: '-135px',
    paper: '-284px',
};

const scores = {
    rock: 1,
    scissor: 0,
    paper: -1,
};

const computerChoice = (imgCoord) => {
    return Object.entries(rspCoords).find(function (v) {
        return v[1] === imgCoord;
    })[0];
};

const RSPGame = memo(() => {
    const [result, setResult] = useState('');
    const [imgCoord, setImgCoord] = useState(rspCoords.rock);
    const [score, setSorce] = useState(0);

    const interval = useRef();

    const changeHand = useCallback(() => {
        if (imgCoord === rspCoords.rock) {
            setImgCoord(rspCoords.scissor);
        } else if (imgCoord === rspCoords.scissor) {
            setImgCoord(rspCoords.paper);
        } else if (imgCoord === rspCoords.paper) {
            setImgCoord(rspCoords.rock);
        }
    }, [imgCoord]);
    
    useEffect(() => { //componentDidMount, componentDidUpdate 역할(1:1대응은 아님)
        interval.current = setInterval(changeHand, 100);
        return () => { //componentWillUnmount 역할
            clearInterval(interval.current);
        };
    }, [changeHand]);
    

    const onClickBtn = (choice) => () => {
        clearInterval(interval.current); //interval 초기화
        const myScore = scores[choice];
        const cpuScore = scores[computerChoice(imgCoord)];
        const diff = myScore - cpuScore;
        if (diff === 0) {
            setResult('Draw!!');
        } else if ([-1, 2].includes(diff)) {
            setResult('Lose!!');
            setSorce((prevScore) => prevScore - 1);
        } else {
            setResult('Win!!');
            setSorce((prevScore) => prevScore + 1);
        }
        setTimeout(() => {
            interval.current = setInterval(changeHand(), 100);
        }, 1000);
    };

    return (
        <div className="text-center">
            <div>Rock Scissors Paper Game</div>
            <div id="computer" style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0` }}></div>
            <button id="rock" className="btn" onClick={onClickBtn('rock')}>바위</button>
            <button id="scissor" className="btn" onClick={onClickBtn('scissor')}>가위</button>
            <button id="paper" className="btn" onClick={onClickBtn('paper')}>보</button>
            <div>{result}</div>
            <div>현재 {score}점</div>
        </div>
    );
});

export default RSPGame;