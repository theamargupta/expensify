import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../../Redux/actions/filtersGenerators';

const ExpenseListFilter = ({ filter, dispatch }) => {
  return (
    <div>
      <input
        type='text'
        defaultValue={filter.text}
        onChange={(e) => dispatch(setTextFilter(e.target.value))}
      />
    </div>
  );
};
const mapStateToProps = ({ filters }) => ({
  filter: filters,
});

export default connect(mapStateToProps)(ExpenseListFilter);
