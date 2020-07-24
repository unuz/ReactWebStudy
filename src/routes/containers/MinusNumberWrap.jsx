import MinusNumber from '../Redux/MinusNumber';
import { connect } from 'react-redux';

function mapDispatchToProps(dispatch) { //redux의 dispatch를 react의 props로 연결해줌
    return {
        onClick: function (size) {
            dispatch({ type: 'DECREMENT', size: size });
        }
    }
}

// react-redux 
export default connect(null, mapDispatchToProps)(MinusNumber); // connect를 실행하면 리턴값이 함수를 다시 실행 

/*
import React, { Component } from 'react';
import store from '../Redux/store/store';

export default class extends Component {
    render() {
        return (
            <MinusNumber onClick={function (size) {
                /* -버튼을 누를 시 store에 dispatch를 전달 type : 'DECREMENT'와 size : 현재 size 를 전달함
                store.dispatch({ type: 'DECREMENT', size: size });
            }.bind(this)}></MinusNumber>
        );
    }
}
*/