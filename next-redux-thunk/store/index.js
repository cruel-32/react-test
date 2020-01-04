import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const dummyText = 'abadfwqerqwerrwqerwer'
const dummy = []
for(let i=0; i<100000; i++){
  dummy.push(dummyText)
}

const exampleInitialState = {
  lastUpdate: 0,
  light: false,
  count: 0,
  dummy
}

export const actionTypes = {
  TICK: 'TICK',
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET',
}

export const dummyActionTypes = {
  FREE: 'FREE',
  INIT: 'INIT',
}

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case actionTypes.TICK:
      return Object.assign({}, state, {
        lastUpdate: action.ts,
        light: !!action.light,
      })
    case actionTypes.INCREMENT:
      return Object.assign({}, state, {
        count: state.count + 1,
      })
    case actionTypes.DECREMENT:
      return Object.assign({}, state, {
        count: state.count - 1,
      })
    case actionTypes.RESET:
      return Object.assign({}, state, {
        count: exampleInitialState.count,
      })
    case dummyActionTypes.FREE:
      return Object.assign({}, state, {
        dummy : null,
      })
    case dummyActionTypes.INIT:
      return Object.assign({}, state, {
        dummy
      })
    default:
      return state
  }
}

// ACTIONS
export const serverRenderClock = isServer => dispatch => {
  return dispatch({ type: actionTypes.TICK, light: !isServer, ts: Date.now() })
}

export const startClock = dispatch => {
  return setInterval(() => {
    dispatch({ type: actionTypes.TICK, light: true, ts: Date.now() })
  }, 1000)
}

export const incrementCount = () => {
  return { type: actionTypes.INCREMENT }
}

export const decrementCount = () => {
  return { type: actionTypes.DECREMENT }
}

export const resetCount = () => {
  return { type: actionTypes.RESET }
}


export const dummyFree = () => {
  return { type: dummyActionTypes.FREE }
}

export const dummyInit = () => {
  return { type: dummyActionTypes.INIT }
}

export function initializeStore(initialState = exampleInitialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}
