import React from "react";
import {Button} from "antd";
import IntlMessages from "util/IntlMessages";
import * as firebase from "firebase";
import {Link} from "react-router-dom";
// import PaypalExpressBtn from 'react-paypal-express-checkout';

class PriceItem extends React.Component{
  constructor(props) {
    super(props);
    this.state = { data: [], pid:" "};
  }

  componentDidMount() {
    const database = firebase.database().ref("packages");

    database.on("value", snapshot => {
      const data = [];

      snapshot.forEach(childSnapShot => {
        const pkgs = {
          key           : childSnapShot.key.toString(),
          Name          : childSnapShot.val().Name,
          Description   : childSnapShot.val().Description,
          Duration      : childSnapShot.val().Duration,
          Price         : childSnapShot.val().Price,
        };
        data.push(pkgs);
      });

      this.setState(prevState => {
        return { data: [...prevState.data, ...data] };
      });
    });
  }

  pay(item){
    console.log(item.key);
    console.log(item.Price);
    
  }

  render(){
    console.log(this.state.data);
    const packages = this.state.data.map((item, i) => {
      return (
        <div key={i} className="gx-package gx-bg-primary-light gx-border-0">
          <div className="gx-package-header gx-bg-primary gx-text-white">
            <h2 className="gx-price"><i className="icon icon-halfstar"/>{item.Price}€</h2>
            <p className="gx-letter-spacing-base gx-text-white gx-text-uppercase gx-mb-0">{item.Name}</p>
          </div>
      
          <div className="gx-package-body gx-text-white">
            <ul className="gx-package-items">
              <li>
                <i className="icon icon-translation"/>
                <span>{item.Description}</span>
              </li>
              
              <li>
                <i className="icon icon-font"/>
                <span>{item.Duration}</span>
              </li>
      
              <li>
                <i className="icon icon-sent"/>
                <span><IntlMessages id="pricingTable.emailComposeInterface"/></span>
              </li>
      
              <li>
                <i className="icon icon-location"/>
                <span><IntlMessages id="pricingTable.locationFinderApp"/></span>
              </li>
            </ul>
      
            <div className="gx-package-footer">
              <Link to="/custom-views/extras/checkout">
                <Button type="primary" value={item.key} onClick={this.props.checkout} className="gx-btn-primary"><IntlMessages id="pricingTable.buyNow"/></Button>
              </Link>
            </div>
          </div>
        </div>
      )
    });
    
    return(
      <div>{packages}</div>
    )
  }
}
export default PriceItem;

// onClick={() => this.pay(item.key)}
// <PaypalExpressBtn env={env} client={client} currency={currency} total={item.Price} onError={onError} onSuccess={onSuccess} onCancel={onCancel} />

// const onSuccess = (payment) => {
//   console.log("The payment was succeeded!", payment);
//   // let save = fireabase.database().ref("invoices/");
//   firebase.auth().onAuthStateChanged(function(user){
//     if(user){
//       console.log(user.uid);
      
//       // save.push({TraderId: "howle",paymentID: payment.paymentID});
//     }
//   })
// }

// const onCancel = (data) => {
//   console.log('The payment was cancelled!', data);
// }

// const onError = (err) => {
//   console.log("Error!", err);
// }

// let env = 'sandbox'; // you can set here to 'production' for production
// let currency = 'EUR'; // or you can set this value from your props or state
// let total = 1;

// const client = {
//   sandbox:    'AXi82j1SOgoh1civl_8RVORQskl3evp1eq8OcPrin-vcM7U7Uizc7VIbDEOlKEnn1_ZeybU5_5zW1W9j',
//   production: 'YOUR-PRODUCTION-APP-ID',
// }