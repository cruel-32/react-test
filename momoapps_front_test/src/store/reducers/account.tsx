import { handleActions } from 'redux-actions'
import { SET_ACCOUNT, RESET_ACCOUNT, SET_ACCOUNTS } from 'store/actions/account'

interface Account {
    _id:string;
    email:string;
    username:string;
    authentication:string;
    birth?:Date;
    thumbnail?:string;
    name?:string;
    phone?:number;
    deleted:string;
    owns?:string[];
    managements?:string[];
    togethers?:string[];
    message?:string;
}

const getInitialState = ()=> {
    const accountStorage = localStorage.getItem('account');

    return accountStorage ? JSON.parse(accountStorage) : {
        _id: '',
        email: '',
        username: '',
        authentication: 'N',
        birth: null,
        thumbnail: null,
        name: null,
        phone: null,
        deleted: 'N',
        owns: null,
        managements: null,
        togethers: null,
        message: null,
    }
}

//리듀더. 순수함수. state를 변경하는 것이 아니라 새로운 state를 만들어낸다.
export default handleActions({
    [SET_ACCOUNT]:(state, action)=>({
        ...state,
        ...action.payload,
    }),
    [RESET_ACCOUNT]:()=>({
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
    }),
    [SET_ACCOUNTS]:(state, action)=>({
        ...state,
        ...action.payload
    }),
}, getInitialState())
