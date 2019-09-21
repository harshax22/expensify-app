import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseList } from '../../components/ExpenseList';
import expenses from '../fixtures/expenses';
import toJson from 'enzyme-to-json';


test('should render ExpenseList from expenses', () => {
  const wrapper = shallow(<ExpenseList expenses={expenses}/>);
  expect(toJson(wrapper)).toMatchSnapshot();
});

test('should render ExpenseList wit empty message', () => {
    const wrapper = shallow(<ExpenseList expenses={[]}/>);
    expect(toJson(wrapper)).toMatchSnapshot(); 
});