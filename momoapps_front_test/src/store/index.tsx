import { combineReducers } from 'redux'
import { all } from 'redux-saga/effects';
import account from './account/reducer'
import accountSaga from './account/action'

export const rootSaga = function* rootSaga() {
    yield all([accountSaga()]);
}

export const rootReducer = combineReducers({
    account
})
