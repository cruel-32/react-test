import React, { useState, useEffect, } from 'react';
import { useDispatch, useSelector, } from 'react-redux';
import { LOGIN_ASYNC, LOGOUT_ASYNC} from 'store/account/action'
import { Link, } from "react-router-dom";
import { TextField, Button } from '@material-ui/core';
import { loginSchema  } from 'lib/validation/account'
import { Formik } from "formik";

const LoginPage = (props:any) => {
  const dispatch = useDispatch();

  const [ count, setCount ] = useState<number>(0);
  const [ email ] = useState<IAccount['email']>('');
  const [ password ] = useState<string>('');

  const account:IAccount = useSelector((store:any) => store.account)

  const countUp = () => {
    setCount(count+1);
  }
  
  const countDown = () => {
    setCount(count-1);
  }
  
  const handleLogin = (payload:any) => {
    dispatch({
      type: LOGIN_ASYNC,
      payload
    })
  }

  const handleLogout = () => {
    dispatch({
      type: LOGOUT_ASYNC
    })
  }
  
  useEffect(()=>{
    console.log('effect : 브라우저가 모두 그려지면 수행 ')
    return ()=>{
      console.log('effect!! end')
    }
  // },[]); //구독을 재생성하지 않으므로 렌더링을 1회만 할때 빈 []를 두번째 인자로 넘긴다
  }, [props.source]); //props.source 값이 변경될 떄만 구독이 재생성

  return (
    <div>
      <div>
        <div>
          state : {count}
        </div>
        <Button onClick={countUp}>up</Button>
        <Button onClick={countDown}>down</Button>
      </div>
      
      <div>
        <div>
          store props
        </div>

        {
          account._id ? (
            <div>
              {account.username}
              <Button onClick={handleLogout}>logout</Button>
            </div>
          ) : (
            <Formik
              initialValues={{email,password}}
              onSubmit={handleLogin}
              validationSchema={loginSchema}
            >
              {
                props => {
                  const {
                    values,
                    handleSubmit,
                    handleChange,
                    errors,
                    touched
                  } = props;
    
                  return (
                    <form onSubmit={handleSubmit}>
                      <TextField
                        type="text"
                        label="Email"
                        name="email"
                        placeholder="Email을 입력하세요"
                        value={values.email}
                        onChange={handleChange}
                        helperText={(errors.email && touched.email) && errors.email}
                      ></TextField>
                      <TextField
                        type="password"
                        label="Password"
                        name="password"
                        placeholder="Password를 입력하세요"
                        value={values.password}
                        onChange={handleChange}
                        helperText={(errors.password && touched.password) && errors.password}
                      ></TextField>
                      <Button type="submit">login</Button>
                    </form>
                  )
                }
              }
            </Formik>
          )
        }


      </div>

      <div>
        props : {props.source}
      </div>
      
      <Link to="/sub1">sub1</Link>

    </div>
  )
}

export default LoginPage
