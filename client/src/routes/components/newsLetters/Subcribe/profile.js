import React, { Component } from "react";
import PropTypes from "prop-types";
import {Button, Card, Form, Input, message, Col} from "antd";
import {connect} from 'react-redux';
import axios from "axios";



const FormItem = Form.Item;

class Profile extends Component{

  onSubmitHandler = e => {
    e.preventDefault();

    this.props.form.validateFieldsAndScroll((err, values) => {
      console.log(values);
      console.log(values.firstname);
      console.log(values.lastname);
      console.log(values.email);


      const newUser = {
        firstname: values.firstname,
        lastname : values.lastname,
        email    : values.email
      };

      axios({
        method: 'post',
        url: 'http://localhost:5000/api/auth/newsletter',
        data: newUser
        })
        .then(function (response) {
            //handle success
            message.success('You are succesfully subscribed to signalant newsletters!');
            console.log(response);
            if(response){
              this.props.resetForm();
            }
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
        e.target.reset();
    });
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  render(){
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

    return(
      <Card  title="Newsletter">
         <Col lg={24} md={24} sm={24} xs={24}>
        <Form onSubmit={this.onSubmitHandler}>
        <Col lg={18} md={24} sm={24} xs={24}>
          <FormItem
            {...formItemLayout}
            label={(
              <span>
              FirstName                    
            </span>
            )}          > 
            {getFieldDecorator('firstname', {
              rules: [{required: true, message: 'Please input your Firstname!', whitespace: true}],
            })(
              <Input/>
            )}
          </FormItem>
          </Col>
          <Col lg={18} md={24} sm={24} xs={24}>
          <FormItem
            {...formItemLayout}
            label={(
              <span>
              LastName                    
            </span>
            )}          >
            {getFieldDecorator('lastname', {
              rules: [{required: true, message: 'Please input your Lastname!', whitespace: true}],
            })(
              <Input/>
            )}
          </FormItem>
          </Col>

          <Col lg={18} md={24} sm={24} xs={24}>
          <FormItem
            {...formItemLayout}
            label={(
              <span>
              Email                    
            </span>
            )}          >
            {getFieldDecorator('email', {
              rules: [{required: true, type: 'email', message: 'The input is not valid E-mail!', whitespace: true}],
            })(
              <Input/>
            )}
          </FormItem>
          </Col>
          <Col lg={16} md={24} sm={24} xs={24} style={{textAlign:'center', paddingTop:'10px'}}>
          <FormItem {...tailFormItemLayout}>
            <Button type="primary"  htmlType="submit" method="POST">subscribe</Button>
          </FormItem>
           </Col>
        </Form>
        </Col>
      </Card>
    )
  }
}

const ProfileForm = Form.create()(Profile);
export default ProfileForm;


// OLD CODE USED FOR POSTING DATA TO BACKEND
//import files
// import {newsletter} from "../../../../appRedux/actions/Auth";

//inside onsubmit
// this.props.newsletter(newUser, this.props.history);

// after render fun
// const { firstname, lastname, email, errors } = this.state;

//end of code
// ProfileForm.propTypes = {
//   newsletter: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired
// };

// const mapStateToProps = state => ({
//   auth: state.auth,
// });

// export default connect(
//   mapStateToProps,
//   {newsletter}
// )(ProfileForm);


