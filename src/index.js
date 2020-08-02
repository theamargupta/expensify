import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
//React router dom
import { BrowserRouter } from 'react-router-dom';
//Material ui Date Picker =>
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
//Material ui theme
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './utils/theme.js';
//Redux =>
import { Provider } from 'react-redux';
import configureStore from './Redux/store/index';
import { addExpense } from './Redux/actions/expensesGenrators';
import getVisibleExpenses from './Redux/selectors/expensesVisible';

//Redux =>
const store = configureStore();

store.dispatch(addExpense({ description: 'Waterbill', amount: 4500 }));
store.dispatch(addExpense({ description: 'Gasbill', createdAt: 1000 }));
store.dispatch(addExpense({ description: 'coffebill', amount: 109500 }));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);
// Redux Ended

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
