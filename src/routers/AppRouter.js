import React from 'react';
import ExpenseDashboardPage from './../components/ExpenseDashboardPage';
import AddExpensePage from './../components/AddExpense';
import EditPage from './../components/EditPage';
import HelpPage from './../components/HelpPage';
import NotFoundPage from './../components/NotFoundPage';
import Header from '../components/Header';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


const Approuter = () => (
<BrowserRouter>
  <div>
      <Header />
      <Switch>
    <Route path= "/" component= {ExpenseDashboardPage} exact = {true} />
    <Route path = "/create" component = {AddExpensePage} />
    <Route path = "/edit/:id" component = {EditPage}/>
    <Route path = "/help" component = {HelpPage}/>
    <Route component = {NotFoundPage}/>
    </Switch>
  </div>
    
  </BrowserRouter>
)

export default Approuter;