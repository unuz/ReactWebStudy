import React, { memo } from 'react';

// class Try extends Component {
// constructor(props){
//     super(props);
// 다른동작
// const filtered = this.props.filter(() => {
// console.log('다른동작');
// });
//     state = {
//         result: this.props.result,
//         try: this.props.try
//     }
// }
//     render() {
//         const { tryInfo } = this.props;
//         return (
//             <li>
//                 <div>{tryInfo.try}</div>
//                 <div>{tryInfo.result}</div>
//             </li>
//         );
//     }
// }
const Try = memo(({ tryInfo }) => { //리렌더링을 막기위해 memo
    //props는 부모에서 바꿔야함 바꾸고 싶은 경우 state로 바꿈
    //const [result, setResult] = useState(tryInfo.result);
    //const onClick = () => { setResult('1'); };
    return (
        <li>
            <div>{tryInfo.try}</div>
            <div>{tryInfo.result}</div>
        </li>
    );
});

export default Try;