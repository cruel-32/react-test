import { createAction, handleActions } from 'redux-actions';
// 액션 타입 정의

const CHANGE_INPUT = 'waiting/CHANGE_INPUT'; // 인풋 값 변경
const CREATE = 'waiting/CREATE'; // 명단에 이름 추가
const ENTER = 'waiting/ENTER'; // 입장
const LEAVE = 'waiting/LEAVE'; // 나감

let id = 3;

// 액션 생섬함수 정의
// export const changeInput = text  => ({type: CHANGE_INPUT, payload:text});
// export const create = text => ({type: CREATE, payload:text});
// export const enter = id => ({type: ENTER, payload:id});
// export const leave = id => ({type: LEAVE, payload:id});

// createAction를 사용한 액션 생섬함수 정의
export const changeInput = createAction(CHANGE_INPUT, (text)=>{
    return text
});
// export const changeInput = createAction(CHANGE_INPUT); //생략가능

export const create = createAction(CREATE, text => ({ text, id: id++ }));
export const enter = createAction(ENTER,id=>id);
export const leave = createAction(LEAVE,id=>id);

// **** 초기상태 정의
const initialState = {
    input : '',
    list : [
        {
            id : 0,
            name : '홍길동',
            entered: true,
        },
        {
            id : 1,
            name : '채승',
            entered: true,
        },
        {
            id : 2,
            name : '잊이',
            entered: true,
        },
    ]
};


// **** 리듀서 작성
// export default function wating(state = initialState, action) {
//     switch (action.type) {
//         case CHANGE_INPUT:
//             return {
//                 ...state,
//                 waitingList : action.color,
//             };
//         case CREATE:
//             return {
//                 ...state,
//                 number: state.number + 1,
//             };
//         case ENTER:
//             return {
//                 ...state,
//                 number: state.number - 1,
//             };
//         case LEAVE:
//             return {
//                 ...state,
//                 number: state.number - 1,
//             };
//         default:
//             return state;
//     }
// }

export default handleActions({
    [CHANGE_INPUT]: (state, action) => ({
        ...state,
        input: action.payload,
    }),
    [CREATE]: (state, action) => ({
        ...state,
        list: state.list.concat({
            id: action.payload.id,
            name: action.payload.text,
            entered: false,
        }),
    }),
    [ENTER]: (state, action) => ({
        ...state,
        list: state.list.map(
            item =>
            item.id === action.payload
                ? { ...item, entered: !item.entered }
                : item
        ),
    }),
    [LEAVE]: (state, action) => ({
        ...state,
        list: state.list.filter(item => item.id !== action.payload),
    }),
}, initialState);