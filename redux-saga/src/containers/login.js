import React, { Component } from 'react';
import { connect } from 'react-redux';

class LoginPage extends Component {
  handleLogin = (e) => {
    e.preventDefault()
    this.props.login({
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
const mapStateToProps = ({ account:{ email, password } }) => ({
  email, password
});

//module에서 원하는 액션을 dispatch로 넘긴다
const mapDispatchToProps = dispatch => {
  return {
    login: (payload) => dispatch({ type: "account/LOGIN", payload}),
    logout: () => dispatch({ type: "account/LOGOUT"}),
    inputAccount: payload => dispatch({ type: "account/LOGOUT", payload}),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);