import { observable, action } from 'mobx';
import {
  getEvents,
  postEvent,
  getEvent,
  putEvent,
  patchEvent,
} from 'api/event';

export default class EventStore {
  @observable events = [];
  @observable event = null;

  constructor(root) {
    this.root = root;
  }
  
  @action
  getEvent = async _id => {
    const {data} = await getEvent(_id);
    this.event = data;
  };

  @action
  getEvents = async (params={}) => {
    const {data} = await getEvents(params);
    this.events = data;
  };
  
  @action
  createEvent = async (params={}) => {
    const {data} = await postEvent(params);
    return data;
  };

  @action
  replaceEvent = async (_id,params) => {
    const {data} = await putEvent(_id,params);
    this.event = data;
  };

  @action
  updateEvent = async (_id,params) => {
    const {data} = await patchEvent(_id,params);
    this.event = data;
  };

}
