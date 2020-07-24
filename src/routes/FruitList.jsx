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

const Fruit = ({ fruit, onRemove, onToggle }) => {
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
}



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

export default FruitList;