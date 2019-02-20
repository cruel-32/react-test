import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject(stores => ({
    number: stores.counter.number,
    increase: stores.counter.increase,
    decrease: stores.counter.decrease,
}))
@observer
class Counter extends Component {
    render() {
        const { number, increase, decrease, match } = this.props;
        return (
            <div>
                <h1>{match.params.id}의 숫자</h1>
                <h2>{number}</h2>
                <button onClick={increase}>+1</button>
                <button onClick={decrease}>-1</button>
            </div>
        );
    }
}

export default Counter;
