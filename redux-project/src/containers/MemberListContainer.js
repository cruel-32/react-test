import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { changeInput, create, enter, leave } from '../store/modules/wating';
import * as memberActions from '../store/modules/member';
import MemberList from '../components/MemberList';

class MemberListContainer extends Component {
    getMembers = async (id) => {
        const { MemberActions } = this.props;

        try {
            const res = await MemberActions.getMembersAsync(id)
            console.log('요청이 완료 된 다음에 실행됨 : ', res);
        } catch(e) {
            console.log('에러가 발생!');
        }

    };
    render(){
        const { list } = this.props;
        return (
            <div>
                <h1>Member 테스트</h1>
                <button onClick={()=>this.getMembers('aaa')}>redux-thunk 테스트버튼</button>
                <MemberList memberList={list}/>
            </div>
        )
    }
}

const mapStateToProps = ({ member }) => {
    return {
        list: member.list,
        // post: state.post.data,
        // loading: state.pender.pending['GET_POST'],
        // error: state.pender.failure['GET_POST']
    }
};

const mapDispatchToProps = dispatch =>{
    const MemberActions = bindActionCreators(memberActions, dispatch);
    return {
        MemberActions
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MemberListContainer);
