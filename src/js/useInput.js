import { useReducer, useCallback } from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'CHANGE':
            return {
                ...state,
                [action.name]: action.value
            };

        case 'RESET':
            return Object.keys(state).reduce((acc, current) => {
                acc[current] = '';
                return acc;
            }, {});
            
        default:
            throw new Error('Unhandler action');
    }
}

function useInputs(initalForm) { //해당 인풋 폼에서 관리할 초기 값을 파라미터로 받음
    const [form, dispatch] = useReducer(reducer, initalForm);
    const onChange = useCallback(e => {
        const { name, value } = e.target;
        dispatch({
            type: 'CHANGE',
            name,
            value
        });
    }, []);

    const reset = useCallback(() => dispatch({ type: 'RESET' }), []);

    return [form, onChange, reset];

    // const [form, setForm] = useState(initalForm);
    // const onChange = useCallback(e => {
    //     const { name, value } = e.target; //이벤트 객체를 가져와서 name, value 값을 가져옴
    //     setForm(form => ({ ...form, [name]: value })); //form의 name 값을 value로 설정
    // }, []);
    // const reset = useCallback(() => setForm(initalForm), [initalForm]);//값 초기화
    //return [form, onChange, reset];
};

export default useInputs;