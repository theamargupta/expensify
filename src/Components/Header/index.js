import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.scss';
const Header = () => {
  return (
    <ul>
      <li>
        <NavLink to='/' exact activeClassName='is-active'>
          DashBoard
        </NavLink>
      </li>
      <li>
        <NavLink to='/create' activeClassName='is-active'>
          AddExpense
        </NavLink>
      </li>
      <li>
        <NavLink to='edit' activeClassName='is-active'>
          editExpense
        </NavLink>
      </li>
      <li>
        <NavLink to='help' activeClassName='is-active'>
          Help
        </NavLink>
      </li>
    </ul>
  );
};

export default Header;
