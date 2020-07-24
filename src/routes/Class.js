import React, { Component } from 'react';

class Class extends Component {

    state = {
        first: Math.ceil(Math.random() * 9),
        second: Math.ceil(Math.random() * 9),
        value: '',
        result: ''
    };

    onChange = (e) => {
        this.setState({
            value: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (parseInt(this.state.value) === this.state.first * this.state.second) {
            this.setState((prevState) => {
                //이전 상태값으로 새 상태값을 만들어주는 경우 함수로 사용
                return {
                    result: '정답 : ' + prevState.first + ' * ' + prevState.second + ' = ' + prevState.first * prevState.second,
                    first: Math.ceil(Math.random() * 9),
                    second: Math.ceil(Math.random() * 9),
                    value: '',
                };
            });
            this.input.focus();
        } else {
            this.setState({
                result: '땡',
                value: '',
            });
            this.input.focus();
        }
    }

    inputRef = (e) => {
        this.input = e;
    }

    render() {
        return (
            <div className="text-center">
                <div>Class Component를 이용한 구구단!</div>
                <br />
                <div> {this.state.first} * {this.state.second} = ? </div>
                <form onSubmit={this.onSubmit}>
                    <input ref={this.inputRef} onChange={this.onChange} type="number" value={this.state.value} />
                    <button>입력</button>
                </form>
                <br />
                <div id="result">{this.state.result}</div>
            </div >
        )
    }
}
export default Class;