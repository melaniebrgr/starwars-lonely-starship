import React from 'react';
import { Link } from 'react-router';
import { expect, assert } from 'chai';
import { shallow } from 'enzyme';

import List from './List';

describe('<List />', () => {

  it('should create a list', () => {
    const wrapper = shallow(<List starships={[{ name: "Death Star" }, { name: "X-wing" }]} />);

    assert.isOk(wrapper.children().length, 'List not found');
    expect(wrapper.find('li')).to.have.length(2);
  });

  // TK: How do I test if contains another component?
  // it('should contain Link components', () => {
  //   const wrapper = shallow(<List starships={[{ name: "Death Star" }]} />);

  //   expect(wrapper.containsMatchingElement(<Link />)).to.equal(true);
  // });
});