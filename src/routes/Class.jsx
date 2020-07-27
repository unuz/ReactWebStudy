import React, { Component } from 'react';

class Class extends Component {
    // 옛날 방식의 함수 사용 ( this 전달 하기 위해 )
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         first: Math.ceil(Math.random() * 9),
    //         second: Math.ceil(Math.random() * 9),
    //         value: '',
    //         result: ''
    //     };
    //     this.onChange = this.onChange.bind(this); // 이 부분을 () => 가 대신함
    // }

    // onChange(e) {
    //     this.setState({
    //         value: e.target.value
    //     });
    // }

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
                    result: 'answer : ' + prevState.first + ' * ' + prevState.second + ' = ' + prevState.first * prevState.second,
                    first: Math.ceil(Math.random() * 9),
                    second: Math.ceil(Math.random() * 9),
                    value: '',
                };
            });
            this.input.focus();
        } else {
            this.setState({
                result: 'Wrong answer',
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
                <div>Class Component gugudan!</div>
                <br />
                <div> {this.state.first} * {this.state.second} = ? </div>
                <form onSubmit={this.onSubmit}>
                    <input ref={this.inputRef} onChange={this.onChange} type="number" value={this.state.value} />
                    <button>input</button>
                </form>
                <br />
                <div id="result">{this.state.result}</div>
            </div >
        )
    }
}
export default Class;