import { createStore } from 'redux'; //redux로 부터 createStore를 로드함

export default createStore(function (state, action) { 
    /*Reducer 생성 (리액트(React) 상태(State) 생성자(Producer))
      Reducer는 두개의 인자를 받아 옴 state와 action을 받아옴
      state = data, action = data에 가해지는 행위들
      기본적으로 state값을 리턴함
    */
    if (state === undefined) {
        /* state 가 undefined면 number에 0을 리턴 (최초의 실행 시) */
        return { number: 0 }
    }

    if (action.type === 'INCREMENT') {
        /* action의 type이 INCREMENT이면 기존의 state.number의 값에 size값을 더해서 리턴
        ...state => state 복제, 추가되는 property값만을 변경
        */
        return { ...state, number: state.number + action.size }
    }

    if (action.type === 'DECREMENT') {
         /* action의 type이 DECREMENT 기존의 state.number의 값에 size값을 빼서 리턴
        ...state => state 복제, 추가되는 property값만을 변경
        */
        return { ...state, number: state.number - action.size }
    }
    return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); //redux devtool 사용