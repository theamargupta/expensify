import React from 'react';
import { Route, Switch } from 'react-router-dom';
const ExpenseDashboard = React.lazy(() =>
  import('../container/ExpenseDashboardPage')
);
const Sidebar = React.lazy(() => import('../Components/Sidebar'));
const AddExpense = React.lazy(() => import('../container/AddExpensePage'));
const EditExpense = React.lazy(() => import('../container/EditExpensePage'));
const Help = React.lazy(() => import('../container/HelpPage'));
const NotFound = React.lazy(() => import('../container/NotFoundPage'));

const AppRouter = () => {
  return (
    <div>
      <Switch>
        <Route
          exact
          path='/'
          render={() => <Sidebar Render={ExpenseDashboard} />}
        />
        <Route
          exact
          path='/create'
          render={() => <Sidebar Render={AddExpense} />}
        />
        <Route
          exact
          path='/edit'
          render={() => <Sidebar Render={EditExpense} />}
        />
        <Route exact path='/help' render={() => <Sidebar Render={Help} />} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};
export default AppRouter;
