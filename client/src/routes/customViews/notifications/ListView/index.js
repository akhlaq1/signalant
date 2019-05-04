import React from "react";
import StripListItem from "../Component/StripListItem";
import {data} from "../data";
import {Col, Row} from "antd";
import ContainerHeader from "components/ContainerHeader/index";
import IntlMessages from "util/IntlMessages";

function StripList({match}) {
  return (
    <div className="gx-main-content gx-pb-sm-4">
      <Row>
        <Col span={24}>
          <ContainerHeader title="Notifications" match={match}/>
        </Col>
        <Col span={24}>
          {data.map((data, index) => (
            <StripListItem key={index} data={data} styleName="gx-card-strip"/>
          ))}
        </Col>
      </Row>
    </div>
  );
}

export default StripList;
