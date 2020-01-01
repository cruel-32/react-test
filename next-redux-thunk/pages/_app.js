import App from 'next/app'
import React from 'react'
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'

const MyApp = props => {
  const { Component, pageProps, reduxStore } = props

  console.log('Component : ', Component)
  console.log('pageProps : ', pageProps)
  console.log('reduxStore : ', reduxStore)

  return (
    <Provider store={reduxStore}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default withReduxStore(MyApp)
