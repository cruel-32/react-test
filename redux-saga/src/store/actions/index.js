import { all } from 'redux-saga/effects';
import accountSaga from './account'

export default function* rootSaga() {
    yield all([accountSaga()]);
}
