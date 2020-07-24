import React, { useState } from 'react';
import Try from './Try';

const Cycle = () => {

    const [fruit] = useState([
        { fruit: '사과', taste: '빨개' },
        { fruit: '바나나', taste: '맛있어' },
        { fruit: '복숭아', taste: '딱복' },
        { fruit: '수박', taste: '시원해' },
        { fruit: '참외', taste: '오이맛' }
    ]);

    return (
        <div className="text-center">
            <div>Repeat</div>
            <br />
            <ul /* react 반복문 */>
                {fruit.map((v, i) => {
                    return (
                        // key는 고유값을 적어주어야 함
                        // key를 기준으로 엘리먼트 추가,수정,삭제 판단하기 때문에 성능 문제로 index값은 추천하지 않음
                        <Try key={v.fruit + v.taste} value={v} index={i} />
                    );
                })}
            </ul>
        </div>
    );
};

export default Cycle;