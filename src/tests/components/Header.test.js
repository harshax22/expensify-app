import { shallow } from 'enzyme'
import React from 'react';
import Header from '../../components/Header';
import toJson from 'enzyme-to-json';

test('should render Header correctly', () => {
    const wrapper = shallow(<Header />);
    expect(toJson(wrapper)).toMatchSnapshot();
});