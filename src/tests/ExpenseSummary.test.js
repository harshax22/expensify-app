import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { ExpenseSummary } from '../components/ExpenseSummary';

test('should correctly render expenses summary with one expense', () => {
   const wrapper = shallow(<ExpenseSummary expenseCount={1} expensesTotal={200} />);
   expect(toJson(wrapper)).toMatchSnapshot();
});

test('should correctly render expenses summary with multiple expenses', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={23} expensesTotal={20054656565454} />);
    expect(toJson(wrapper)).toMatchSnapshot();
});