import React, {Component} from "react";
import {Button, Card, Form, Input} from "antd";
import * as firebase from 'firebase';
import {connect} from 'react-redux';

const FormItem = Form.Item;
// const Option = Select.Option;
const { TextArea } = Input;

class CreatePkg extends Component {
    
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };

  
  handleSubmit = (e) => {

    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);    
            firebase.database().ref("packages").push({
              "Name"        : values.Name,
              "Description" : values.Description,
              "Price"       : values.Price,
              "Duration"    : values.Duration,
            });   
      }
    });
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({confirmDirty: this.state.confirmDirty || !!value});
  }
  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }
  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], {force: true});
    }
    callback();
  }
  handleWebsiteChange = (value) => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({autoCompleteResult});
  }

  render() {
    const {getFieldDecorator} = this.props.form;
    // const {autoCompleteResult} = this.state;
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

    return (
      <Card className="gx-card" title="Package Form">
        <Form onSubmit={this.handleSubmit}>
          <FormItem
            {...formItemLayout}
            label={(
              <span>
              Name                    
            </span>
            )}          >
            {getFieldDecorator('Name', {
              rules: [{required: true, message: 'Please enter your Firstname!', whitespace: true}],
            })(
              <Input/>
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label={(
              <span>
              Description                    
            </span>
            )}          >
            {getFieldDecorator('Description', {
              rules: [{required: true, message: 'Please enter your Description!', whitespace: true}],
            })(
            <TextArea rows={4} />
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label={(
              <span>
              Price                    
            </span>
            )}          >
            {getFieldDecorator('Price', {
              rules: [{required: true, message: 'Please enter your Price!', whitespace: true}],
            })(
              <Input/>
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label={(
              <span>
              Duration                    
            </span>
            )}          >
            {getFieldDecorator('Duration', {
              rules: [{required: true, message: 'Please enter your Duration!', whitespace: true}],
            })(
              <Input/>
            )}
          </FormItem>

          <FormItem {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">Create Package</Button>
          </FormItem>
        </Form>
      </Card>
    );
  }

}

const CreatePakg = Form.create()(CreatePkg);
const mapStateToProps = (state) => {
    console.log(state.auth.authUser);    
}
export default connect(mapStateToProps)(CreatePakg);
