import React from "react";
import {Button, Modal} from "antd";
import IntlMessages from "util/IntlMessages";
import * as firebase from "firebase";
import {Link} from "react-router-dom";
import PayPal from "../pricingTable/paypal";



class PriceItem extends React.Component{
  state = {
    loading: false,
    visible: false,
  };
  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  handleOk = () => {
    this.setState({loading: true});
    setTimeout(() => {
      this.setState({loading: false, visible: false});
    }, 3000);
  };
  handleCancel = () => {
    this.setState({visible: false});
  };

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
    const {visible, loading} = this.state;
    const packages = this.state.data.map((item, i) => {
     
    return (
      <div key={i} className="gx-package">
          <div className="gx-package-header gx-bg-primary gx-text-white gx-pt-4 gx-pb-4">
            <h2 className="gx-price"  style={{marginBottom:'0px'}}><i className="icon icon-halfstar"/>{item.Price} €</h2>
            <p className="gx-letter-spacing-base gx-text-white gx-text-uppercase gx-mt-3">{item.Duration}</p>
            <p className="gx-letter-spacing-base gx-text-white gx-text-uppercase gx-mb-0">{item.Name}</p>
            
          </div>
      
          <div className="gx-package-body gx-text-black">
            <ul className="gx-package-items">
              <li>
                <i className="icon icon-check"/>
                <span>{item.Description}</span>
              </li>
              
              <li>
                <i className="icon icon-check"/>
                <span>10 Indicators</span>
              </li>
      
              <li>
                <i className="icon icon-check"/>
                <span>Create Strategies</span>
              </li>
      
              <li>
                <i className="icon icon-check"/>
                <span>Unlimited Backtests</span>
              </li>
              <li>
                <i className="icon icon-check"/>
                <span>Signal Automations</span>
              </li>
              <li>
                <i className="icon icon-check"/>
                <span>Alert DND Timings</span>
              </li>
              <li>
                <i className="icon icon-check"/>
                <span>Analytics</span>
              </li>
            </ul>
      
            <div className="gx-package-footer">
              <Link to="/custom-views/packages/checkout">
                <Button type="primary" value={item.key} onClick={this.props.checkout}  className="gx-btn-primary">Subscribe</Button>
              </Link>
            </div>
          </div>
      </div>
    )
  });
  return(
    <div className="akhil">
    <p>{this.state.pid}</p>
    <div className="siva1">{packages[0]}</div>
    <div className="siva">{packages[1]}</div>
    </div>
  )
}
}
export default PriceItem;

{/* <Modal
    visible={visible}
    title="Checkout"
    onOk={this.handleOk}
    onCancel={this.handleCancel}
    footer={[
      <div className="gx-text-center" ><PayPal value={this.state.data.Price} pid={this.state.pid}/></div>,
    ]}
  >
    <div  className="gx-login-header">
      <h4 value="key">Package Name : PREMIUM</h4>
      <h4>Price : 20€</h4>
      <h4>Description : 20 Currency Pair</h4>
    </div>
</Modal> */}

{/* <Link to="/custom-views/packages/checkout"></Link> */}

// open(){
  //   // console.log(key);
    
  //   // this.checkout(id);
  //   this.setState({ visible: true });
  // }

  // checkout(id) {
  //   console.log(id);
    
    // console.log(e.target);
    // let pid = e.target.getAttribute("value");
    // console.log("Pid" + pid);
    // sessionStorage.setItem("pid", pid);
    // this.setState({ pid: pid });
  // }

  // this.checkout = this.checkout.bind(this);