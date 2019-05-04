import React from "react";
import {Col, Row} from "antd";
import ResetFilter from "./ResetFilter";

const DataTable = () => {
  return (
    <Row>
      <Col span={24}>
        <ResetFilter/>
      </Col>
    </Row>
  );
};

export default DataTable;
