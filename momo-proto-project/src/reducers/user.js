const LOGIN = 'user/LOGIN';
const LOGOUT = 'user/LOGOUT';

// 액션 생섬함수 정의
export const login = payload => ({ type: LOGIN, payload });
export const logout = () => ({ type: LOGOUT });

const initialState = {
  loggedUser : {
    name : 'tester',
    age : 30
  }
}

const user = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN:
        console.log('LOGIN : ', action)
        return {
          ...state,
          loggedUser : action.payload
        }
      case LOGOUT:
        console.log('LOGOUT : ', action)
        return {
          ...state,
          loggedUser: null,
        };
      default:
        console.log('default : ')
        return state
    }
}
  
export default user