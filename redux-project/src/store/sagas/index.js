import { call, spawn, put, takeEvery } from "redux-saga/effects"
import * as userActions from '../modules/user';
import axios from 'axios'

function* fetchUsersSaga() {
    console.log('sagas fetchUsersSaga');
    try {
        // 이부분을 call 메소드를 이용해 테스트가 쉽게 바꿀 수 있다.
        // (yeild를 사용하기 때문에 next 명령어로 반복 가능하므로)
        const { data } = yield axios.get('http://localhost:4000/user')
        yield console.log('sagas fetchUsersSaga data : ', data);
        yield console.log('sagas fetchUsersSaga userActions : ', userActions);
        // yield put(getUsersAsyncSaga(data))
        yield put({
            type: 'user/GETUSERS_SUCCESS',
            payload: data
        })
    } catch (error) {
        yield put({
            type: 'user/GETUSERS_FAILURE',
        })
    }
}
function* watchUser() {
    // type의 action이 실행되면 fetchUsersSaga도 항상(Every) 실행한다
    console.log('sagas watchUser');
    yield takeEvery('saga', fetchUsersSaga)
}

// 모든 listener(watcher)를 하나로 묶어준다.
// rootReducer에 묶어주는 그것과 같다고 보면 된다.
export default function* root() {
    console.log('sagas root');
    yield spawn(watchUser)
}