import React, { Component } from 'react';
import '../components/RSP.css';
//클래스의 경우 라이프사이클
//-> constructor -> render -> ref -> componentDidMount 
//-> setState/props바뀔 때 -> shouldComponentUpdate(true) -> render -> componentDidUpdate 
//-> 부모가 나를 없앴을 때 -> componentWillUnmount -> 소멸

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


class RSPGame extends Component {
    state = {
        result: '',
        imgCoord: 0,
        score: 0,
    };

    interval;

    componentDidMount() { //컴포넌트가 첫 렌더링된 후, 비동기 요청 (setInterval)
        this.interval = setInterval(this.changeHand, 100);  //1초마다 이미지 좌표를 옮겨서 gif 처럼 보이게 만듦
    };

    // componentDidUpdate() { //리렌더링 후

    // }

    componentWillUnmount() { //컴포넌트가 제거되기 직전, 비동기 요청 정리
        clearInterval(this.interval);
    };

    changeHand = () => {
        const { imgCoord } = this.state;
        if (imgCoord === rspCoords.rock) {
            this.setState({
                imgCoord: rspCoords.scissor,
            });
        } else if (imgCoord === rspCoords.scissor) {
            this.setState({
                imgCoord: rspCoords.paper,
            });
        } else if (imgCoord === rspCoords.paper) {
            this.setState({
                imgCoord: rspCoords.rock,
            });
        }
    };

    onClickBtn = (choice) => () => { //react패턴
        const { imgCoord } = this.state;
        clearInterval(this.interval); //interval 초기화
        const myScore = scores[choice];
        const cpuScore = scores[computerChoice(imgCoord)];
        console.log(cpuScore);
        const diff = myScore - cpuScore;
        console.log(diff);
        if (diff === 0) {
            this.setState({
                result: 'Draw!!',
            });
        } else if ([-1, 2].includes(diff)) {
            this.setState((prevSatate) => {
                return {
                    result: 'Lose!!',
                    score: prevSatate.score - 1,
                };
            });
        } else {
            this.setState((prevState) => {
                return {
                    result: 'Win',
                    score: prevState.score + 1,
                };
            });
        }
        setTimeout(() => {
            this.interval = setInterval(this.changeHand, 100);
        }, 1000)
    };

    render() {
        const { result, score, imgCoord } = this.state;
        return (
            <div className="text-center">
                <div>Rock Scissors Paper Game</div>
                <div id="computer" style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0` }}></div>
                <button id="rock" className="btn" onClick={this.onClickBtn('rock')}>바위</button>
                <button id="scissor" className="btn" onClick={this.onClickBtn('scissor')}>가위</button>
                <button id="paper" className="btn" onClick={this.onClickBtn('paper')}>보</button>
                <div>{result}</div>
                <div>현재 {score}점</div>
            </div>
        )
    }
}

export default RSPGame;