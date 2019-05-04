import React, {Component} from "react";
import {Layout, Popover, Button} from "antd";
import {Link} from "react-router-dom";

import CustomScrollbars from "util/CustomScrollbars";
import SearchBox from "components/SearchBox";
// import languageData from "./languageData";
import {switchLanguage, toggleCollapsedSideNav} from "../../appRedux/actions/Setting";
import UserInfo from "components/UserInfo";
import AppNotification from "components/AppNotification";
import MailNotification from "components/MailNotification";
import Auxiliary from "util/Auxiliary";


import {NAV_STYLE_DRAWER, NAV_STYLE_FIXED, NAV_STYLE_MINI_SIDEBAR, TAB_SIZE} from "../../constants/ThemeSetting";
import {connect} from "react-redux";
import * as firebase from "firebase";


const {Header} = Layout;

class Topbar extends Component {

  constructor(){
    super();
    this.state = {role:""}
  }

  state = {
    searchText: '',
  };

  componentDidMount(){
    var that = this;
    firebase.auth().onAuthStateChanged(function(user){
      if(user){
        var Ref = firebase.database().ref('/users/' + user.uid);
        Ref.once('value', snapshot => {
          let info = snapshot.val().role;
          that.setState({ role: info});
        })
      }
    });
    console.log(this.state.role);
    
  }
  languageMenu = () => {
    return(
    <CustomScrollbars className="gx-popover-lang-scroll">
    { (this.state.role === "admin") &&
      <ul className="gx-sub-popover">
        
         
      <li className="gx-media gx-pointer">
      <Link to="/main/admindashboard/dashboard">
        <i className="icon icon-dasbhoard" style={{padding:'2px 10px'}}/>
        <span className="gx-language-text">Dashboard</span>
        </Link>
      </li>

      <li className="gx-media gx-pointer">
      <Link to="/components/customercrm/data">
        <i className="icon icon-table" style={{padding:'2px 10px'}}/>
        <span className="gx-language-text">Traders CRM</span>
        </Link>
      </li>

      <li className="gx-media gx-pointer">
      <Link to="/components/packages/display-package">
        <i className="icon icon-widgets" style={{padding:'2px 10px'}}/>
        <span className="gx-language-text">Packages</span>
        </Link>
      </li>

      <li className="gx-media gx-pointer">
      <Link to="/components/billing/invoice">
        <i className="icon icon-editor" style={{padding:'2px 10px'}}/>
        <span className="gx-language-text">Billing</span>
        </Link>
      </li>

      
      <li className="gx-media gx-pointer">
      <Link to="/social-apps/profile">
        <i className="icon icon-profile2" style={{padding:'2px 10px'}}/>
        <span className="gx-language-text">Profile</span>
        </Link>
      </li>

    
  </ul>
    }
      { (this.state.role === "user") &&
      <ul className="gx-sub-popover">
        
         
      <li className="gx-media gx-pointer">
      <Link to="/main/traderdashboard/dashboard">
        <i className="icon icon-dasbhoard" style={{padding:'2px 10px'}}/>
        <span className="gx-language-text">Dashboard</span>
        </Link>
      </li>

      <li className="gx-media gx-pointer">
      <Link to="/components/signals/create-signals">
        <i className="icon icon-chart-line" style={{padding:'2px 10px'}}/>
        <span className="gx-language-text">Signals</span>
        </Link>
      </li>

      <li className="gx-media gx-pointer">
      <Link to="/custom-views/packages/pricing">
        <i className="icon icon-widgets" style={{padding:'2px 10px'}}/>
        <span className="gx-language-text">Packages</span>
        </Link>
      </li>

      <li className="gx-media gx-pointer">
      <Link to="/components/newsLetters/subcribe">
        <i className="icon icon-editor" style={{padding:'2px 10px'}}/>
        <span className="gx-language-text">Newsletters</span>
        </Link>
      </li>

      
      <li className="gx-media gx-pointer">
      <Link to="/social-apps/profile">
        <i className="icon icon-profile2" style={{padding:'2px 10px'}}/>
        <span className="gx-language-text">Profile</span>
        </Link>
      </li>

    
  </ul>
    }
    </CustomScrollbars>
    )
  };

  updateSearchChatUser = (evt) => {
    this.setState({
      searchText: evt.target.value,
    });
  };


  render() {
    const {locale, width, navCollapsed, navStyle} = this.props;
    return (
      <Auxiliary>
        <Header>
          {navStyle === NAV_STYLE_DRAWER || ((navStyle === NAV_STYLE_FIXED || navStyle === NAV_STYLE_MINI_SIDEBAR) && width < TAB_SIZE) ?
            <div className="gx-linebar gx-mr-3">
              <i className="gx-icon-btn icon icon-menu"
                 onClick={() => {
                   this.props.toggleCollapsedSideNav(!navCollapsed);
                 }}
              />
            </div> : null}
          <Link to="/" className="gx-d-block gx-d-lg-none gx-pointer" style={{width: '30%',marginTop: '5px'}}>
            <img alt="" src={require("assets/images/black-01.png")}/></Link>

          {/* <SearchBox styleName="gx-d-none gx-d-lg-block gx-lt-icon-search-bar-lg"
                     placeholder="Search in app..."
                     onChange={this.updateSearchChatUser.bind(this)}
                     value={this.state.searchText}/> */}
          <ul className="gx-header-notifications gx-ml-auto">
            {/* <li className="gx-notify gx-notify-search gx-d-inline-block gx-d-lg-none">
              <Popover overlayClassName="gx-popover-horizantal" placement="bottomRight" content={
                <SearchBox styleName="gx-popover-search-bar"
                           placeholder="Search in app..."
                           onChange={this.updateSearchChatUser.bind(this)}
                           value={this.state.searchText}/>
              } trigger="click">
                <span className="gx-pointer gx-d-block"><i className="icon icon-search-new"/></span>
              </Popover>
            </li> */}
            {width >= TAB_SIZE ? null :
              <Auxiliary>
                <li className="gx-notify">
                  {/* <Popover overlayClassName="gx-popover-horizantal" placement="bottomRight" content={<AppNotification/>}
                           trigger="click"> */}
                            <Link to="/custom-views/notifications/list">
                    <span className="gx-pointer gx-d-block"><i className="icon icon-notification"/></span>
                    </Link>
                  {/* </Popover> */}
                </li>

                <li className="gx-msg">
                  <Popover overlayClassName="gx-popover-horizantal" placement="bottomRight"
                           content={<MailNotification/>} trigger="click">
                  <span className="gx-pointer gx-status-pos gx-d-block">
                    <i className="icon icon-chat-new"/>
                    <span className="gx-status gx-status-rtl gx-small gx-orange"/>
                  </span>
                  </Popover>
                </li>
              </Auxiliary>
            }
            { (this.state.role === "user") &&
             <div className="ant-row-flex">
           <span className=" gx-app-nav gx-mr-2" data-tut="reactour__position"><i className="icon icon-notification gx-mr-2"/> 9/20 Currency pair</span>
           <Link to="/custom-views/packages/pricing">
           <Button className="gx-btn-primary gx-mr-5 gx-mb-0" type="primary" data-tut="reactour__scroll">Upgarde</Button>
           </Link>
           </div>
         }
            <li className="gx-language"> 
              <Popover overlayClassName="gx-popover-horizantal" placement="bottomRight" content={this.languageMenu()}
                       trigger="click">
                <span className="gx-pointer gx-flex-row gx-align-items-center">
                  {/* <i className={`flag flag-24 flag-${locale.icon}`}/> */}
                  <span className="gx-pl-2 gx-language-name">Menu</span>
                  <i className="icon icon-chevron-down gx-pl-2"/>
                </span>
              </Popover>
            </li>
            {width >= TAB_SIZE ? null :
              <Auxiliary>
                <li className="gx-user-nav"><UserInfo/></li>
              </Auxiliary>
            }
          </ul>
        </Header>
      </Auxiliary>
    );
  }
}

const mapStateToProps = ({settings}) => {
  const {locale, navStyle, navCollapsed, width} = settings;
  return {locale, navStyle, navCollapsed, width}
};

export default connect(mapStateToProps, {toggleCollapsedSideNav, switchLanguage})(Topbar);
