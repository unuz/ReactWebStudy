import React, { useState, useRef } from 'react';
import Try from './Try';
import CrateFruit from './CrateFruit';

const Cycle = () => {

    const [inputs, setInputs] = useState({
        fruit: '',
        taste: '',
    });

    const { fruit, taste } = inputs;

    const onChange = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const [fruits, setFruits] = useState([
        { id: 1, fruit: '사과', taste: '빨개', active: true },
        { id: 2, fruit: '바나나', taste: '맛있어', active: false },
        { id: 3, fruit: '복숭아', taste: '딱복', active: false },
        { id: 4, fruit: '수박', taste: '시원해', active: false },
        { id: 5, fruit: '참외', taste: '오이맛', active: false }
    ]);


    const nextId = useRef(6); //리렌더링 하지 않고 사용

    const onCreate = () => {
        const fruit = {
            id: nextId.current,
            ...inputs,
        };
        setFruits([...fruits, fruit]);
        //setFruits(fruits.concat(fruit));
        setInputs({
            fruit: '',
            taste: ''
        });
        nextId.current += 1; //7
    }

    const onRemove = id => {
        const del = window.confirm('삭제하시겠습니까?');
        if (del) {
            setFruits(fruits.filter(fruit => fruit.id !== id));
        }
    };

    const onToggle = id => {
        setFruits(fruits.map(
            fruit => fruit.id === id
                ? { ...fruit, active: !fruit.active }
                : fruit
        ));
    };

    return (
        <div className="text-center">
            <div>Repeat</div>
            <CrateFruit
                fruit={fruit}
                taste={taste}
                onChange={onChange}
                onCreate={onCreate}
            />
            <Try
                fruits={fruits}
                onRemove={onRemove}
                onToggle={onToggle}
            />
        </div>
    );
};

export default Cycle;