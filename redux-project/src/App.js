import React, { Component } from 'react';

import './App.css';
import WatingListContainer from './containers/WatingListContainer';
import PaletteContainer from './containers/PaletteContainer'; // **** (1) 불러오기
import CounterContainer from './containers/CounterContainer'; // **** (1) 불러오기
import MemberListContainer from './containers/MemberListContainer'; // **** (1) 불러오기
import UserListContainer from './containers/UserListContainer'; // **** (1) 불러오기

class App extends Component {
  render() {
    console.log('App mounted');
    return (
      <div className="App">
        <PaletteContainer />
        <CounterContainer />
        <WatingListContainer />
        <MemberListContainer />
        <UserListContainer />
      </div>
    );
  }
}

export default App;