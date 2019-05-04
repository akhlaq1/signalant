import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import PayPal from "./paypal";
import PostData from "./PostData";

class Checkout extends Component {

constructor(props) {
   super(props);
   this.state = {
      name: "Harsha",
      redirect: false,
      pid: "",
      product: [],
};
}

getProductData(userData) {
let pid = sessionStorage.getItem("pid");
let postData = { uid: userData.uid, token: userData.token, pid: pid };

PostData("getProduct", postData).then(result => {
   let responseJson = result;
   this.setState({ product: responseJson.product });
});
}

render() {

return (
<div className="row body">
<h4>Checkout</h4>
<div className="row">
<div className="medium-4 columns">Product</div>
<div className="medium-4 columns">Name</div>
<div className="medium-4 columns">Price</div>
</div>
<div className="row">
<div className="medium-4 columns">
<img
src={
"https://demos.9lessons.info/PHP-PayPal-ExpressCheckout/img/" +
this.state.product.product_img
}
/>
</div>
<div className="medium-4 columns">{this.state.product.product}</div>
<div className="medium-4 columns">
{this.state.product.price}
<PayPal
value={this.state.product.price}
pid={this.state.product.pid}
/>
</div>
</div>
</div>
);
}
}
export default Checkout;