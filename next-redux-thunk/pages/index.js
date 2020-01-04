import React, { useEffect } from 'react'
import { connect, useSelector } from 'react-redux'
import Link from 'next/link'
import { startClock, serverRenderClock, dummyFree, dummyInit} from '../store'
import Examples from '../components/examples'

const Index = props => {
  console.log('props : ', props)
  let timer;

  useEffect(()=>{
    const { dispatch } = props
    console.log('did update dispatch : ', dispatch)
    timer = startClock(dispatch)
    return ()=>{
      console.log('뒷정리')
    } 
  },[timer])


  return (
    <div>
      <menu>
        <Link href="/useReducer"><a>useReducer</a></Link>
        <Link href="/useMemo"><a>useMemo</a></Link>
      </menu>
      <Examples />
      <button onClick={dummyFree}>dummyFree</button>
      <button onClick={dummyInit}>dummyInit</button>
    </div>
  )
}

Index.getInitialProps = ({ reduxStore, req }) => {
  const isServer = !!req
  reduxStore.dispatch(serverRenderClock(isServer))

  return {}
}


export default connect()(Index)
