import React from 'react';
import { connect } from 'react-redux';

const ExpenseList = (props) => {
  return (
    <div>
      <h1>ExpenseList: {props.filters.text}</h1>
    </div>
  );
};

const mapStateToProps = (state) => ({
  expenses: state.expenses,
  filters: state.filters,
});

export default connect(mapStateToProps)(ExpenseList);
