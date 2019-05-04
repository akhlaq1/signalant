import React, {Component} from "react";
import {connect} from "react-redux";
import {Drawer, Layout} from "antd";

import SidebarContent from "./SidebarContent";
import {toggleCollapsedSideNav, updateWindowWidth} from "appRedux/actions/Setting";
import {
  NAV_STYLE_DRAWER,
  NAV_STYLE_FIXED,
  NAV_STYLE_MINI_SIDEBAR,
  NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
  NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
  TAB_SIZE,
  THEME_TYPE_LITE
} from "../../constants/ThemeSetting";

import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import Tour from "reactour";
import Text from "../App/Text";
import Glitch from "../App/Glitch";
import Tooltip from "../App/Tooltip";
import { Link } from "../App/Button";

const {Sider} = Layout;

export class Sidebar extends Component {

  constructor() {
    super();
    this.state = {
      isTourOpen: false,
      isShowingMore: false
    };
  }

  componentDidMount() {
    window.addEventListener("keyup", this.keyHandling);
  }

  componentWillUnmount() {
    window.removeEventListener("keyup", this.keyHandling);
  }

  disableBody = target => disableBodyScroll(target);
  enableBody = target => enableBodyScroll(target);

  toggleShowMore = () => {
    this.setState(prevState => ({
      isShowingMore: !prevState.isShowingMore
    }));
  };

  closeTour = () => {
    this.setState({ isTourOpen: false });
  };

  openTour = () => {
    this.setState({ isTourOpen: true });
  };

  onToggleCollapsedNav = () => {
    this.props.toggleCollapsedSideNav(!this.props.navCollapsed);
  };

  componentDidMount() {
    window.addEventListener('resize', () => {
      this.props.updateWindowWidth(window.innerWidth)
    });
  }

  render() {
    const {themeType, navCollapsed, width, navStyle} = this.props;
    const { isTourOpen, isShowingMore } = this.state;
    const accentColor = "#5cb7b7";

    let drawerStyle = "gx-collapsed-sidebar";

    if (navStyle === NAV_STYLE_FIXED) {
      drawerStyle = "";
    } else if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR) {
      drawerStyle = "gx-mini-sidebar gx-mini-custom-sidebar";
    } else if (navStyle === NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR) {
      drawerStyle = "gx-custom-sidebar"
    } else if (navStyle === NAV_STYLE_MINI_SIDEBAR) {
      drawerStyle = "gx-mini-sidebar";
    } else if (navStyle === NAV_STYLE_DRAWER) {
      drawerStyle = "gx-collapsed-sidebar"
    }
    if ((navStyle === NAV_STYLE_FIXED || navStyle === NAV_STYLE_MINI_SIDEBAR
        || navStyle === NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR) && width < TAB_SIZE) {
      drawerStyle = "gx-collapsed-sidebar"
    }
    return (
      <Sider
        className={`gx-app-sidebar ${drawerStyle} ${themeType !== THEME_TYPE_LITE ? 'gx-layout-sider-dark' : null}`}
        trigger={null}
        collapsed={(width < TAB_SIZE ? false : navStyle === NAV_STYLE_MINI_SIDEBAR || navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR)}
        theme={themeType === THEME_TYPE_LITE ? "lite" : "dark"}
        collapsible>
        {
          navStyle === NAV_STYLE_DRAWER || width < TAB_SIZE ?
            <Drawer
              wrapClassName={`gx-drawer-sidebar ${themeType !== THEME_TYPE_LITE ? 'gx-drawer-sidebar-dark' : null}`}
              placement="left"
              closable={false}
              onClose={this.onToggleCollapsedNav.bind(this)}
              visible={navCollapsed}>
              <SidebarContent
              openTour={this.openTour}
              toggleShowMore={this.toggleShowMore}
              isShowingMore={isShowingMore}
              />
            </Drawer> :
            <SidebarContent
            openTour={this.openTour}
            toggleShowMore={this.toggleShowMore}
            isShowingMore={isShowingMore}
            />
        }
        <Tour
          onRequestClose={this.closeTour}
          steps={tourConfig}
          isOpen={isTourOpen}
          maskClassName="mask"
          className="helper"
          rounded={5}
          accentColor={accentColor}
          onAfterOpen={this.disableBody}
          onBeforeClose={this.enableBody}
          />
      </Sider>)
  }
}

const mapStateToProps = ({settings}) => {
  const {themeType, navStyle, navCollapsed, width, locale} = settings;
  return {themeType, navStyle, navCollapsed, width, locale}
};

const tourConfig = [
  {
    selector: '[data-tut="reactour__iso"]',
    content: `Ok, let's start with the userprofile of the Tour that is about to begin.`
  },
  {
    selector: '[data-tut="reactour__logo"]',
    content: `Keep in mind that you could try and test everithing during the Tour. 
    For example, try clicking the highlighted text…`
  },
  {
    selector: '[data-tut="reactour__copy"]',
    content: `And here you can fill all the details and click create signal button.That's it your signal is created.`
  },
  {
    selector: '[data-tut="reactour__style"]',
    content: () => (
      <div>
        <Glitch data-glitch="Styled">Styled</Glitch>
        <Text color="#e5e5e5">
          Here <Tooltip data-tooltip="this helper ⬇">you can</Tooltip>{" "}
          manage all your signals.
        </Text>
        <Text color="#373737" size=".7em" style={{ marginTop: ".7em" }}>
          <Link
            href="http://codepen.io/lbebber/full/ypgql/"
            color="dark"
            nospaces
          >
            Text effect
          </Link>{" "}
          by{" "}
          <Link href="https://twitter.com/lucasbebber" color="dark" nospaces>
            Lucas Bebber
          </Link>
        </Text>
      </div>
    ),
    style: {
      backgroundColor: "black",
      color: "white"
    }
  },
  {
    selector: '[data-tut="reactour__goTo"]',
    content: ({ goTo }) => (
      <div>
        If you wanna go anywhere, skipping places, it is absolutely possible.
        <br /> "Oh, Here you can subscribe the package to get currency pairs"{" "}
        {/* <button
          style={{
            border: "1px solid #f7f7f7",
            background: "none",
            padding: ".3em .7em",
            fontSize: "inherit",
            display: "block",
            cursor: "pointer",
            margin: "1em auto"
          }}
          onClick={() => goTo(1)}
        >
          Please go back to 🚌
        </button> */}
      </div>
    )
  },
  {
    selector: '[data-tut="reactour__position"]',
    content: () => (
      <Text>
        The <Tooltip data-tooltip="this helper ⬇">tourist guide</Tooltip> could
        be positioned where you want.
        Here, you can check the currency pairs count.
        {/* <br /> In this case will try to stay in the <strong>
          left side
        </strong>{" "}
        if there's available space, otherwise will{" "}
        <strong>auto position</strong>. */}
      </Text>
    ),
    position: "left"
  },
  {
    selector: '[data-tut="reactour__scroll"]',
    content:
      "Probably you can upgrade the package here whenever you need..."
  },
  {
    selector: '[data-tut="reactour__scroll--hidden"]',
    content: "And here is your profile..."
  },
  {
    selector: '[data-tut="reactour__action"]',
    content:
      "Here is the dashboard, you can check all the graphs of your signals,alerts etc..",
    action: () =>
      console.log(`
                  ------------🏠🏚---------
      🚌 Arrived to explore these beautiful buildings! 🚌
                  ------------🏠🏚---------
   🚧 This action could also fire a method in your Component 🚧
    `)
  },
  {
    selector: '[data-tut="reactour__state"]',
    content:
      "And the notifications you can view here, try clicking the notifications icon…",
    // observe: '[data-tut="reactour__state--observe"]'
  }
];

export default connect(mapStateToProps, {toggleCollapsedSideNav, updateWindowWidth})(Sidebar);
