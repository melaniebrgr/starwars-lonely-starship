import React from 'react';
import { expect, assert } from 'chai';
import { shallow } from 'enzyme';

import Home from './Home';

describe('<Home />', () => {

  it('should display welcome text', () => {
    const wrapper = shallow(<Home />);
    const h2 = wrapper.find('div').find('h2');
    
    assert.isOk(wrapper.children().length, 'Home not found');
    expect(h2).to.have.length(1);
    expect(h2.text()).to.contain('Welcome');
  });
  
});