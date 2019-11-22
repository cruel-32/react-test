import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LOGIN, LOGOUT, INPUT_ACCOUNT } from 'store/actions/account'

//rootStore에서 원하는 store 꺼내온다
const mapStateToProps = ({ account:{ email, password } }) => ({
  email, password
});

const mapDispatchToProps = dispatch => ({
    //props 메소드명 : dispatch로 호출할 액션함수
    login: (payload) => dispatch({ type: LOGIN, payload}),
    logout: () => dispatch({ type: LOGOUT}),
    inputAccount: payload => dispatch({ type: INPUT_ACCOUNT, payload}),
})

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
        <input type="text" name="email" value={email} onChange={(e)=>{this.inputAccount(e)}} ></input>
        <input type="password" name="password" value={password} onChange={(e)=>{this.inputAccount(e)}}></input>
        <button onClick={(e)=>this.handleLogin(e)}>login</button>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);