import React from "react";
import {Col, Row} from "antd";
// import CreatePkg from './SignalsForm';
import Basic from "./SignalsForm";
import SearchField from "./SignalsForm";

const Input = () => {
    return (
      <Row>
          {/* <h1>Welcome To Create Package Page</h1> */}
          <Col lg={24} md={24} sm={24} xs={24}>
        <Basic/>
        {/* <SearchField/> */}
        </Col>
      
      </Row>
    );
  };
  
  export default (Input);