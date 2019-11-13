import {createAction, handleActions } from 'redux-actions'
import { put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'

// 액션 타입 정의
const LOGIN = 'account/LOGIN';
const LOGOUT = 'account/LOGOUT';
const INPUT_ACCOUNT = 'account/INPUT_ACCOUNT';

const LOGIN_SUCCESS = 'account/LOGIN_SUCCESS';
const LOGIN_FAILURE = 'account/LOGIN_FAILURE';

//액션 생성함수
export const logout = createAction(LOGOUT, ()=>{});
export const inputAccount = createAction(INPUT_ACCOUNT, payload => payload);

function* loginAsync(action) {
    try {
        console.log('action : ', action);
        const {data} = yield axios.get(`http://localhost:12354/api/accounts`);
        console.log('data : ', data);
        yield put({ type: LOGIN_SUCCESS, payload: data });
    } catch (e) {
        console.log('e : ', e);
        yield put({ type: LOGIN_FAILURE, payload: e });
    }
}

export function* accountSaga() {
    yield takeEvery(LOGIN, loginAsync);
}

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
    [LOGIN_SUCCESS]:(state, action)=>({
        ...state,
        ...action.payload 
    }),
    [LOGIN_FAILURE]:(state, action)=>({
        ...state,
        ...action.payload 
    }),
},initialState)
