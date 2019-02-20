import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { changeInput, create, enter, leave } from '../store/modules/wating';
import * as waitingActions from '../store/modules/wating';
import WaitingList from '../components/WaitingList';

class WatingListContainer extends Component {
    changeInput = (e) => {
        const { WaitingActions } = this.props;
        WaitingActions.changeInput(e.target.value);
    };
    create = (e) => {
        e.preventDefault();
        const { WaitingActions, input } = this.props;
        WaitingActions.create(input);
        WaitingActions.changeInput('');
    };
    enter = (id) => {
        const { WaitingActions } = this.props;
        WaitingActions.enter(id);
    };
    leave = (id) => {
        const { WaitingActions } = this.props;
        WaitingActions.leave(id);
    };
    render(){
        const { input, list } = this.props;
        return (
            <WaitingList
                input={input}
                waitingList={list}
                changeInput={this.changeInput}
                create={this.create}
                enter={this.enter}
                leave={this.leave}
            />
        )
    }
}

const mapStateToProps = ({ wating }) => ({
    input: wating.input,
    list: wating.list,
});

const mapDispatchToProps = dispatch =>({
    WaitingActions : bindActionCreators(waitingActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(WatingListContainer);
