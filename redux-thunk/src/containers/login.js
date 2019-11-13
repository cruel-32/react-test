import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login, logout, inputAccount, loginAsync } from '../store/modules/account';

class LoginPage extends Component {
  handleLogin = (e) => {
    e.preventDefault()
    this.props.loginAsync({
      email:'test',
      password:'1111'
    });
  };
  handleLogout = () => {
    this.props.logout();
  };
  inputAccount = (e) =>{
    const { target } = e;
    this.props.inputAccount({
      [target.name] : [target.value]
    });
  }
  render() {
    const { email, password } = this.props;

    return (
      <div>
        {email}
        {password}
        <input type="text" name="email" defaultValue={email} onKeyUp={(e)=>{this.inputAccount(e)}} ></input>
        <input type="password" name="password" defaultValue={password} onKeyUp={(e)=>{this.inputAccount(e)}}></input>
        <button onClick={(e)=>this.handleLogin(e)}>login</button>
      </div>
    );
  }
}

//rootStore에서 원하는 store 꺼내온다
const mapStateToProps = ({ accounts:{ email, password } }) => ({
  email, password
});

//module에서 원하는 액션을 dispatch에 객체형태로 넘긴다
const mapDispatchToProps = {
  login, logout, inputAccount, loginAsync
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);