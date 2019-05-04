import React from "react";
import {Button, Checkbox, Form, Icon, Input, Select} from "antd";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {
  hideMessage,
  showAuthLoader,
  userFacebookSignIn,
  userGithubSignIn,
  userGoogleSignIn,
  userSignUp,
  userTwitterSignIn
} from "appRedux/actions/Auth";

import IntlMessages from "util/IntlMessages";
import {message} from "antd/lib/index";
import CircularProgress from "components/CircularProgress/index";

const FormItem = Form.Item;

class SignUp extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log("values", values);
      if (!err) {
        this.props.showAuthLoader();
        this.props.userSignUp(values);
      }
    });
  };

  constructor() {
    super();
    this.state = {
      email: 'demo@example.com',
      password: 'demo#123',
      values: [ 
        {"id":"1","name": "Afghanistan", "code": "AF"}, 
        {"id":"2","name": "land Islands", "code": "AX"}, 
        {"id":"3","name": "Albania", "code": "AL"}, 
        {"id":"4","name": "Algeria", "code": "DZ"}, 
        {"id":"5","name": "American Samoa", "code": "AS"}, 
        {"id":"6","name": "AndorrA", "code": "AD"}, 
        {"id":"7","name": "Angola", "code": "AO"}, 
        {"id":"8","name": "Anguilla", "code": "AI"}, 
        {"id":"9","name": "Antarctica", "code": "AQ"}, 
        {"id":"10","name": "Antigua and Barbuda", "code": "AG"}, 
        {"id":"11","name": "Argentina", "code": "AR"}, 
        {"id":"12","name": "Armenia", "code": "AM"}, 
        {"id":"13","name": "Aruba", "code": "AW"}, 
        {"id":"14","name": "Australia", "code": "AU"}, 
        {"id":"15","name": "Austria", "code": "AT"}, 
        {"id":"16","name": "Azerbaijan", "code": "AZ"}, 
        {"id":"17","name": "Bahamas", "code": "BS"}, 
        {"id":"18","name": "Bahrain", "code": "BH"}, 
        {"id":"19","name": "Bangladesh", "code": "BD"}, 
        {"id":"20","name": "Barbados", "code": "BB"}, 
        {"id":"21","name": "Belarus", "code": "BY"}, 
        {"id":"22","name": "Belgium", "code": "BE"}, 
        {"id":"23","name": "Belize", "code": "BZ"}, 
        {"id":"24","name": "Benin", "code": "BJ"}, 
        {"id":"25","name": "Bermuda", "code": "BM"}, 
        {"id":"26","name": "Bhutan", "code": "BT"}, 
        {"id":"27","name": "Bolivia", "code": "BO"}, 
        {"id":"28","name": "Bosnia and Herzegovina", "code": "BA"}, 
        {"id":"29","name": "Botswana", "code": "BW"}, 
        {"id":"30","name": "Bouvet Island", "code": "BV"}, 
        {"id":"31","name": "Brazil", "code": "BR"}, 
        {"id":"32","name": "British Indian Ocean Territory", "code": "IO"}, 
        {"id":"33","name": "Brunei Darussalam", "code": "BN"}, 
        {"id":"34","name": "Bulgaria", "code": "BG"}, 
        {"id":"35","name": "Burkina Faso", "code": "BF"}, 
        {"id":"36","name": "Burundi", "code": "BI"}, 
        {"id":"37","name": "Cambodia", "code": "KH"}, 
        {"id":"38","name": "Cameroon", "code": "CM"}, 
        {"id":"39","name": "Canada", "code": "CA"}, 
        {"id":"40","name": "Cape Verde", "code": "CV"}, 
        {"id":"41","name": "Cayman Islands", "code": "KY"}, 
        {"id":"42","name": "Central African Republic", "code": "CF"}, 
        {"id":"43","name": "Chad", "code": "TD"}, 
        {"id":"44","name": "Chile", "code": "CL"}, 
        {"id":"45","name": "China", "code": "CN"}, 
        {"id":"46","name": "Christmas Island", "code": "CX"}, 
        {"id":"47","name": "Cocos (Keeling) Islands", "code": "CC"}, 
        {"id":"48","name": "Colombia", "code": "CO"}, 
        {"id":"49","name": "Comoros", "code": "KM"}, 
        {"id":"50","name": "Congo", "code": "CG"}, 
        {"id":"51","name": "Congo, The Democratic Republic of the", "code": "CD"}, 
        {"id":"52","name": "Cook Islands", "code": "CK"}, 
        {"id":"53","name": "Costa Rica", "code": "CR"}, 
        {"id":"54","name": "Cote D\"Ivoire", "code": "CI"}, 
        {"id":"55","name": "Croatia", "code": "HR"}, 
        {"id":"56","name": "Cuba", "code": "CU"}, 
        {"id":"57","name": "Cyprus", "code": "CY"}, 
        {"id":"58","name": "Czech Republic", "code": "CZ"}, 
        {"id":"59","name": "Denmark", "code": "DK"}, 
        {"id":"60","name": "Djibouti", "code": "DJ"}, 
        {"id":"61","name": "Dominica", "code": "DM"}, 
        {"id":"62","name": "Dominican Republic", "code": "DO"}, 
        {"id":"63","name": "Ecuador", "code": "EC"}, 
        {"id":"64","name": "Egypt", "code": "EG"}, 
        {"id":"65","name": "El Salvador", "code": "SV"}, 
        {"id":"66","name": "Equatorial Guinea", "code": "GQ"}, 
        {"id":"67","name": "Eritrea", "code": "ER"}, 
        {"id":"68","name": "Estonia", "code": "EE"}, 
        {"id":"69","name": "Ethiopia", "code": "ET"}, 
        {"id":"70","name": "Falkland Islands (Malvinas)", "code": "FK"}, 
        {"id":"71","name": "Faroe Islands", "code": "FO"}, 
        {"id":"72","name": "Fiji", "code": "FJ"}, 
        {"id":"73","name": "Finland", "code": "FI"}, 
        {"id":"74","name": "France", "code": "FR"}, 
        {"id":"75","name": "French Guiana", "code": "GF"}, 
        {"id":"76","name": "French Polynesia", "code": "PF"}, 
        {"id":"77","name": "French Southern Territories", "code": "TF"}, 
        {"id":"78","name": "Gabon", "code": "GA"}, 
        {"id":"79","name": "Gambia", "code": "GM"}, 
        {"id":"80","name": "Georgia", "code": "GE"}, 
        {"id":"81","name": "Germany", "code": "DE"}, 
        {"id":"82","name": "Ghana", "code": "GH"}, 
        {"id":"83","name": "Gibraltar", "code": "GI"}, 
        {"id":"84","name": "Greece", "code": "GR"}, 
        {"id":"85","name": "Greenland", "code": "GL"}, 
        {"id":"86","name": "Grenada", "code": "GD"}, 
        {"id":"87","name": "Guadeloupe", "code": "GP"}, 
        {"id":"88","name": "Guam", "code": "GU"}, 
        {"id":"89","name": "Guatemala", "code": "GT"}, 
        {"id":"90","name": "Guernsey", "code": "GG"}, 
        {"id":"91","name": "Guinea", "code": "GN"}, 
        {"id":"92","name": "Guinea-Bissau", "code": "GW"}, 
        {"id":"93","name": "Guyana", "code": "GY"}, 
        {"id":"94","name": "Haiti", "code": "HT"}, 
        {"id":"95","name": "Heard Island and Mcdonald Islands", "code": "HM"}, 
        {"id":"96","name": "Holy See (Vatican City State)", "code": "VA"}, 
        {"id":"97","name": "Honduras", "code": "HN"}, 
        {"id":"98","name": "Hong Kong", "code": "HK"}, 
        {"id":"99","name": "Hungary", "code": "HU"}, 
        {"id":"100","name": "Iceland", "code": "IS"}, 
        {"id":"111","name": "India", "code": "IN"}, 
        {"id":"112","name": "Indonesia", "code": "ID"}, 
        {"id":"113","name": "Iran, Islamic Republic Of", "code": "IR"}, 
        {"id":"114","name": "Iraq", "code": "IQ"}, 
        {"id":"115","name": "Ireland", "code": "IE"}, 
        {"id":"116","name": "Isle of Man", "code": "IM"}, 
        {"id":"117","name": "Israel", "code": "IL"}, 
        {"id":"118","name": "Italy", "code": "IT"}, 
        {"id":"119","name": "Jamaica", "code": "JM"}, 
        {"id":"120","name": "Japan", "code": "JP"}, 
        {"id":"121","name": "Jersey", "code": "JE"}, 
        {"id":"122","name": "Jordan", "code": "JO"}, 
        {"id":"123","name": "Kazakhstan", "code": "KZ"}, 
        {"id":"124","name": "Kenya", "code": "KE"}, 
        {"id":"125","name": "Kiribati", "code": "KI"}, 
        {"id":"126","name": "Korea, Democratic People\"S Republic of", "code": "KP"}, 
        {"id":"127","name": "Korea, Republic of", "code": "KR"}, 
        {"id":"128","name": "Kuwait", "code": "KW"}, 
        {"id":"129","name": "Kyrgyzstan", "code": "KG"}, 
        {"id":"130","name": "Lao People\"S Democratic Republic", "code": "LA"}, 
        {"id":"131","name": "Latvia", "code": "LV"}, 
        {"id":"132","name": "Lebanon", "code": "LB"}, 
        {"id":"133","name": "Lesotho", "code": "LS"}, 
        {"id":"134","name": "Liberia", "code": "LR"}, 
        {"id":"135","name": "Libyan Arab Jamahiriya", "code": "LY"}, 
        {"id":"136","name": "Liechtenstein", "code": "LI"}, 
        {"id":"137","name": "Lithuania", "code": "LT"}, 
        {"id":"138","name": "Luxembourg", "code": "LU"}, 
        {"id":"139","name": "Macao", "code": "MO"}, 
        {"id":"140","name": "Macedonia, The Former Yugoslav Republic of", "code": "MK"}, 
        {"id":"141","name": "Madagascar", "code": "MG"}, 
        {"id":"142","name": "Malawi", "code": "MW"}, 
        {"id":"143","name": "Malaysia", "code": "MY"}, 
        {"id":"144","name": "Maldives", "code": "MV"}, 
        {"id":"145","name": "Mali", "code": "ML"}, 
        {"id":"146","name": "Malta", "code": "MT"}, 
        {"id":"147","name": "Marshall Islands", "code": "MH"}, 
        {"id":"148","name": "Martinique", "code": "MQ"}, 
        {"id":"149","name": "Mauritania", "code": "MR"}, 
        {"id":"150","name": "Mauritius", "code": "MU"}, 
        {"id":"151","name": "Mayotte", "code": "YT"}, 
        {"id":"152","name": "Mexico", "code": "MX"}, 
        {"id":"153","name": "Micronesia, Federated States of", "code": "FM"}, 
        {"id":"154","name": "Moldova, Republic of", "code": "MD"}, 
        {"id":"155","name": "Monaco", "code": "MC"}, 
        {"id":"156","name": "Mongolia", "code": "MN"}, 
        {"id":"157","name": "Montenegro", "code": "ME"},
        {"id":"158","name": "Montserrat", "code": "MS"},
        {"id":"159","name": "Morocco", "code": "MA"}, 
        {"id":"160","name": "Mozambique", "code": "MZ"}, 
        {"id":"161","name": "Myanmar", "code": "MM"}, 
        {"id":"162","name": "Namibia", "code": "NA"}, 
        {"id":"163","name": "Nauru", "code": "NR"}, 
        {"id":"164","name": "Nepal", "code": "NP"}, 
        {"id":"165","name": "Netherlands", "code": "NL"}, 
        {"id":"166","name": "Netherlands Antilles", "code": "AN"}, 
        {"id":"167","name": "New Caledonia", "code": "NC"}, 
        {"id":"168","name": "New Zealand", "code": "NZ"}, 
        {"id":"169","name": "Nicaragua", "code": "NI"}, 
        {"id":"170","name": "Niger", "code": "NE"}, 
        {"id":"171","name": "Nigeria", "code": "NG"}, 
        {"id":"172","name": "Niue", "code": "NU"}, 
        {"id":"173","name": "Norfolk Island", "code": "NF"}, 
        {"id":"174","name": "Northern Mariana Islands", "code": "MP"}, 
        {"id":"175","name": "Norway", "code": "NO"}, 
        {"id":"176","name": "Oman", "code": "OM"}, 
        {"id":"177","name": "Pakistan", "code": "PK"}, 
        {"id":"178","name": "Palau", "code": "PW"}, 
        {"id":"179","name": "Palestinian Territory, Occupied", "code": "PS"}, 
        {"id":"180","name": "Panama", "code": "PA"}, 
        {"id":"181","name": "Papua New Guinea", "code": "PG"}, 
        {"id":"182","name": "Paraguay", "code": "PY"}, 
        {"id":"183","name": "Peru", "code": "PE"}, 
        {"id":"184","name": "Philippines", "code": "PH"}, 
        {"id":"185","name": "Pitcairn", "code": "PN"}, 
        {"id":"186","name": "Poland", "code": "PL"}, 
        {"id":"187","name": "Portugal", "code": "PT"}, 
        {"id":"188","name": "Puerto Rico", "code": "PR"}, 
        {"id":"189","name": "Qatar", "code": "QA"}, 
        {"id":"190","name": "Reunion", "code": "RE"}, 
        {"id":"191","name": "Romania", "code": "RO"}, 
        {"id":"192","name": "Russian Federation", "code": "RU"}, 
        {"id":"193","name": "RWANDA", "code": "RW"}, 
        {"id":"194","name": "Saint Helena", "code": "SH"}, 
        {"id":"195","name": "Saint Kitts and Nevis", "code": "KN"}, 
        {"id":"196","name": "Saint Lucia", "code": "LC"}, 
        {"id":"197","name": "Saint Pierre and Miquelon", "code": "PM"}, 
        {"id":"198","name": "Saint Vincent and the Grenadines", "code": "VC"}, 
        {"id":"199","name": "Samoa", "code": "WS"}, 
        {"id":"200","name": "San Marino", "code": "SM"}, 
        {"id":"201","name": "Sao Tome and Principe", "code": "ST"}, 
        {"id":"201","name": "Saudi Arabia", "code": "SA"}, 
        {"id":"202","name": "Senegal", "code": "SN"}, 
        {"id":"203","name": "Serbia", "code": "RS"}, 
        {"id":"204","name": "Seychelles", "code": "SC"}, 
        {"id":"205","name": "Sierra Leone", "code": "SL"}, 
        {"id":"206","name": "Singapore", "code": "SG"}, 
        {"id":"207","name": "Slovakia", "code": "SK"}, 
        {"id":"208","name": "Slovenia", "code": "SI"}, 
        {"id":"209","name": "Solomon Islands", "code": "SB"}, 
        {"id":"210","name": "Somalia", "code": "SO"}, 
        {"id":"211","name": "South Africa", "code": "ZA"}, 
        {"id":"212","name": "South Georgia and the South Sandwich Islands", "code": "GS"}, 
        {"id":"213","name": "Spain", "code": "ES"}, 
        {"id":"214","name": "Sri Lanka", "code": "LK"}, 
        {"id":"215","name": "Sudan", "code": "SD"}, 
        {"id":"216","name": "Suriname", "code": "SR"}, 
        {"id":"217","name": "Svalbard and Jan Mayen", "code": "SJ"}, 
        {"id":"218","name": "Swaziland", "code": "SZ"}, 
        {"id":"219","name": "Sweden", "code": "SE"}, 
        {"id":"220","name": "Switzerland", "code": "CH"}, 
        {"id":"221","name": "Syrian Arab Republic", "code": "SY"}, 
        {"id":"222","name": "Taiwan, Province of China", "code": "TW"}, 
        {"id":"223","name": "Tajikistan", "code": "TJ"}, 
        {"id":"224","name": "Tanzania, United Republic of", "code": "TZ"}, 
        {"id":"225","name": "Thailand", "code": "TH"}, 
        {"id":"226","name": "Timor-Leste", "code": "TL"}, 
        {"id":"227","name": "Togo", "code": "TG"}, 
        {"id":"228","name": "Tokelau", "code": "TK"}, 
        {"id":"229","name": "Tonga", "code": "TO"}, 
        {"id":"230","name": "Trinidad and Tobago", "code": "TT"}, 
        {"id":"231","name": "Tunisia", "code": "TN"}, 
        {"id":"232","name": "Turkey", "code": "TR"}, 
        {"id":"233","name": "Turkmenistan", "code": "TM"}, 
        {"id":"234","name": "Turks and Caicos Islands", "code": "TC"}, 
        {"id":"235","name": "Tuvalu", "code": "TV"}, 
        {"id":"236","name": "Uganda", "code": "UG"}, 
        {"id":"237","name": "Ukraine", "code": "UA"}, 
        {"id":"238","name": "United Arab Emirates", "code": "AE"}, 
        {"id":"239","name": "United Kingdom", "code": "GB"}, 
        {"id":"240","name": "United States", "code": "US"}, 
        {"id":"241","name": "United States Minor Outlying Islands", "code": "UM"}, 
        {"id":"242","name": "Uruguay", "code": "UY"}, 
        {"id":"243","name": "Uzbekistan", "code": "UZ"}, 
        {"id":"244","name": "Vanuatu", "code": "VU"}, 
        {"id":"245","name": "Venezuela", "code": "VE"}, 
        {"id":"246","name": "Viet Nam", "code": "VN"}, 
        {"id":"247","name": "Virgin Islands, British", "code": "VG"}, 
        {"id":"248","name": "Virgin Islands, U.S.", "code": "VI"}, 
        {"id":"249","name": "Wallis and Futuna", "code": "WF"}, 
        {"id":"250","name": "Western Sahara", "code": "EH"}, 
        {"id":"251","name": "Yemen", "code": "YE"}, 
        {"id":"252","name": "Zambia", "code": "ZM"}, 
        {"id":"253","name": "Zimbabwe", "code": "ZW"} 
        ]        
    }
  }
 
  componentDidUpdate() {
    if (this.props.showMessage) {
      setTimeout(() => {
        this.props.hideMessage();
      }, 100);
    }
    if (this.props.authUser !== null) {
      this.props.history.push('/');
    }
  }

  // compareToFirstPassword = (rule, value, callback) => {
  //   const form = this.props.form;
  //   if (value && value !== form.getFieldValue('password')) {
  //     callback('Two passwords that you enter is inconsistent!');
  //   } else {
  //     callback();
  //   }
  // };

  // validateToNextPassword = (rule, value, callback) => {
  //   const form = this.props.form;
  //   if (value && this.props.confirmDirty) {
  //     form.validateFields(['confirm'], {force: true});
  //   }
  //   callback();
  // };

  render() {
    const {getFieldDecorator} = this.props.form;
    const {showMessage, loader, alertMessage} = this.props;
    const Option = Select.Option;
    let optionTemplate = this.state.values.map(v => (
      <Option value={v.name}>{v.name}</Option>
    ));
    return (
      <div className="gx-app-login-wrap">
        <div className="gx-app-login-container">
          <div className="gx-app-login-main-content">
            <div className="gx-app-logo-content">
              <div className="gx-app-logo-content-bg">
                <img src={require("assets/images/signup_2.jpg")} alt='Neature'/>
              </div>

              <div className="signinlogodesktop">
              <div className="gx-app-logo-wid">
                <h1><IntlMessages id="app.userAuth.signUp"/></h1>
                <p><IntlMessages id="app.userAuth.bySigning"/></p>
                <p><IntlMessages id="app.userAuth.getAccount"/></p>
              </div>
              <div className="gx-app-logo" style={{width: '80%',marginTop:'325px'}}>
                <img alt="example" src={require("assets/images/White.png")}/>
              </div>
              </div>

              <div className="signinlogomobile">
              <div className="gx-app-logo" style={{width: '50%',marginTop:'20px',marginBottom:'50px'}}>
                <img alt="example" src={require("assets/images/White.png")}/>
              </div>
              <div className="gx-app-logo-wid">
                <h1><IntlMessages id="app.userAuth.signUp"/></h1>
                <p><IntlMessages id="app.userAuth.bySigning"/></p>
                <p><IntlMessages id="app.userAuth.getAccount"/></p>
              </div>
           
              </div>

            </div>

            <div className="gx-app-login-content">
              <Form onSubmit={this.handleSubmit} className="gx-signup-form gx-form-row0">
                <FormItem>
                  {getFieldDecorator('Name', {
                    rules: [{required: true, message: 'Please input your username!'}],
                  })(
                    <Input placeholder="Name"/>
                  )}
                </FormItem>

                <FormItem>
                  {getFieldDecorator('email', {
                    rules: [{
                      required: true, type: 'email', message: 'The input is not valid E-mail!',
                    }],
                  })(
                    <Input placeholder="Email"/>
                  )}
                </FormItem>

                <FormItem>
                  {getFieldDecorator('country', {
                    rules: [{
                      required: true, message: 'Please select country!',
                    }],
                  })(
                  <Select placeholder="Select a country">
                    {optionTemplate}
                  </Select>
                  )}
                </FormItem>

                <FormItem>
                  {getFieldDecorator('password', {
                    rules: [{
                      required: true, message: 'Please input your password!',
                    }],
                  })(
                    <Input type="password" placeholder="Password"/>
                  )}
                </FormItem>

                {/* <FormItem>
                  {getFieldDecorator('confirm', {
                    rules: [{
                      required: true, message: 'Please confirm your password!',
                    }, {
                      validator: this.compareToFirstPassword,
                    }],
                  })(
                    <Input placeholder="Confirm Password" type="password" onBlur={this.handleConfirmBlur}/>
                  )}
                </FormItem> */}

                <FormItem>
                  {getFieldDecorator('newsletters', {
                    valuePropName: 'checked',
                    initialValue: true,
                  })(
                    <Checkbox>Recieve newsletters, offers & strategies</Checkbox>
                  )}
                </FormItem>

                <FormItem>
                  {getFieldDecorator('terms', {
                    valuePropName: 'checked',
                    initialValue: true,
                  })(
                    <Checkbox>I Confirm that i have read and understood the Signalant.com Privacy Policy, Terms and Conditions</Checkbox>
                  )}
                </FormItem>

                <FormItem>
                  <Button type="primary" className="gx-mb-0" htmlType="submit">
                    <IntlMessages id="app.userAuth.signUp"/>
                  </Button>
                  <span><IntlMessages id="app.userAuth.or"/></span> <Link to="/signin"><IntlMessages
                  id="app.userAuth.signIn"/></Link>
                </FormItem>
                <div className="gx-flex-row gx-justify-content-between">
                  <span>or connect with</span>
                  <ul className="gx-social-link">
                    <li>
                      <Icon type="google" onClick={() => {
                        this.props.showAuthLoader();
                        this.props.userGoogleSignIn();
                      }}/>
                    </li>
                  </ul>
                </div>
              </Form>
            </div>
            {loader &&
            <div className="gx-loader-view">
              <CircularProgress/>
            </div>
            }
            {showMessage &&
            message.error(alertMessage)}
          </div>
        </div>
      </div>

    );
  }

}

const WrappedSignUpForm = Form.create()(SignUp);

const mapStateToProps = ({auth}) => {
  const {loader, alertMessage, showMessage, authUser} = auth;
  return {loader, alertMessage, showMessage, authUser}
};

export default connect(mapStateToProps, {
  userSignUp,
  hideMessage,
  showAuthLoader,
  userFacebookSignIn,
  userGoogleSignIn,
  userGithubSignIn,
  userTwitterSignIn
})(WrappedSignUpForm);
