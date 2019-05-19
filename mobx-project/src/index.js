import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react'; // MobX 에서 사용하는 Provider
import './index.scss';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import RootStore from './stores';

const root = new RootStore(); // *** 루트 스토어 생성

ReactDOM.render(
  <Provider {...root}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// registerServiceWorker();
