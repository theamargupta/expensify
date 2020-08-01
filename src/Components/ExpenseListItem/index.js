import React from 'react';
import { removeExpense } from '../../Redux/actions/expensesGenrators';
import { connect } from 'react-redux';
const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => {
  return (
    <div>
      <h3>{description}</h3>
      <p>
        {amount} - {createdAt}
      </p>
      <button onClick={() => dispatch(removeExpense(id))}>remove</button>
    </div>
  );
};

export default connect()(ExpenseListItem);
