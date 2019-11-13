import CategoryStore from './categories';
import EventStore from './events';
import AccountStore from './accounts';

class RootStore {
  constructor() {
    this.categories = new CategoryStore(this);
    this.events = new EventStore(this);
    this.accounts = new AccountStore(this);
  }
}

export default RootStore;
