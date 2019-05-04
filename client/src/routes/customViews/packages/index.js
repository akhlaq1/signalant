import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import asyncComponent from "util/asyncComponent";


const ExtraElements = ({match}) => (
  <Switch>
    <Redirect exact from={`${match.url}/`} to={`${match.url}/pricing`}/>
    <Route path={`${match.url}/pricing`} component={asyncComponent(() => import('./pricingTable'))}/>
    <Route path={`${match.url}/checkout`} component={asyncComponent(() => import('./Checkout'))}/>
    <Route path={`${match.url}/thankyou`} component={asyncComponent(() => import('./Thankyou'))}/>
  </Switch>
);

export default ExtraElements;
