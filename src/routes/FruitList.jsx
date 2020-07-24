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
import React, { useEffect } from 'react';

const Fruit = React.memo(({ fruit, onRemove, onToggle }) => {
    //const { fruit, taste, id, active } //비구조할당 fruit.fruit -> fruit로 사용
    // useEffect(()=> {
    //     console.log('컴포넌트가 화면에 나타남');
    //     //props -> state
    //     //Rest API
    //     //setInterval, setTimeout
    //     return () => {
    //         //clearInterval, clearTimeout
    //         //라이버르 인스턴스 제거
    //         console.log('컴포넌트가 화면에서 사라짐');
    //     };
    // }, []);
    useEffect(()=>{
        console.log('fruit 값이 설정됨');
        console.log(fruit);
        return () => {
            console.log('fruit 값이 바뀌기 전');
            console.log(fruit);
        }
    }, [fruit]);
    return (
        <div>
            <b style={{
                color: fruit.active ? 'green' : 'black',
                cursor: 'pointer'
            }}
                onClick={() => onToggle(fruit.id)}
            >
                {fruit.fruit}
            </b>
            <span> : {fruit.taste}</span>
            <button onClick={() => onRemove(fruit.id)}> 삭제</button>

        </div>
    );
});



const FruitList = ({ fruits, onRemove, onToggle }) => {
    return (
        <div>
            {
                // key는 고유값을 적어주어야 함
                // key를 기준으로 엘리먼트 추가,수정,삭제 판단하기 때문에 index값은 추천하지 않음
                fruits.map(
                    fruit => (
                        <Fruit
                            key={fruit.id}
                            fruit={fruit}
                            onRemove={onRemove}
                            onToggle={onToggle}
                        />
                    )
                )
            }
        </div>
    );
};

export default React.memo(FruitList); //렌더링 한 결과물을 재사용