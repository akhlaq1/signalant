import React, {Component}  from "react";
import Widget from "components/Widget";
import * as firebase from "firebase";
import { RIEInput } from 'riek2';
import _ from 'lodash';

class Contact extends Component{

  constructor(props){
    super(props);
    this.state = {email:"", phone:""};
  }
  
  componentDidMount() {
    var that = this;
    firebase.auth().onAuthStateChanged(function(user){
      if(user){
        console.log(user.uid);
        var Ref = firebase.database().ref('/users/' + user.uid);
        Ref.once('value', snapshot => {
          let email = snapshot.val().Email;
          let phone = snapshot.val().Phone;          
          that.setState({email:email, phone:phone});
        })
      }
    })    
  }

  mailUpdate(task){
    firebase.auth().onAuthStateChanged(function(user){
      if(user){
        firebase.database().ref("users").child(user.uid).update({Email: task.title});
        user.updateEmail(task.title).then(function() {
          console.log("Update successful.");
        }).catch(function(error) {
         console.log("An error happened.");
        });
      }
    })
  }

  phoneUpdate(task){
    console.log(task.title);
    firebase.auth().onAuthStateChanged(function(user){
      if(user){
        firebase.database().ref("users").child(user.uid).update({Phone: task.title});
      }
    })
  }

  render(){
    // console.log(this.state.title.title);
      return (
        <Widget title="Contact" styleName="gx-card-profile-sm">
            <div  className="gx-media gx-align-items-center gx-flex-nowrap gx-pro-contact-list">
              <div className="gx-mr-3">
                <svg  width="22" height="22" viewBox="0 0 20 20">
                  <path d="M17.388,4.751H2.613c-0.213,0-0.389,0.175-0.389,0.389v9.72c0,0.216,0.175,0.389,0.389,0.389h14.775c0.214,0,0.389-0.173,0.389-0.389v-9.72C17.776,4.926,17.602,4.751,17.388,4.751 M16.448,5.53L10,11.984L3.552,5.53H16.448zM3.002,6.081l3.921,3.925l-3.921,3.925V6.081z M3.56,14.471l3.914-3.916l2.253,2.253c0.153,0.153,0.395,0.153,0.548,0l2.253-2.253l3.913,3.916H3.56z M16.999,13.931l-3.921-3.925l3.921-3.925V13.931z"></path>
                </svg>
              </div>

              <div className="gx-media-body">
                <span className="gx-mb-0 gx-text-grey gx-fs-sm">Email</span>
                {/* <p className="gx-mb-0" >{this.state.email}</p> */}
                <p><RIEInput value={this.state.email} change={this.mailUpdate} propName='title' validate={_.isString} /></p>
              </div>
            </div>

            <div className="gx-media gx-align-items-center gx-flex-nowrap gx-pro-contact-list">
              <div className="gx-mr-3">
                <svg  width="22" height="22" viewBox="0 0 20 20">
                  <path  d="M10,15.654c-0.417,0-0.754,0.338-0.754,0.754S9.583,17.162,10,17.162s0.754-0.338,0.754-0.754S10.417,15.654,10,15.654z M14.523,1.33H5.477c-0.833,0-1.508,0.675-1.508,1.508v14.324c0,0.833,0.675,1.508,1.508,1.508h9.047c0.833,0,1.508-0.675,1.508-1.508V2.838C16.031,2.005,15.356,1.33,14.523,1.33z M15.277,17.162c0,0.416-0.338,0.754-0.754,0.754H5.477c-0.417,0-0.754-0.338-0.754-0.754V2.838c0-0.417,0.337-0.754,0.754-0.754h9.047c0.416,0,0.754,0.337,0.754,0.754V17.162zM13.77,2.838H6.23c-0.417,0-0.754,0.337-0.754,0.754v10.555c0,0.416,0.337,0.754,0.754,0.754h7.539c0.416,0,0.754-0.338,0.754-0.754V3.592C14.523,3.175,14.186,2.838,13.77,2.838z M13.77,13.77c0,0.208-0.169,0.377-0.377,0.377H6.607c-0.208,0-0.377-0.169-0.377-0.377V3.969c0-0.208,0.169-0.377,0.377-0.377h6.785c0.208,0,0.377,0.169,0.377,0.377V13.77z"></path>
                </svg>
              </div>
              <div className="gx-media-body">
                <span className="gx-mb-0 gx-text-grey gx-fs-sm">Phone</span>
                {/* <p className="gx-mb-0">{this.state.phone}</p> */}
              <p><RIEInput value={this.state.phone} change={this.phoneUpdate} propName='title' validate={_.isString} /></p>
              </div>
            </div>

            {/* <RIEInput value={this.state.message} change={this.httpTaskCallback} propName='title' validate={_.isString} /> */}
        </Widget>
      )
  }
}

export default Contact;
