import React, {memo} from 'react';

const Try = memo(({ tryInfo }) => { //리렌더링을 막기위해 memo
    return (
        <li>
            <div>{tryInfo.try}</div>
            <div>{tryInfo.result}</div>
        </li>
    );
});

export default Try;