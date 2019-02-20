import { createAction, handleActions } from 'redux-actions';
// 액션 타입 정의
import axios from 'axios';
import { pender } from 'redux-pender';

const GETMEMBERS = 'member/GETMEMBERS';
// const GETMEMBERS_PENDING = 'member/GETMEMBERS_PENDING';
// const GETMEMBERS_SUCCESS = 'member/GETMEMBERS_SUCCESS';
// const GETMEMBERS_FAILURE = 'member/GETMEMBERS_FAILURE';

// export const getMembers = createAction(GETMEMBERS_SUCCESS, params=> {
//     console.log('createAction getMembers params : ', params);
//     return params
// });

// export const getMembersAsync = (params) => ({
//     type: GETMEMBERS,
//     payload: () => axios.get('http://localhost:4000/user', params)
// })

// function getPostAPI(postId) {
//     return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
// }

const getMembersApi = params => (axios.get('http://localhost:4000/user', params).then(res=>res.data));

export const getMembersAsync = createAction(GETMEMBERS, getMembersApi);

// export const getMembersAsync = params => dispatch => {
//     return axios.get('http://localhost:4000/user', params).then(res=>dispatch({
//         type : GETMEMBERS_SUCCESS,
//         payload : res.data
//     }))
// }


// export const getMembersAsync = function (params) {
//     return function (dispatch) {
//          const const xhr = new XMLHttpRequest();
//     };
// };

// **** 초기상태 정의
const initialState = {
    list : [
        {
            _id : 0,
            name : '홍길동'
        },
        {
            _id : 1,
            name : '채승'
        },
        {
            _id : 2,
            name : '잊이'
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
    ...pender({
        type: GETMEMBERS,
        onSuccess: (state, action) => { // 성공했을때 해야 할 작업이 따로 없으면 이 함수 또한 생략해도 됩니다.
            return {
                ...state,
                list: state.list.concat(action.payload),
            }
        },
        onFailure:  (state, action) => {
            return {
                ...state
            }
        }
        // [GETMEMBERS]: (state, action) => {
        //     console.log('handleActions state : ', state);
        //     console.log('handleActions action : ', action);
        //     return {
        //         ...state,
        //         list: state.list.concat(action.payload),
        //     }
        // },
        // [GETMEMBERS_SUCCESS]: (state, action) => {
        //     console.log('handleActions state : ', state);
        //     console.log('handleActions action : ', action);
        //     return {
        //         ...state,
        //         list: state.list.concat(action.payload),
        //     }
        // },
        // [GETMEMBERS_ERROR]: (state, action) => {
        //     console.log('handleActions state : ', state);
        //     console.log('handleActions action : ', action);
        //     return {
        //         ...state,
        //     }
        // },
        // [GETMEMBERS_PENDING]: (state, action) => {
        //     return {
        //         ...state,
        //     };
        // },
    })
}, initialState);