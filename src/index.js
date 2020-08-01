import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './Redux/store/index';
import { addExpense } from './Redux/actions/expensesGenrators';
// import { setTextFilter } from './Redux/actions/filtersGenerators';
import getVisibleExpenses from './Redux/selectors/expensesVisible';

const store = configureStore();

store.dispatch(addExpense({ description: 'Waterbill', amount: 4500 }));
store.dispatch(addExpense({ description: 'Gasbill', createdAt: 1000 }));
store.dispatch(addExpense({ description: 'coffebill', amount: 109500 }));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
