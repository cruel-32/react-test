import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { changeInput, create, enter, leave } from '../store/modules/wating';
import * as userActions from '../store/modules/user';
import getUsersAsyncSaga from '../store/modules/user';
import UserList from '../components/UserList';

class UserListContainer extends Component {
    getUsers = async (id) => {
        const { UserActions } = this.props;
        console.log('UserListContainer UserActions : ', UserActions);
        try {
            // const res = await UserActions.getUsersAsync(id)
            const res = await UserActions.getUsersAsyncSaga(id)
            console.log('getUsers 요청이 완료 된 다음에 실행됨 : ', res);
        } catch(e) {
            console.log('에러가 발생! : ', e);
        }

    };
    render(){
        const { list } = this.props;
        return (
            <div>
                <h1>User 테스트 (redux-saga)</h1>
                <button onClick={()=>this.getUsers('aaa')}>redux-saga 테스트버튼</button>
                <UserList userList={list}/>
            </div>
        )
    }
}

const mapStateToProps = ({ user }) => {
    console.log('mapStateToProps user : ', user);
    return {
        list: user.list,
    }
};


const mapDispatchToProps = dispatch => {
    return {
        UserActions : {
            getUsersAsyncSaga : (id)=>{
                // userActions.getUsersAsyncSaga(id)
                dispatch({
                    type:'saga',
                    payload:id
                })
            }
        }
    }
}

// const mapDispatchToProps = dispatch =>{
//     const UserActions = bindActionCreators(userActions, dispatch);
//     console.log('mapDispatchToProps UserActions : ', UserActions);
//     console.log('mapDispatchToProps dispatch : ', dispatch);
//     return {
//         UserActions
//     }
// }

export default connect(mapStateToProps, mapDispatchToProps)(UserListContainer);
