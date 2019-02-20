import { createAction, handleActions } from 'redux-actions';
import axios from 'axios';
import produce from 'immer';

// 액션 타입 정의
const GETUSERS = 'user/GETUSERS';

// const getUsersApi = params => (axios.get('http://localhost:4000/user', params).then(res=>res.data));
// export const getUsersAsync = createAction(GETUSERS, getUsersApi);

export const getUsersAsync = users => dispatch => {
    return  axios.get('http://localhost:4000/user').then(res=> dispatch({
            type : GETUSERS,
            payload : res.data
    }))
}

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
        {
            _id : 3,
            name : '쿵실'
        },
    ]
};

export default (state = initialState, { type, payload, error }) => {
    console.log('modules user reducer type : ', type);
    switch (type) {
        case GETUSERS:
            console.log('type GETUSERS payload : ', payload);
            return {
                ...state,
                users: payload
            }
        case 'user/GETUSERS_SUCCESS':
            console.log('type GETUSERS_SUCCESS payload : ', payload);
            return {
                list : state.list.concat(payload)
            }
        case 'saga':
            console.log('type saga payload : ', payload);
            return {
                ...state,
                users: payload
            }
        default:
            console.log('type default');
            return state
    }
}
// export default handleActions({
//     ...pender({
//         type: GETUSERS,
//         // 성공했을때 해야 할 작업이 따로 없으면 이 함수 또한 생략해도 됩니다.
//         onSuccess: (state, action) =>
//             produce(state, nextState=> {
//                     action.payload.forEach(item=>nextState.list.push(item))
//                 }
//             )
//         ,
//         onFailure:  (state, action) => {
//             return {
//                 ...state
//             }
//         }
//     })
// }, initialState);