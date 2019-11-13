import React from 'react';
import { configure, mount, shallow, render  } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from 'App';

configure({ adapter: new Adapter() });

describe('App은 잘 되고 있습니다', ()=>{
  it('생성과 삭제 이상없이 되고 있습니다.', () => {
    const wrapper = mount(<App/>);
    expect(wrapper).toMatchSnapshot();
  });
  it('상태값은 없습니다', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.state()).toBe(null);
  });
});
