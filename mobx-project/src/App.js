import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from 'pages/home';
import Event from 'pages/event';
import Login from 'pages/login';
import Join from 'pages/join';
import 'styles/App.scss';

// https://fonts.googleapis.com/css?family=Nanum+Gothic:400,700,800|Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i&amp;subset=korean'

class App extends React.Component {
  render(){
    return <Router>
      <div className="App">
        <div>
          <p>테스트 페이지. 코드보고 눌러도 보고 대충 감을 잡으셈들</p>
          <Link to={`/`}>Home</Link>
          <Link to={`/login`}>Login</Link>
          <Link to={`/join`}>Join</Link>
          <Link to={`/event/2000?count=10`}>Event</Link>

          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={Login} />
          <Route exact path="/join" component={Join} />
          <Route path={["/event/:id", "/event"]} component={Event} />

        </div>
      </div>
    </Router>
  }
}
export default App;
