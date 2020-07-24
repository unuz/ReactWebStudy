import React from 'react';

const CrateFruit = ({ fruit, taste, onChange, onCreate }) => {
    return (
        <div>
            <input
                name="fruit"
                placeholder="과일"
                onChange={onChange}
                value={fruit}
            />

            <input
                name="taste"
                placeholder="맛"
                onChange={onChange}
                value={taste}
            />
            <button onClick={onCreate}>추가</button>
        </div>
    );
};

export default CrateFruit;