import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { startClock, serverRenderClock } from '../store'
import Examples from '../components/examples'

// class Index extends React.Component {
//   static getInitialProps({ reduxStore, req }) {
//     const isServer = !!req
//     reduxStore.dispatch(serverRenderClock(isServer))

//     return {}
//   }

//   componentDidMount() {
//     const { dispatch } = this.props
//     this.timer = startClock(dispatch)
//   }

//   componentWillUnmount() {
//     clearInterval(this.timer)
//   }

//   render() {
//     return <Examples />
//   }
// }


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
    <Examples />
  )
}

Index.getInitialProps = ({ reduxStore, req }) => {
  const isServer = !!req
  reduxStore.dispatch(serverRenderClock(isServer))

  return {}
}


export default connect()(Index)
