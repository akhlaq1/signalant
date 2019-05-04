import React from "react";
import {Card, Input, Select,Form , Button, Col, Steps, Checkbox, DatePicker } from "antd";
import { RED } from "../../../../constants/ThemeSetting";



const Option = Select.Option;
const FormItem = Form.Item;
const Step = Steps.Step;
const CheckboxGroup = Checkbox.Group;
const RangePicker = DatePicker.RangePicker;
const rangeConfig = {
  rules: [{type: 'array', required: true, message: 'Please select time!'}],
};
class Basic extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  


   render(){
    function handleChange(value) {
      console.log(`selected ${value}`);
    }
    
function onChange(checkedValues) {
  console.log('checked = ', checkedValues);
}

  
    function handleBlur() {
      console.log('blur');
    }
  
    function handleFocus() {
      console.log('focus');
    }
    var loss ={
      backgroundColor : '#FFB9B9', color : '#545454',
    }
     var profit ={
       backgroundColor : '#B9DCB9', color : '#545454',
     }
   
     const {getFieldDecorator} = this.props.form;
     const formItemLayout = {
       labelCol: {xs: 24, sm: 6},
       wrapperCol: {xs: 24, sm: 14, lg:24 },
     };
     const plainOptions = ['Buy Alerts', 'Sell Alerts', 'Both'];
  return (
  //   <Card className="gx-card" title="Vertical">
  //   <Steps direction="vertical" current={1}>
  //     <Step title="Finished" description="This is a description."/>
  //     <Step title="In Progress" description="This is a description."/>
  //     <Step title="Waiting" description="This is a description."/>
  //   </Steps>
  // </Card>
    <Card  title="Create Signal" >
      {/* <Input placeholder="Basic usage"/> */}
      {/* style={{display:'flex', flexDirection: 'row',}} */}
      <Form onSubmit={this.handleSubmit}>
      {/* <FormItem
            {...formItemLayout}
            label="Select"
            hasFeedback
          >
            {getFieldDecorator('select', {
              rules: [
                {required: true, message: 'Please select your country!'},
              ],
            })(
              <Select placeholder="Please select a country">
                <Option value="china">China</Option>
                <Option value="use">U.S.A</Option>
              </Select>
            )}
          </FormItem> */}
      
      <div style={{display:'flex', flexDirection: 'row',justifyContent:'center'}}>
         {/* <div className="hide-mobile">
      <Col lg={24} md={24} sm={24} xs={24}>
      <Steps direction="vertical" progressDot style={{padding : 0}}>
        <Step title="Currency Pairs"/>
        <Step title="Position" />
        <Step title="Entry"/>
        <Step title="Exit"/>
        <Step title="Strategy Name"/>
        <Step title="Finish"/>
      </Steps>
      </Col>
      </div> */}
      <Col lg={18} md={24} sm={24} xs={24}>
     
      <Col lg={24} md={12} sm={24} xs={24} className="hide-mobile1" >

      <FormItem
            {...formItemLayout}
            style={{width:'100%', margin:'0px'}}
            hasFeedback
          >
              {getFieldDecorator('select Currency', {
              rules: [
                {required: true, message: 'Please select Currency pair!'},
              ],
            })(

      <Select

      className="gx-mb-2 gx-mt-2 gx-pr-lg-2 gx-ml-0 gx-ml-lg-2" 
        showSearch
        // style={{paddingRight:'6px'}}
        placeholder="Add Currency pair"
        optionFilterProp="children"
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
      >
        <Option value="XAUUSD">XAUUSD</Option>
        <Option value="XAGUSD">XAGUSD</Option>
        <Option value="EURUSD">EURUSD</Option>
        <Option value="GBPUSD">GBPUSD</Option>
        <Option value="AUDUSD">AUDUSD</Option>
        <Option value="NZDUSD">NZDUSD</Option>
        <Option value="USDCAD">USDCAD</Option>
        <Option value="USDCHF">USDCHF</Option>
        <Option value="USDJPY">USDJPY</Option>
        <Option value="EURGBP">EURGBP</Option>
        <Option value="EURCHF">EURCHF</Option>
        <Option value="EURJPY">EURJPY</Option>
        <Option value="USDSEK">USDSEK</Option>
        <Option value="GBPJPY">GBPJPY</Option>
        <Option value="AUDJPY">AUDJPY</Option>
        <Option value="AUDNZD">AUDNZD</Option>
        <Option value="USDTRY">USDTRY</Option>
        <Option value="USDMXN">USDMXN</Option>
        <Option value="GBPCAD">GBPCAD</Option>
        <Option value="GBPAUD">GBPAUD</Option>
      </Select>
            )}
      </FormItem>
      <FormItem
            {...formItemLayout}
            style={{width:'100%', margin:'0px'}}
            hasFeedback
          >
              {getFieldDecorator('select', {
              rules: [
                {required: true, message: 'Please select timestap!'},
              ],
            })(
      <Select placeholder="Select timeframe ex:1 hour" className="gx-mt-2 gx-mb-2 gx-ml-0 gx-ml-lg-2"  defaultValue="1 hour"  onChange={handleChange}>
          <Option value="1 min">1 min</Option>
          <Option value="5 min">5 min</Option>
          <Option value="30 min">30 min</Option>
          <Option value="1 hour">1 hour</Option>
          <Option value="4 hour">4 hour</Option>
          <Option value="1 day">1 day</Option>
          <Option value="1 week">1 week</Option>
      </Select>
       )}
       </FormItem>
      </Col>
     
      <Col lg={24} md={12} sm={24} xs={24}  className="hide-mobile1" >
      <div className="gx-mb-2 gx-mt-3 gx-mr-lg-2 gx-ml-lg-2" style={{width: '100%',display:'flex'}}>
      <Col lg={10} md={12} sm={24} xs={24}  >
      <Checkbox onChange={onChange}>Buy Alerts</Checkbox> 
      </Col>
      <Col lg={10} md={12} sm={24} xs={24}  >
      <Checkbox onChange={onChange}>Sell Alerts</Checkbox>
      </Col>
      <Col lg={10} md={12} sm={24} xs={24}  >
      <Checkbox onChange={onChange}>Both</Checkbox>
      </Col>

      </div>

      <div className="gx-mb-2 gx-mt-2 gx-mr-lg-2 gx-pl-lg-3" style={{width: '100%'}}>
      <FormItem
            {...formItemLayout}
            style={{ marginBottom:'0px',marginLeft:'0px'}}
            hasFeedback
          >
              {getFieldDecorator('Quantity', {
              rules: [
                {required: true, message: 'Please fill Quantity!'},
              ],
            })(
      <Input  placeholder="Trade Quantity"/>
      )}
      </FormItem>
      </div>

      </Col>

      <Col lg={24} md={12} sm={24} xs={24}  className="hide-mobile1" >
      <FormItem
            {...formItemLayout}
            style={{width:'100%', margin:'0px'}}
            hasFeedback
          >
              {getFieldDecorator('Indicator', {
              rules: [
                {required: true, message: 'Please select Indicator!'},
              ],
            })(
     <Select
      className="gx-mb-2 gx-mt-2 gx-mr-2 gx-ml-0 gx-ml-lg-2" 
        showSearch
       
        placeholder="Indicator ex: SMA"
        optionFilterProp="children"
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
      >
        <Option value="Simple Moving Average">Simple Moving Average</Option>
        <Option value="Exponential moving average">Exponential moving average</Option>
        <Option value="MACD (Moving Average Convergence Divergence)">MACD (Moving Average Convergence Divergence)</Option>
        <Option value="RSI (Relative Strength Index)">RSI (Relative Strength Index)</Option>
        <Option value="Bollinger bands">Bollinger bands</Option>
        {/* <Option value="Stochastic Oscillator ">Stochastic Oscillator </Option>
        <Option value="Parabolic SAR">Parabolic SAR</Option>
        <Option value="ADX (Average directional Index)">ADX (Average directional Index)</Option>
        <Option value="Ichimoku Kinko Hyo">Ichimoku Kinko Hyo</Option> */}
      
      </Select>
                )}
              </FormItem>


      
      
      <div className="gx-mb-2 gx-mt-2 gx-mr-lg-2 gx-pl-lg-2" style={{width: '100%'}}>
      <FormItem
            {...formItemLayout}
            style={{ marginBottom:'0px',marginLeft:'0px'}}
            hasFeedback
          >
              {getFieldDecorator('Comparator', {
              rules: [
                {required: true, message: 'Please fill value!'},
              ],
            })(
      <Input    placeholder="Value 1"/>
      )}
       </FormItem>

      </div>
     
     
      

      <div className="gx-pb-2 gx-pt-2  gx-mr-lg-2 gx-pl-lg-2 gx-mb-xs-3 gx-mt-xs-3" style={{width: '100%'}}>

      <FormItem
            {...formItemLayout}
            style={{ marginBottom:'0px',marginLeft:'0px'}}
            hasFeedback
          >
              {getFieldDecorator('Indicator2', {
              rules: [
                {required: true, message: 'Please fill value!'},
              ],
            })(
      <Input   placeholder="Value 2"/>
      )}
      </FormItem>

      </div>
      

      </Col>

      <Col lg={24} md={12} sm={24} xs={24}  className="hide-mobile1"  >

      <div className="gx-mb-2 gx-mt-2 gx-mr-lg-2 gx-ml-lg-2" style={{width: '100%'}}>

      <FormItem
            {...formItemLayout}
            style={{ marginBottom:'0px',marginLeft:'0px'}}
            hasFeedback
          >
              {getFieldDecorator('stoploss', {
              rules: [
                {required: true, message: 'Please fill stop loss %!'},
              ],
            })(
      <Input  style={loss} placeholder="Stop Loss %" />
      )}
      </FormItem>

      </div>

      <div className="gx-pb-2 gx-pt-2 gx-mr-lg-2 gx-pl-lg-2" style={{width: '100%'}}>

      <FormItem
            {...formItemLayout}
            style={{ marginBottom:'0px',marginLeft:'0px'}}
            hasFeedback
          >
              {getFieldDecorator('target profit', {
              rules: [
                {required: true, message: 'Please fill target profit %!'},
              ],
            })(
      <Input    style={profit} placeholder="Target Profit %" />
      )}
      </FormItem>

      </div>

      </Col>

      <Col lg={24} md={12} sm={24} xs={24}  className="hide-mobile1"  >

      <div className="gx-mb-2 gx-mt-2 gx-mr-lg-2 gx-ml-lg-2" style={{width: '100%'}}>

      <FormItem
            {...formItemLayout}
            style={{ marginBottom:'0px',marginLeft:'0px'}}
            hasFeedback
          >
              {getFieldDecorator('stoploss', {
              rules: [
                {required: true, message: 'Please fill moving stop loss !'},
              ],
            })(
      <Input  placeholder="Moving Stop Loss" />
      )}
      </FormItem>

      </div>

      <div className="gx-pb-2 gx-pt-2 gx-mr-lg-2 gx-pl-lg-2" style={{width: '100%'}}>

      <FormItem
            {...formItemLayout}
            style={{ marginBottom:'0px',marginLeft:'0px'}}
            hasFeedback
          >
              {getFieldDecorator('target profit', {
              rules: [
                {required: true, message: 'Please fill moving profit !'},
              ],
            })(
      <Input    placeholder="Moving Profit" />
      )}
      </FormItem>

      </div>

      </Col>


      <Col lg={24} md={12} sm={24} xs={24}  className="hide-mobile1"  >
      <div className="gx-mb-2 gx-mt-3 gx-mr-lg-2 gx-ml-lg-4" style={{width: '100%',display:'flex'}}>

      <Col lg={6} md={12} sm={24} xs={24} style={{paddingTop: "10px"}}  >
      <label>Trade timing:</label>
      </Col>

      <Col lg={18} md={12} sm={24} xs={24}  >
      <FormItem
            {...formItemLayout}
            style={{ marginBottom:'0px',marginLeft:'0px'}}
          >
            {getFieldDecorator('range-time-picker', rangeConfig)(
              <RangePicker className="gx-mb-3" style={{width:'100%'}} showTime format="YYYY-MM-DD HH:mm:ss"/>
            )}
          </FormItem>
          </Col>
     </div>

      </Col>

      <Col lg={23} md={12} sm={24} xs={24} className="gx-pr-lg-0" >

      <div className="gx-mb-2 gx-mt-2 gx-mr-lg-2 gx-ml-lg-2" style={{width: '100%'}}>
      <FormItem
            {...formItemLayout}
            style={{ marginBottom:'0px',marginLeft:'0px'}}
            hasFeedback
          >
              {getFieldDecorator('crossover', {
              rules: [
                {required: true, message: 'Please enter Strategy name!'},
              ],
            })(
      <Input  placeholder="ex: My golden crossover" />
      )}
      </FormItem>

      <br />
      
      </div>

      </Col>

      
      
      <Col lg={24} md={12} sm={24} xs={24}  style={{textAlign: 'center'}}>
  
      <Button 
                    type="primary"
                    htmlType="submit"
                    // disabled={hasErrors(getFieldsError())}
                    data-tut="reactour__copy"
            >
              Create Signal
            </Button>
            </Col>
            </Col>
            </div>
            </Form>
    </Card>
  );
            } 
}
const test = Form.create()(Basic);
// export default SearchField;
export default test;
