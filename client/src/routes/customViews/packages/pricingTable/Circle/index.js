import React, {Component} from "react";
import {Col, Row} from "antd";
// import ItemFirst from "../ItemFirst";
import ItemSecond from "../ItemSecond";
// import ItemThird from "../ItemThird";

class Circle extends Component {
  constructor(props) {
    super(props);
    this.state = {
       pid: ""
    };
    this.checkout = this.checkout.bind(this);
  }

  checkout(e) {
    console.log(e.target);
    let pid = e.target.getAttribute("value");
    console.log("Pid" + pid);
    sessionStorage.setItem("pid", pid);
    this.setState({ pid: pid });
  }

  render(){
    console.log(this.state.pid);
  return (
    <div className="gx-price-tables gx-pt-circle">
      <Row>
        {/* <Col xl={8} lg={24} md={8} xs={24}>
          <ItemFirst
            styleName="gx-package"
            headerStyle="gx-package-header gx-border-2 gx-text-black"
            itemStyle="gx-package-body"
            footerStyle="gx-btn-block gx-bg-primary"
          />
        </Col> */}

        <Col xl={24} lg={24} md={24} xs={24}>
          <ItemSecond
            styleName="gx-package gx-highlight gx-border-0 "
            headerStyle="gx-package-header gx-bg-primary gx-text-white"
            itemStyle="gx-package-body gx-text-black"
            footerStyle="gx-btn-block gx-bg-primary"
            checkout={this.checkout}
          />
        </Col>

        {/* <Col xl={8} lg={24} md={8} xs={24}>
          <ItemThird
            styleName="gx-package"
            headerStyle="gx-package-header gx-bg-green gx-text-black"
            itemStyle="gx-package-body"
            footerStyle="gx-btn-block"
          />
        </Col> */}
      </Row>
    </div>
  )
}
};
export default Circle;

