import React, { Component } from 'react';
import classNames from 'classnames'

import 'styles/Home.scss';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            active : true
        }
    }

    classToggle(){
        let {active} = this.state;
        this.setState({
            active : !active
        })
    }
    render() {
        let {active} = this.state;

        return (
            <div className={classNames('flex_div', {active})}>
                <h1>React와 mobX를 활용한 상태관리와 React Router V5.</h1>
                <button onClick={(e)=>{this.classToggle(e)}}>classNames 테스트 버튼</button>
            </div>
        );
    }
}

export default Home;
