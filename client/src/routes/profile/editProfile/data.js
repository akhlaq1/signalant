import React, {Component} from "react";
import {Button, Card, Form, Input, Select} from "antd";
import * as firebase from 'firebase';
import {connect} from 'react-redux';

const FormItem = Form.Item;
const Option = Select.Option;

class Profile extends Component {
    
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };
  
  handleSubmit = (e) => {

    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        firebase.auth().onAuthStateChanged(function(user){
          if(user){
            firebase.database().ref("users").child(user.uid).update({
              "Name":values.Firstname,
              "Phone":values.phone
            });
          }
        })      
      }
    });
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({confirmDirty: this.state.confirmDirty || !!value});
  }

  render() {
    const {getFieldDecorator} = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: {span: 24},
        sm: {span: 8},
      },
      wrapperCol: {
        xs: {span: 24},
        sm: {span: 16},
      },
    };

    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };

    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '91',
    })(
      <Select style={{width: 70}}>
        <Option value="91">+91</Option>
        <Option value="00">+00</Option>
      </Select>
    );

    return (
      <Card className="gx-card" title="Profile Form">
        <Form onSubmit={this.handleSubmit}>
          <FormItem
            {...formItemLayout}
            label={(
              <span>
              Name                    
            </span>
            )}          >
            {getFieldDecorator('Firstname', {
              rules: [{required: true, message: 'Please input your Firstname!', whitespace: true}],
            })(
              <Input/>
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="Phone Number"
          >
            {getFieldDecorator('phone', {
              rules: [{required: true, message: 'Please input your phone number!'}],
            })(
              <Input addonBefore={prefixSelector} style={{width: '100%'}}/>
            )}
          </FormItem>
          
          <FormItem {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">Create Profile</Button>
          </FormItem>
        </Form>
      </Card>
    );
  }

}

const ProfileForm = Form.create()(Profile);
const mapStateToProps = (state) => {
    console.log(state.auth.authUser);    
}
export default connect(mapStateToProps)(ProfileForm);
