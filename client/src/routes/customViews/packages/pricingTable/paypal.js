import React, { Component } from "react";
import PaypalExpressBtn from "react-paypal-express-checkout";
import * as firebase from "firebase";
import { Redirect } from "react-router-dom";

class PayPal extends Component {

constructor(props) {
   super(props);
   this.state = {
      redirect: false
   };
   this.createOrder = this.createOrder.bind(this);
}

createOrder(payment) {
let postData = {
   payerID: payment.payerID,
   paymentID: payment.paymentID,
   paymentToken: payment.paymentToken,
   pid: this.props.pid
};

console.log(postData);
var that = this;
firebase.auth().onAuthStateChanged(function(user){
    if(user){
        let Ref = firebase.database().ref("invoices/"); 
        Ref.push({paymentID: payment.paymentID,  pid: postData.pid, TraderId: user.uid},function(error) {
            if (error) {
              // The write failed...
              console.log("Data not saved!");
            } else {
                // Data saved successfully!
                console.log("Data saved successfully!");
                that.setState({ redirect: true });
            }
          })
    }
})
}

render() {

if (this.state.redirect) {
    return <Redirect to={"/custom-views/packages/thankyou"} />;
}

const onSuccess = (payment) => {
   console.log(payment);
   this.createOrder(payment);
};

const onCancel = (data) => {
   console.log("The payment was cancelled!", data);
};

const onError = (err) => {
console.log("Error!", err);
};

let env = "sandbox"; // Change to "production" for live
let currency = "EUR";
let convert = this.props.value;
let price = Number(convert);
console.log(price);

let total = price;

const client = {
    sandbox:
        "AQwoZAAHsmA5vBLj_mZffS3NWJjNJODewuV2WakPm-BQilgsawTtnbLvWHNC73idcfiaHBOjaeTDkAS8",
// sandbox: "AXi82j1SOgoh1civl_8RVORQskl3evp1eq8OcPrin-vcM7U7Uizc7VIbDEOlKEnn1_ZeybU5_5zW1W9j",
production: "<insert production client id>"
};
var style={
    size:"medium"
}

return (
    <PaypalExpressBtn env={env} client={client} currency={currency} total={total} onError={onError} onSuccess={onSuccess} onCancel={onCancel} style={style}  />
);
}
}

export default PayPal;