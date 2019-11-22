import React from 'react';
import { useDispatch } from 'react-redux';

import { useLocation } from "react-router-dom";
import { parse } from 'query-string'

import { GET_ACCOUNTS } from 'store/actions/account'

const AccountList = props => {
  console.log('props : ', props);
  console.log('GET_ACCOUNTS : ', GET_ACCOUNTS);
  const dispatch = useDispatch();

  dispatch({type:GET_ACCOUNTS})

  const queryString = parse(useLocation().search);
  console.log('queryString : ', queryString);

  return (
    <div>
      AccountList : {props.source}
    </div>
  )
}

export default AccountList
