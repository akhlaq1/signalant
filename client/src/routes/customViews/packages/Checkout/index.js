import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import PayPal from "../pricingTable/paypal";
import {Col, Row, Card} from "antd";
import * as firebase from "firebase";

class Checkout extends Component {

constructor(props) {
   super(props);
   this.state = {
      redirect: false,
      pid: "",
      data: [],
};
}

componentDidMount(){
    this.getProductData();
}
getProductData() {
let pid = sessionStorage.getItem("pid");
console.log(pid);

var that = this;
let Ref = firebase.database().ref("/packages/"+ pid);
    Ref.once('value', snapshot => {
        let info = snapshot.val();
        console.log(info);
        that.setState({ data: info, pid:pid});
    })
}

render() {
console.log(this.state.pid);

return (
<Row>
    {/* <Col span={24}>
        <Card title="Checkout"> 
            <table>
                <thead>
                    <tr>
                        <th>Name   </th> 
                        <th>Price  </th>
                        <th>Action </th>
                    </tr>
                </thead>
                
                <tbody>
                    <tr>
                        <td>{this.state.data.Name}</td> 
                        <td>{this.state.data.Price}€</td>
                        <td><PayPal value={this.state.data.Price} pid={this.state.pid}/></td>
                    </tr>
                </tbody>  
            </table>           
        </Card>
    </Col> */}


    <div className="gx-login-container">
        <div className="gx-login-content">
          <div className="gx-login-header gx-text-center">
            <h1 className="gx-login-title">Checkout</h1>
          </div>
          <div  className="gx-login-header">
            <h4>Package Name : {this.state.data.Name}</h4>
            <h4>Price : {this.state.data.Price}€</h4>
            <h4>Description : {this.state.data.Description}</h4>
           
          </div>
          <div className="gx-text-center"><PayPal value={this.state.data.Price} pid={this.state.pid}/></div>
        </div>
      </div>
      </Row>
);
}
}
export default Checkout;
