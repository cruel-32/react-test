import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { login, logout } from './reducers/user'

class App extends Component{

  loginAction = (e) =>{
    const {login} = this.props;
    login({
      name:'test1',
      age:1
    });
  }

  logoutAction = () =>{
    const {logout} = this.props;
    logout();
  }


  render(){
    const {loggedUser} = this.props;
    console.log('loggedUser : ', loggedUser);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {loggedUser ? loggedUser.name : ''}
          <div onClick={this.loginAction}>
            로그인
          </div>
          <div onClick={this.logoutAction}>
            로그아웃
          </div>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

// props 로 넣어줄 스토어 상태값
const mapStateToProps = state => ({
  loggedUser: state.user.loggedUser,
});

// props 로 넣어줄 액션 생성함수
const mapDispatchToProps = {login,logout};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);