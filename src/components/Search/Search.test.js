import React from 'react';
import { expect, assert } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import RaisedButton from 'material-ui/RaisedButton';

import Search from './Search';

describe('<Search />', () => {

  it('should create a search field', () => {
    const wrapper = shallow(<Search />);
    
    assert.isOk(wrapper.children().length, 'Search not found');
  });

  it('should display a message if there are no starships', () => {
    const wrapper = shallow(<Search />);

    expect(wrapper.find('div').find('p').text()).to.equal('Nothing here yet...');
  });

  it('should respond to click events', () => {
    const searchForStarship = sinon.spy();
    const wrapper = shallow(<Search searchForStarship={searchForStarship}  />);
    
    wrapper.find(RaisedButton).simulate('click');
    assert.isTrue(searchForStarship.calledOnce, 'searchForStarship not called');
    wrapper.find(RaisedButton).simulate('click');
    assert.isTrue(searchForStarship.calledTwice, 'searchForStarship not called twice');
  });  

});