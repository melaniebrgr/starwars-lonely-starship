import React from 'react';
import { expect, assert } from 'chai';
import { shallow } from 'enzyme';

import List from './List';

describe('<List />', () => {

  it('should create a list', () => {
    const wrapper = shallow(<List starships={[{ name: "Death Star" }, { name: "X-wing" }]} />);
    assert.isOk(wrapper.children().length, 'List not found');
    expect(wrapper.find('li')).to.have.length(2);
  });
  
});