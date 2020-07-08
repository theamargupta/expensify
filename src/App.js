import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import './playground/redux-expensify'
import AppRoute from './router/AppRouter';
import configureStore from './redux/store/configureStore';
import { addExpense } from './redux/actions/expensesGenrators';
import { setTextFilter } from './redux/actions/filtersGenerators';
import getVisibleExpenses from './redux/selectors/expensesVisible';

const store = configureStore();
store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});
store.dispatch(addExpense({ description: 'Waterbill' }));
store.dispatch(addExpense({ description: 'Gasbill' }));
store.dispatch(setTextFilter('Water'));

function App() {
  return (
    <div>
      <Provider store={store}>
        <AppRoute />
      </Provider>
    </div>
  );
}

export default App;
