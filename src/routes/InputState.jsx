import React, { useState, useRef } from 'react';

const InputState = () => {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: '',
    });
    
    const nameInput = useRef();

    const { name, nickname } = inputs;

    const onChange = (e) => {
        const { name, vale } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const onReset = () => {
        setInputs({
            name: '',
            nickname: '',
        });
        nameInput.current.focus();
    };

    return (
        <div>
            <input name="name" placeholder="name" onChange={onChange} value={name} ref={nameInput}></input>
            <input name="nickname" placeholder="nickname" onChange={onChange} value={nickname}></input>
            <button onClick={onReset}>reset</button>
            <div>
                <b>result</b>{name} ({nickname})
            </div>
        </div>
    );
};

export default InputState;