import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm'
import { addExpense } from '../actions/expenses'

export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.addExpense(expense)
        this.props.history.push('/')
     }
     render() {
         return (
        <ExpenseForm 
    onSubmit = {this.onSubmit}
    /> 
   );
     }
}

const mapDispatchToProps = (dispatch) => ({
 
    addExpense: (expense) => dispatch(addExpense(expense))
  
   });


export default connect(undefined, mapDispatchToProps)(AddExpensePage);