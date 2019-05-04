import React from "react";
import {Col, Row} from "antd";
import Profile from "./profile";

const Form = () => {

  return (
    <Row>
      <Col  lg={16} md={20} sm={24} xs={24} >
        <Profile/>
      </Col>
    </Row>
  );
};

export default (Form);
