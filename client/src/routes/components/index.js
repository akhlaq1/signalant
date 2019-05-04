import React from "react";
import {Route, Switch} from "react-router-dom";

import DataDisplay from "./dataDisplay";
import DataEntry from "./dataEntry";
import Feedback from "./feedback";
import Navigation from "./navigation";
import Others from "./others";
import General from "./general";
import Table from "./table";
import Billing from "./billing";
import CustomerCrm from "./customercrm";
import Packages from "./packages";
import NewsLetters from "./newsLetters";
import Signals from "./signals";

const Components = ({match}) => (
  <Switch>
    <Route path={`${match.url}/dataDisplay`} component={DataDisplay}/>
    <Route path={`${match.url}/dataEntry`} component={DataEntry}/>
    <Route path={`${match.url}/feedback`} component={Feedback}/>
    <Route path={`${match.url}/general`} component={General}/>
    <Route path={`${match.url}/navigation`} component={Navigation}/>
    <Route path={`${match.url}/others`} component={Others}/>
    <Route path={`${match.url}/table`} component={Table}/>
    <Route path={`${match.url}/billing`} component={Billing}/>
    <Route path={`${match.url}/customercrm`} component={CustomerCrm}/>
    <Route path={`${match.url}/packages`} component={Packages}/>
    <Route path={`${match.url}/signals`} component={Signals}/>
    <Route path={`${match.url}/newsLetters`} component={NewsLetters}/>
  </Switch>
);

export default Components;
