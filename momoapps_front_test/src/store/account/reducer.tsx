import { createReducer } from 'typesafe-actions';
import { SET_ACCOUNT, SET_ACCOUNTS } from './action'

export const initialState:IAccount = {
    _id : "",
    username : "",
    thumbnail : "",
    
    email : undefined,
    authentication : undefined,
    birth : new Date(),
    name : undefined,
    phone : undefined,
    deleted : undefined,
    owns : undefined,
    managements : undefined,
    togethers : undefined,
    message : undefined,
}

export const getAccountInitialState = ():IAccount | {} => {
    const accountStorage = localStorage.getItem('account');

    return accountStorage ? JSON.parse(accountStorage) as IAccount : initialState
}

export default createReducer(initialState)
    .handleAction(SET_ACCOUNT, (state:IAccount, action:IAction<IAccount>) => ({
        ...state, ...action.payload
    }))
    .handleAction(SET_ACCOUNTS,  (state:IAccount, action:IAction<IAccount>) => ({
        ...state, ...action.payload
    }))