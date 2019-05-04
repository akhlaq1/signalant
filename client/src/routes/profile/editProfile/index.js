import React from "react";
import {Col, Row} from "antd";
import Profile from "./data";

const editProfile = () => {

    return (
        <Row>
            <Col span={24}>
                <Profile/>
            </Col>
        </Row>
    )
}

export default (editProfile);