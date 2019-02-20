import React, { Component } from 'react';
import Home from './containers/Home';
import Counter from './containers/Counter';
import SuperMarket from './containers/SuperMarket';
import DevTools from 'mobx-react-devtools';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Link to={`/`}>Home</Link>
          <Link to={`/SuperMarket/1000`}>Super Market</Link>
          <Link to={`/Counter/2000`}>Counter</Link>

          {process.env.NODE_ENV === 'development' && <DevTools />}

          <Route exact path="/" component={Home}/>
          <Route exact path="/SuperMarket/:id" component={SuperMarket}/>
          <Route exact path="/Counter/:id" component={Counter}/>
        </div>
      </Router>
    );
  }
}

export default App;
