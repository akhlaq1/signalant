import React, {Component} from "react";
import {Col, Row, Card, Avatar} from "antd";

class Thankyou extends Component{
    render(){
        return(
            <Row>
               <Col span={24}>
                  <Card>
                         <center>
                            <Avatar className="gx-size-120 gx-mb-3" alt="avatar" src={require("assets/images/success.png")}/>
                            <h1>Thank You! Your payment is successfull.</h1>
                        </center>
                  </Card>
               </Col>
            </Row>
        )
    }
}

export default Thankyou;