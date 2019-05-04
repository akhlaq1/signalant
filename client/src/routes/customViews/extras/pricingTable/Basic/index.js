import React, {Component} from "react";
import {Col, Row} from "antd";
import ItemSecond from "../ItemSecond";
import { Redirect } from "react-router-dom";

class Basic extends Component {

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
    // if(this.state.pid == " "){
    //   return <Redirect to={"/custom-views/extras/pricing-table"} />;
    // }
    
    // if (this.state.pid !== " ") {
    //   console.log("came to redirect function!");
      
    //   return <Redirect to={"/custom-views/extras/checkout"} />;
    // }
    

    return (
      <div className="gx-price-tables gx-pt-default">
        <Row>
          <Col xl={8} lg={24} md={8} xs={24} >
            <ItemSecond
              styleName="gx-package gx-bg-primary-light gx-highlight gx-border-0"
              headerStyle="gx-package-header gx-bg-primary gx-text-white"
              itemStyle="gx-package-body gx-text-white"
              footerStyle="gx-btn-primary"
              grid
              checkout={this.checkout}
            />
          </Col>
        </Row>
      </div>
    )
  }
};

export default Basic;

