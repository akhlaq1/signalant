import React from "react";
import {Col, Row} from "antd";

// import FixHeader from "./FixHeader";
// import GroupTable from "./GroupTable";
// import Operation from "./Operation";
// import Dynamic from "./Dynamic";
// import CustomSelection from "./CustomSelection";
// import ResetFilter from "./ResetFilter";
// import ExpandableRow from "./ExpandableRow";
// import TreeData from "./TreeData";
// import FixColumn from "./FixColumn";
// import Show from "./Show";
import EditableTable from "./Edit";
import PackageTbl from "./PackageTbl";






const DataTable = () => {
  return (
    <Row>
      <Col span={24}>
        <EditableTable />
      </Col>
      <Col span={24}>
        <PackageTbl />
      </Col>
      {/* <Col span={24}>
        <Show />
      </Col> */}
      {/* <Col span={24}>
        <FixHeader/>
      </Col>
      <Col span={24}>
        <GroupTable/>
      </Col>
      <Col span={24}>
        <Operation/>
      </Col>
      <Col span={24}>
        <Dynamic/>
      </Col>
      <Col span={24}>
        <CustomSelection/>
      </Col>
      <Col span={24}>
        <ResetFilter/>
      </Col>
      <Col span={24}>
        <ExpandableRow/>
      </Col>
      <Col span={24}>
        <TreeData/>
      </Col>
      <Col span={24}>
        <FixColumn/>
      </Col> */}
    </Row>
  );
};

export default DataTable;
