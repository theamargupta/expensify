import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Comp/Header';
import ExpenseDashboard from '../Comp/ExpenseDashboardPage';
import AddExpense from '../Comp/AddExpensePage';
import EditExpense from '../Comp/EditExpensePage';
import Help from '../Comp/HelpPage';
import NotFound from '../Comp/NotFoundPage';
const AppRouter = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={ExpenseDashboard} />
        <Route path='/create' component={AddExpense} />
        <Route path='/edit' component={EditExpense} />
        <Route path='/help' component={Help} />
        <Route component={NotFound} />
      </Switch>
      <Header />
    </div>
  );
};
export default AppRouter;
