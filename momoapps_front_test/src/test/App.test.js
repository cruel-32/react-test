import { shallow, mount } from 'enzyme';

import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from 'store/reducers'
import rootSaga from 'store/actions'
import { Button } from '@material-ui/core';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);

describe('App mount test', ()=>{

  it('app', ()=>{
    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    )
    sagaMiddleware.run(rootSaga)

    const onButton = wrapper.find(Button)
    const offButton = wrapper.find('.app__button--off')


    // console.log('text : ', onButton.text() );
    const eventMock = {
      target: {
        getAttribute: function() {
          return button.props()
        }
      }
    };

    offButton.props().onClick(eventMock);

  })

})
