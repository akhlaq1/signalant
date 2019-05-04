import React from "react";
import {Col, Row} from "antd";
import CreatePkg from './PackageForm';


const CreatePackage = () => {
    return (
      <Row>
          {/* <h1>Welcome To Create Package Page</h1> */}
        <Col span={24}>
          <CreatePkg />
        </Col>
      
      </Row>
    );
  };
  
  export default CreatePackage;