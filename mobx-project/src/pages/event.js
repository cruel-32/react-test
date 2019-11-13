import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject(stores => ({
    events: stores.events,
}))
@observer
class Event extends Component {
    render() {
        const { events } = this.props;
        console.log('event : ', events);
        
        return (
            <div>
                <h1>event</h1>
                <button onClick={()=>{events.getEvents()}}>getEvents (개발자도구 확인)</button>
            </div>
        );
    }
}

export default Event;
