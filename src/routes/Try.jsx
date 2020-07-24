//import React, { Component } from 'react';
// class Try extends Component {
//     render() {
//         return (
//             <li>
//                 <b>{this.props.value.fruit}</b> : {this.props.value.taste}
//             </li>
//         );
//     }
// }
import React from 'react';

const Try = (props) => {
    return (
        // key는 고유값을 적어주어야 함
        // key를 기준으로 엘리먼트 추가,수정,삭제 판단하기 때문에 index값은 추천하지 않음
        <li key={props.value.fruit + props.value.taste} >
            <b>{props.value.fruit}</b> : {props.value.taste}
        </li>
    );
};

export default Try;