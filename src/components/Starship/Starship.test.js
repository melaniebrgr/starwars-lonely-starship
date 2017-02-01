import React from 'react';
import { expect, assert } from 'chai';
import { shallow } from 'enzyme';

import Starship from './Starship';

describe('<Starship />', () => {

  it('should be empty if there are no starships', () => {
    const wrapper = shallow(<Starship />);
    
    expect(wrapper.find('main')).to.have.length(1);
    expect(wrapper.find('main').children()).to.have.length(0);
  });

  //TK: To test that it displays starship info I think it needs to get starship name from params
  // it('should be empty if there are no starships', () => {
  //   const wrapper = shallow(<Starship starships={[{ name: "Death Star" }, { name: "X-wing" }]} />);
  // });  
  
});