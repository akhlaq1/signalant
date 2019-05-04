import React from "react";
import {Table} from "antd";
import Widget from "components/Widget/index";

const columns = [
  {
    title: 'Name',
    dataIndex: 'image',
    render: (text, record) => {
      return <div className="gx-flex-row gx-align-items-center">
        <img className="gx-rounded-circle gx-size-30 gx-mr-2" src={text} alt=""/>
        <p className="gx-mb-0">{record.name}</p>
      </div>
    },
  },
  {
    title: '',
    dataIndex: 'transfer',
    render: (text, record) => {
      return <span className="gx-text-grey">{record.transfer}</span>
    },
 
  },
  {
    title: '',
    dataIndex: 'status',
    render: (text) => {
      return <span className="gx-text-primary gx-pointer">
        {text}</span>
    },
  },
 
 ];

const data = [
  {
    key: '1',
    name: 'Jeniffer L.',
    transfer: '',
    image: 'https://via.placeholder.com/150x150',
    status: ''
  },
  {
    key: '2',
    name: 'Jim Green',
    transfer: '',
    image: 'https://via.placeholder.com/150x150',
    status: ''
  },
  {
    key: '3',
    name: 'Joe Black',
    transfer: '',
    image: 'https://via.placeholder.com/150x150',
    status: ''
  },
  {
    key: '4',
    name: 'Mila Alba',
    transfer: '',
    image: 'https://via.placeholder.com/150x150',
    status: ''
  }
];

const SendMoney = () => {
  return (
    <Widget
      title={
        <h2 className="h4 gx-text-capitalize gx-mb-0">
          Latest Clients</h2>
      }
    //    extra={
    //   <p className="gx-text-primary gx-mb-0 gx-pointer gx-d-none gx-d-sm-block">
    //     <i className="icon icon-add-circle gx-fs-lg gx-d-inline-flex gx-vertical-align-middle"/> Add New Account</p>
    // }
    >
      <div className="gx-table-responsive">
        <Table className="gx-table-no-bordered" columns={columns} dataSource={data} pagination={false}
               size="small"/>
      </div>
      <p className="gx-text-primary gx-mb-0 gx-pointer gx-d-block gx-d-sm-none gx-mb-0 gx-mt-3">
        <i className="icon icon-add-circle gx-fs-lg gx-d-inline-flex gx-vertical-align-middle"/> Add New Account</p>
    </Widget>
  );
};

export default SendMoney;
