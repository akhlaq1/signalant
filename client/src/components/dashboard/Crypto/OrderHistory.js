import React from "react";
import {Table} from "antd";
import Widget from "components/Widget/index";

const columns = [
  {
    title: 'S.no',
    dataIndex: 'sno',
  },
  {
    title: '',
    dataIndex: 'currency',
  },
  {
    title: '',
    dataIndex: 'rate',
  },
  {
    title: '',
    dataIndex: 'date',
  },
  {
    title: '',
    dataIndex: 'fee',
    render: (text) => {
      return <span className="gx-text-red">{text}</span>
    },
  }
];

const data = [
  {
    key: '1',
    sno: '1',
    currency: '',
    rate: '',
    date: '',
    fee: ''
  },
  {
    key: '2',
    sno: '2',
    currency: '',
    rate: '',
    date: '',
    fee: ''
  },
  {
    key: '3',
    sno:'3',
    currency: '',
    rate: '',
    date: '',
    fee: ''
  },
  {
    key: '4',
    sno: '4',
    currency: '',
    rate: '',
    date: '',
    fee: ''
  },
  {
    key: '5',
    sno: '5',
    currency: '',
    rate: '',
    date: '',
    fee: ''
  }
 ];

const OrderHistory = () => {
  return (
    <Widget styleName="gx-order-history"
            title={
              <h2 className="h4 gx-text-capitalize gx-mb-0">
                Latest Signals</h2>
            } 
            
            >
      <div className="gx-table-responsive">
        <Table className="gx-table-no-bordered" columns={columns} dataSource={data} pagination={false} bordered={false}
               size="small"/>
      </div>
    </Widget>
  );
};

export default OrderHistory;
