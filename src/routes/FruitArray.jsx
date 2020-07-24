import React, { useState, useRef, useMemo, useCallback } from 'react';
import FruitList from './FruitList';
import CrateFruit from './CrateFruit';

const FruitArray = () => {

    const CountActiveFruit = (fruits) => {
        console.log('활성 과일 수 세는 중 ...');
        return fruits.filter(fruit => fruit.active).length;
    }

    const [inputs, setInputs] = useState({
        fruit: '',
        taste: '',
    });

    const { fruit, taste } = inputs;

    const onChange = useCallback((e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    }, [inputs]);

    const [fruits, setFruits] = useState([
        { id: 1, fruit: '사과', taste: '빨개', active: true },
        { id: 2, fruit: '바나나', taste: '맛있어', active: false },
        { id: 3, fruit: '복숭아', taste: '딱복', active: false },
        { id: 4, fruit: '수박', taste: '시원해', active: false },
        { id: 5, fruit: '참외', taste: '오이맛', active: false }
    ]);


    const nextId = useRef(6); //리렌더링 하지 않고 사용

    const onCreate = useCallback(() => {
        const fruit = {
            id: nextId.current,
            ...inputs,
        };
        //setFruits([...fruits, fruit]);
        setFruits(fruits => fruits.concat(fruit));
        setInputs({
            fruit: '',
            taste: ''
        });
        nextId.current += 1; //7
    }, [inputs]);

    const onRemove = useCallback(id => {
        const del = window.confirm('삭제하시겠습니까?');
        if (del) {
            setFruits(fruits => fruits.filter(fruit => fruit.id !== id));
        }
    }, []);

    const onToggle = useCallback(id => {
        setFruits(fruits => fruits.map(
            fruit => fruit.id === id
                ? { ...fruit, active: !fruit.active }
                : fruit
        ));
    }, []);

    const count = useMemo(() => CountActiveFruit(fruits), [fruits]);

    return (
        <div className="text-center">
            <div>Array</div>
            <CrateFruit
                fruit={fruit}
                taste={taste}
                onChange={onChange}
                onCreate={onCreate}
            />
            <FruitList
                fruits={fruits}
                onRemove={onRemove}
                onToggle={onToggle}
            />
            <div>{count}</div>
        </div>
    );
};

export default React.memo(FruitArray);