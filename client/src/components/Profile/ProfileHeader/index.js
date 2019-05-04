import React from "react";
import {Avatar} from "antd";
import {Component} from "react";
import * as firebase from "firebase";
import { RIEInput } from 'riek2';
import _ from 'lodash';


class ProfileHeader extends Component {
  constructor(){
    super();
    this.state = {name: " ", country: " "};
  }
  componentDidMount() {
    var that = this;
    firebase.auth().onAuthStateChanged(function(user){
      if(user){
        var Ref = firebase.database().ref('/users/' + user.uid);
        Ref.once('value', snapshot => {
          let Name = snapshot.val().Name;
          let Country = snapshot.val().Country;
          that.setState({ name: Name, country: Country});
        })
      }
    })    
  }

  nameUpdate(task){
    firebase.auth().onAuthStateChanged(function(user){
      if(user){
        firebase.database().ref("users").child(user.uid).update({Name: task.title});
      }
    })
  }

  countryUpdate(task){
    firebase.auth().onAuthStateChanged(function(user){
      if(user){
        firebase.database().ref("users").child(user.uid).update({Country: task.title});
      }
    })
  }

  render() {
    return (
      <div className="gx-profile-banner">
        <div className="gx-profile-container">
          <div className="gx-profile-banner-top">
            <div className="gx-profile-banner-top-left">
              <div className="gx-profile-banner-avatar">
                <Avatar className="gx-size-90" alt="..." src={'https://via.placeholder.com/150x150'}/>
              </div>
              <div className="gx-profile-banner-avatar-info">
                {/* <h2 className="gx-mb-2 gx-mb-sm-3 gx-fs-xxl gx-font-weight-light">{this.state.name}</h2> */}
                <h2 className="gx-mb-2 gx-mb-sm-3 gx-fs-xxl gx-font-weight-light">
                  <RIEInput value={this.state.name} change={this.nameUpdate} propName='title' validate={_.isString} />
                </h2>
                {/* <p className="gx-mb-0 gx-fs-lg">{this.state.country}</p> */}
                <p className="gx-mb-0 gx-fs-lg">
                  <RIEInput value={this.state.country} change={this.countryUpdate} propName='title' validate={_.isString} />
                </p>
              </div>
            </div>
            {/* <div className="gx-profile-banner-top-right">
              <ul className="gx-follower-list">
                <li>
                  <span className="gx-follower-title gx-fs-lg gx-font-weight-medium">2k+</span>
                  <span className="gx-fs-sm">Followers</span></li>
                <li>
                  <span className="gx-follower-title gx-fs-lg gx-font-weight-medium">847</span>
                  <span className="gx-fs-sm">Following</span></li>
                <li>
                  <span className="gx-follower-title gx-fs-lg gx-font-weight-medium">327</span>
                  <span className="gx-fs-sm">Friends</span>
                </li>
              </ul>
            </div> */}
          </div>
          <div className="gx-profile-banner-bottom">
            {/* <div className="gx-tab-list">
              <ul className="gx-navbar-nav">
                <li>
                  <span className="gx-link">Timeline</span>
                </li>
                <li>
                  <span className="gx-link">About</span>
                </li>
                <li>
                  <span className="gx-link">Photos</span>
                </li>
                <li>
                  <span className="gx-link">Friends <span className="gx-fs-xs">287</span></span>
                </li>
                <li>
                  <span className="gx-link">More</span>
                </li>
              </ul>
            </div> */}
            {/* <span className="gx-link gx-profile-setting">
              <Link className="gx-link" to="/components/dataEntry/form">
                <Icon type="edit" /> &nbsp;&nbsp;
                <span className="gx-d-inline-flex gx-vertical-align-middle gx-ml-1 gx-ml-sm-0">Edit Profile</span>
              </Link>
            </span> */}
          </div>
        </div>
      </div>
    )
  }
}

export default ProfileHeader;