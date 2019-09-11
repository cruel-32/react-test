import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react'; // MobX 에서 사용하는 Provider
import App from 'App';
import * as serviceWorker from './serviceWorker';
import RootStore from './stores';
import 'styles/common.scss';

const root = new RootStore(); // *** 루트 스토어 생성
ReactDOM.render(
  <Provider {...root}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
