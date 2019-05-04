import React from "react";
import {Link} from "react-router-dom";
const AppsNavigation = () =>
  <ul className="gx-app-nav">
    {/* <li><i className="icon icon-search-new"/></li> */}
    <li>
     <Link to="/custom-views/notifications/list" data-tut="reactour__state">
         <i className="icon icon-notification"/>
     </Link>
   </li>
    <li><i className="icon icon-chat-new"/></li>
  </ul>;

export default AppsNavigation;
