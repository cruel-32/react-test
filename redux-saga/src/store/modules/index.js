import { combineReducers } from 'redux'
import account, { accountSaga } from './account'
import { all } from 'redux-saga/effects';

export function* rootSaga() {
    yield all([accountSaga()]);
}

export default combineReducers({
    account
})
