import React from 'react';
import ReactDOM from 'react-dom';
// createStore 와 루트 리듀서 불러오기
import { createStore, applyMiddleware} from 'redux';
import rootReducer from './store/modules';
// **** (1) Provider 불러오기
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//middle ware
import ReduxThunk from 'redux-thunk';
import penderMiddleware from 'redux-pender';
import createSagaMiddleware from 'redux-saga'
import root from './store/sagas';

console.log('root : ', root);

const sagaMiddleware = createSagaMiddleware()


// 리덕스 개발자도구 적용
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
// console.log('devTools : ', devTools);

console.log('rootReducer : ', rootReducer);
const store = createStore(rootReducer, applyMiddleware(ReduxThunk,penderMiddleware(),sagaMiddleware))
// createStore(rootReducer, devTools);
sagaMiddleware.run(root)

// **** (2) Provider 렌더링해서 기존의 App 감싸주기
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();