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
        { id: 1, fruit: 'apple', taste: 'red', active: true },
        { id: 2, fruit: 'banana', taste: 'delicious', active: false },
        { id: 3, fruit: 'peach', taste: 'fresh', active: false },
        { id: 4, fruit: 'watermelon', taste: 'sweet', active: false },
        { id: 5, fruit: 'yellowwatermelon', taste: 'cool', active: false }
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
        const del = window.confirm('Are you sure you want to delete?');
        if (del) {
            setFruits(fruits => fruits.filter(fruit => fruit.id !== id));
        }
    }, []);

    const onToggle = useCallback(id => { //특정 함수를 재사용 하기 위해 useCallback
        setFruits(fruits => fruits.map(
            fruit => fruit.id === id
                ? { ...fruit, active: !fruit.active }
                : fruit
        ));
    }, []);

    const count = useMemo(() => CountActiveFruit(fruits), [fruits]); //연산된 값을 재사용 하기위해 useMemo

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
            <div>select : {count}</div>
        </div>
    );
};

export default React.memo(FruitArray);