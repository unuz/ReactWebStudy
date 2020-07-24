import DisplayNumber from '../Redux/DisplayNumber';
import { connect } from 'react-redux';

function mpaReduxStateToReactProps(state){ //redux의 state를 react의 props로 매핑해줌
    return {
        number: state.number
    }
}

// react-redux 
export default connect(mpaReduxStateToReactProps, null)(DisplayNumber); // connect를 실행하면 리턴값이 함수 함수를 다시 실행 


/* redux
import React, {Component} from 'react';
import store from '../Redux/store/store';

export default class extends Component{
    state = { number: store.getState().number  /* 초기 state : number값은 store의 number  }

    constructor(props) { /* store에서 값이 변경 되었다는 것을 통보 받고
        super(props);
        store.subscribe(function () { //store 구독 store의 값이 바뀌었을 때 호출
            this.setState({ number: store.getState().number } /* 현재 state.number값에 store의state.number값을 주입 );
        }.bind(this));
    }

    render(){
        return(
            <DisplayNumber number={this.state.number} unit={this.props.unit}></DisplayNumber>
        );
    }
}
*/