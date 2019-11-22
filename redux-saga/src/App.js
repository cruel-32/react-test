import React, { useState } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

import 'styles/App.scss';
import LoginPage from 'containers/login'
import AccountDetail from 'containers/accountDetail'
import AccountList from 'containers/accountList'

function App() {
  const [mode, setMode] = useState('on');

  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Link to="/">home</Link>&nbsp;&nbsp;
          <Link to={`/account/${'tester'}`}>AccountDetail</Link>&nbsp;&nbsp;
          <Link to="/account?sort=name">list</Link>&nbsp;&nbsp;
        </div>
        <Route exact path='/'>
          <LoginPage source={mode} />
        </Route>
        <Route exact path='/account/:_id'>
          <AccountDetail source={mode}/>
        </Route>
        <Route exact path='/account'>
          <AccountList source={mode}></AccountList>
        </Route>
        <button onClick={()=>{setMode('on')}}>set on</button>
        <button onClick={()=>{setMode('off')}}>set off</button>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
