// import {createAction } from 'redux-actions'
import { put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'

// 액션 타입 정의
export const LOGIN_ASYNC = 'account/LOGIN_ASYNC';
export const LOGOUT_ASYNC = 'account/LOGOUT_ASYNC';

export const SET_ACCOUNT = 'account/SET_ACCOUNT';
export const RESET_ACCOUNT = 'account/RESET_ACCOUNT';

export const GET_ACCOUNTS = 'account/GET_ACCOUNTS';
export const SET_ACCOUNTS = 'account/SET_ACCOUNTS';


//비동기 미들웨어 처리. 액션이 호출되면 리듀서까지 도달하기 전 해당 함수를 먼저 거쳐간다.
function* loginAsync(action) {
    try {
        const { data } = yield axios.post(`http://localhost:12354/api/accounts/auth`, action.payload);

        localStorage.setItem('account', JSON.stringify(data));
        
        yield put({ type: SET_ACCOUNT, payload: data });
    } catch (e) {
        localStorage.removeItem('account')
        yield put({ type: RESET_ACCOUNT });
    }

}
function* logoutAsync(action) {
    const payload = {
        email: null,
        username: null,
        authentication: null,
        birth: null,
        thumbnail: null,
        name: null,
        phone: null,
        deleted: null,
        owns: null,
        managements: null,
        togethers: null,
        message: null,
        _id: null,
    }
    
    try {
        const { data, error } = yield axios.delete(`http://localhost:12354/api/accounts/auth`);
        
        if(data){
            localStorage.removeItem('account')
            yield put({ type: RESET_ACCOUNT, payload});
        } else {
            throw error            
        }
    } catch (e) {
        console.error('로그아웃 실패 : ', e)
    }
}

function* getAccounts(){
    try {
        const { data, error } = yield axios.get(`http://localhost:12354/api/accounts`);
        
        if(data){
            yield put({ type: SET_ACCOUNTS, data });
        } else {
            throw error            
        }
    } catch (e) {
        console.error('목록 불러오기 : ', e)
    }
}

export default function* accountSaga() {
    yield takeEvery(LOGIN_ASYNC, loginAsync);
    yield takeEvery(LOGOUT_ASYNC, logoutAsync);
    yield takeEvery(GET_ACCOUNTS, getAccounts);
}
