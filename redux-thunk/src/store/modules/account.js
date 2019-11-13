import {createAction, handleActions } from 'redux-actions'

// 액션 타입 정의
const LOGIN = 'accounts/LOGIN';
const LOGOUT = 'accounts/LOGOUT';
const INPUT_ACCOUNT = 'accounts/INPUT_ACCOUNT';

//액션 생성함수
//비동기
export const loginAsync = (payload) => dispatch => {
    return setTimeout(()=>{
        console.log('payload : ', payload);
        dispatch(login(payload))
    },3000)
}
export const login = createAction(LOGIN, payload => payload);
export const logout = createAction(LOGOUT, ()=>{});
export const inputAccount = createAction(INPUT_ACCOUNT, payload => payload);

const initialState = {
    email: 'test@gmail.com',
    password: '',
    username: 'tester',
    authentication: 'N',
    birth: new Date(),
    thumbnail: '',
    name: '',
    phone: '',
    deleted: 'N',
    owns: [],
    managements: [],
    togethers: [],
    message: '',
};

export default handleActions({
    [LOGIN]:(state, action)=>({
        ...state,
        ...action.payload 
    }),
    [LOGOUT]:(state)=>({
        ...state    
    }),
    [INPUT_ACCOUNT]:(state, action)=>({
        ...state,
        ...action.payload 
    }),
},initialState)
