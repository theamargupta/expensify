import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from '../ExpenseListItem';
import selectExpense from '../../Redux/selectors/expensesVisible';

const ExpenseList = ({ filters, expenses }) => {
  return (
    <div>
      <h1>ExpenseList: {filters.text}</h1>
      {expenses.map((expense) => (
        <ExpenseListItem key={expense.id} {...expense} />
      ))}
    </div>
  );
};

const mapStateToProps = ({ expenses, filters }) => ({
  expenses: selectExpense(expenses, filters),
  filters: filters,
});

export default connect(mapStateToProps)(ExpenseList);
