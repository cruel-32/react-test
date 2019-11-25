import { handleActions } from 'redux-actions'
import { SET_ACCOUNT, RESET_ACCOUNT, SET_ACCOUNTS } from 'store/actions/account'

const getInitialState = ():IAccount | {} => {
    const accountStorage = localStorage.getItem('account');

    return accountStorage ? JSON.parse(accountStorage) as IAccount : {}
}

//리듀더. 순수함수. state를 변경하는 것이 아니라 새로운 state를 만들어낸다.
export default handleActions({
    [SET_ACCOUNT]:(state, action)=>({
        ...state,
        ...action.payload
    }),
    [RESET_ACCOUNT]:()=> getInitialState(),
    [SET_ACCOUNTS]:(state, action)=>({
        ...state,
        ...action.payload
    }),
}, getInitialState())


// (alias)
// handleActions<{} | IAccount>(
//     reducerMap: ReducerMap<{} | IAccount, {} | IAccount>, initialState: {} | IAccount, options?: Options | undefined
// ): ReduxCompatibleReducer<{} | IAccount, {} | IAccount> (+2 overloads)

