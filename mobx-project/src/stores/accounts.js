import { observable, action } from 'mobx';
import {login, logout, join} from 'api/account';
import Validator from 'validatorjs'
import {rules,message} from 'lib/rules'

export default class AccountStore {
  constructor(root) {
    this.root = root;
  }
  @observable account = localStorage.getItem('account') ? JSON.parse(localStorage.getItem('account')) : null;
  @observable formValues =  {
    email: 'tester1@gmail.com', password: '1q2w3e4r!@', passwordConfirm: '', username: '',
    birth : '', thumbnail : '', name : '', phone : '', message : '',
  }
  @observable formErrors =  {
    email: '', password: '', passwordConfirm: '', username: '',
    birth : '', thumbnail : '', name : '', phone : '', message : '',
  }
  @observable meta = {
    isValid: true,
    error: null,
  }
  @observable key = '';

  @action
  login = async (params={}) => {
    const {data} = await login(params);
    if(data){
      this.account = data;
      localStorage.setItem('account', JSON.stringify(this.account));
    }
  };

  @action
  logout = async () => {
    const {data} = await logout();
    this.account = null;
    console.log('logout gogo : ', data);
    localStorage.removeItem('account')
  };

  @action
  join = async (params={}) => {
    const {data} = await join(params);
    if(data){
      this.account = data;
      localStorage.setItem('account', JSON.stringify(this.account));
    }
  };

  @action
  onValueChange = e => {
    // console.log('onValueChange : ', e.target);
    const {name, value} = e.target;
    this.formValues[name] = value;
    const validation = new Validator(
      {[name] : this.formValues[name]},
      {[name] : rules.accountRules[name]},
      message,
    )
    this.meta.isValid = validation.passes();
    this.formErrors[name] = validation.errors.first(name)
  };

  @action
  loginSubmitForm = e => {
    e.preventDefault();
    const {email,password} = this.formValues;
    const validation = new Validator(
      {
        email,
        password,
      },
      {
        email : rules.accountRules.email,
        password : rules.accountRules.password,
      },
      message,
    )
    console.log('onSubmitForm validation : ', validation);
    if(validation.passes()){
      console.log('login gogo');
      this.login({
        email,
        password,
      })
    }
  };

  @action
  joinSubmitForm = e => {
    e.preventDefault();
    const {email,username,password,passwordConfirm} = this.formValues;
    const validation = new Validator(
      {
        email,
        username,
        password,
        passwordConfirm,
      },
      {
        email : rules.accountRules.email,
        username : rules.accountRules.username,
        password : rules.accountRules.password,
        passwordConfirm : rules.accountRules.passwordConfirm,
      },
      message,
    )
    console.log('onSubmitForm validation : ', validation);
    if(validation.passes()){
      console.log('join gogo');
      this.join({
        email,
        username,
        password,
      })
    }
  };

}
