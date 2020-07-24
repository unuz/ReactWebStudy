import React, { Component } from 'react';

export default class AddNumber extends Component {
    state = { size: 1  /* 초기 sate size : 1 */ }
    render() {
        return (
            <div className="div-redux">
                <h1>Add Number</h1>
                <input type="text" value={this.state.size} onChange={function (e) {
                    /* value값이 변경 되면 변경 된 state를 value로 넣어 줌 */
                    this.setState({ size: Number(e.target.value) })
                }.bind(this)}></input>
                
                <input type="button" value="+" onClick={function () {
                    /* +버튼을 누를 시 store에 dispatch를 전달 type : 'INCREMENT'와 size : 현재 size 를 전달함 */
                    this.props.onClick(this.state.size);
                }.bind(this)}></input>
            </div>
        );
    }
}