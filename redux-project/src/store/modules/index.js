import { combineReducers } from 'redux';
import counter from './counter';
import wating from './wating';
import member from './member';
import user from './user';
import { penderReducer } from 'redux-pender';

const combination = combineReducers({
    counter,
    wating,
    member,
    user,
    // 다른 리듀서를 만들게되면 여기에 넣어줌..
    pender : penderReducer,
});
console.log('combination : ', combination);
export default combination;