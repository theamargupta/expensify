import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Components/Header';
import ExpenseDashboard from '../container/ExpenseDashboardPage';
import AddExpense from '../container/AddExpensePage';
import EditExpense from '../container/EditExpensePage';
import Help from '../container/HelpPage';
import NotFound from '../container/NotFoundPage';
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
