import React, { useReducer } from 'react'
import { connect } from 'react-redux'
import { startClock, serverRenderClock } from '../store'
import Counter from '../components/counter'
import Link from 'next/link'

const reducer = (state, action) => {
  return {
    ...state,
    [action.name] : action.value
  }
}

const UseReducer = props => {
  const [state, dispatch] = useReducer(reducer, {
    name : '',
    job:'',
    place:'',
  });

  const changeValue = e => {
    dispatch(e.target)
  }

  return (
    <div>
        <Link href="/"><a>main</a></Link>
        <Counter />

        <div>name : {state.name}</div>
        <div>job : {state.job}</div>
        <div>place : {state.place}</div>

        <input type="text" onChange={changeValue} value={state.name} name="name" />
        <input type="text" onChange={changeValue} value={state.job} name="job" />
        <input type="text" onChange={changeValue} value={state.place} name="place" />
    </div>
  )
}


export default connect()(UseReducer)
