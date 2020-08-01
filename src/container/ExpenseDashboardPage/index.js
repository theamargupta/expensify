import React from 'react';
import ExpenseList from '../../Components/ExpenseList';
import ExpenseListFilter from '../../Components/ExpenseListFilter';

const ExpenseDashboardPage = () => {
  return (
    <div>
      <ExpenseListFilter />
      <ExpenseList />
    </div>
  );
};

export default ExpenseDashboardPage;
