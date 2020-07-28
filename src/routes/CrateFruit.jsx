import React from 'react';

const CrateFruit = ({ fruit, taste, onChange, onCreate }) => {
    return (
        <div>
            <input
                name="fruit"
                placeholder="fruit"
                onChange={onChange}
                value={fruit}
            />

            <input
                name="taste"
                placeholder="taste"
                onChange={onChange}
                value={taste}
            />
            <button onClick={onCreate}>insert</button>
        </div>
    );
};

export default React.memo(CrateFruit);