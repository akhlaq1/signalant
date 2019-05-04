import React from "react";
import {Button, Card, Table, Input, Col} from "antd";

const data = [{
    key: '1',
    currencypair: '',
    buyprice: '',
    sellprice: '',
    profitloss:''
  },];
  const Search = Input.Search;
class Managesignals extends React.Component {
  state = {
    filteredInfo: null,
    sortedInfo: null,
  };
  handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  };
  clearFilters = () => {
    this.setState({filteredInfo: null});
  };
  clearAll = () => {
    this.setState({
      filteredInfo: null,
      sortedInfo: null,
    });
  };
  setAgeSort = () => {
    this.setState({
      sortedInfo: {
        order: 'descend',
        columnKey: 'age',
      },
    });
  };

  render() {
    let {sortedInfo, filteredInfo} = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [{
      title: 'Currency pair',
      dataIndex: 'currencypair',
      key: 'currencypair',
      filters: [
        {text: '', value: ''}
       
      ],
      filteredValue: filteredInfo.currencypair || null,
      onFilter: (value, record) => record.currencypair.includes(value),
      sorter: (a, b) => a.currencypair.length - b.currencypair.length,
      sortOrder: sortedInfo.columnKey === 'currencypair' && sortedInfo.order,
    }, {
      title: 'Buy price with time',
      dataIndex: 'buyprice',
      key: 'buyprice',
      filters: [
        {text: '', value: ''}
       
      ],
      filteredValue: filteredInfo.buyprice || null,
      onFilter: (value, record) => record.buyprice.includes(value),
      sorter: (a, b) => a.buyprice.length - b.buyprice.length,
      sortOrder: sortedInfo.columnKey === 'buyprice' && sortedInfo.order,
    }, {
      title: 'Sell price with time',
      dataIndex: 'sellprice',
      key: 'sellprice',
      filters: [
        {text: '', value: ''},
      
      ],
      filteredValue: filteredInfo.sellprice || null,
      onFilter: (value, record) => record.sellprice.includes(value),
      sorter: (a, b) => a.sellprice.length - b.sellprice.length,
      sortOrder: sortedInfo.columnKey === 'sellprice' && sortedInfo.order,
    },{
        title: 'Profit/loss',
        dataIndex: 'profitloss',
        key: 'profitloss',
        filters: [
          {text: '', value: ''},
         
        ],
        filteredValue: filteredInfo.profitloss || null,
        onFilter: (value, record) => record.profitloss.includes(value),
        sorter: (a, b) => a.profitloss.length - b.profitloss.length,
        sortOrder: sortedInfo.columnKey === 'profitloss' && sortedInfo.order,
      },
   
];
    return (
      <Card title="Manage Signals">
        {/* <div className="table-operations">
          <Button onClick={this.setAgeSort}>Sort age</Button>
          <Button onClick={this.clearFilters}>Clear filters</Button>
          <Button onClick={this.clearAll}>Clear filters and sorters</Button>
        </div> */}
      <Col lg={23} md={24} sm={24} xs={24} style={{textAlign:"end"}}>
          <Search 
        placeholder="search here"
        onSearch={value => console.log(value)}
        style={{width: 300}}
      />
      </Col>
      <div>
        <Table className="gx-table-responsive" columns={columns} dataSource={data} onChange={this.handleChange}/>
        </div>
      </Card>
    );
  }
}

export default Managesignals;
