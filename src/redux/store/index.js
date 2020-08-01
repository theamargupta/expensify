import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expenses-reducers';
import filtersReducer from '../reducers/filterReducers';

const store = () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer,
    })
  );
  return store;
};
export default store;
// Store creation
