import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";

import asyncComponent from "util/asyncComponent";


const Table = ({match}) => (
  <Switch>
    <Redirect exact from={`${match.url}/`} to={`${match.url}/basic`}/>
   
    <Route path={`${match.url}/invoice`} component={asyncComponent(() => import('./Invoices'))}/>
  </Switch>
);

export default Table;
