import React from "react";
import {Route, Switch} from "react-router-dom";
import eCommerce from "./eCommerce";
import ErrorPages from "./errorPages";
import Extras from "./extras";
import ListType from "./listType";
import UserAuth from "./userAuth";
import Packages from "./packages";
import Notifications from "./notifications";

const CustomViews = ({match}) => (
  <Switch>
    <Route path={`${match.url}/eCommerce`} component={eCommerce}/>
    <Route path={`${match.url}/error-pages`} component={ErrorPages}/>
    <Route path={`${match.url}/extras`} component={Extras}/>
    <Route path={`${match.url}/list-type`} component={ListType}/>
    <Route path={`${match.url}/user-auth`} component={UserAuth}/>
    <Route path={`${match.url}/packages`} component={Packages}/>
    <Route path={`${match.url}/notifications`} component={Notifications}/>
  </Switch>
);

export default CustomViews;