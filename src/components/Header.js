import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <div>
    <NavLink to = "/" activeClassName = "is-active" exact = {true}>Visit the Dashboard Page!</NavLink>
    <NavLink to = "/create" activeClassName = "is-active">Create a new Expense!</NavLink>
    
     </div>
    </header>
   
   
);

export default Header;