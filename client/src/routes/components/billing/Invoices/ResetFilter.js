import React from "react";
import {Card, Table, Button} from "antd";
import * as firebase from "firebase";

class ResetFilter extends React.Component{
  state = {
    filteredInfo: null,
    sortedInfo: null,
    data:[],
    tdata:[],
    pdata:[]
  };

  // gettdata(key){
  //   console.log(key);
    
  //   let tkey = key;
  //   let tref = firebase.database().ref("users").child(tkey);
  //       tref.on("value", snapshot => {
  //           var fn = snapshot.val().Name;
  //           // this.setState({tdata: fn})
  //           putdata(fn);
  //         })
  // }


  componentDidMount(){
    let Ref = firebase.database().ref("invoices");
    Ref.on("value", snapshot => {
      const data = [];

      snapshot.forEach(childSnapShot => {
 
        const locker = {
          key         : childSnapShot.key.toString(),
          TraderId    : childSnapShot.val().TraderId,
          PaymentId   : childSnapShot.val().paymentID,
          PackageId   : childSnapShot.val().pid,
          InvoiceId   : "SIG1234"
        };
        
        // console.log(this.gettdata(childSnapShot.val().TraderId));
        data.push(locker);

        let tkey = locker.TraderId;
        let tref = firebase.database().ref("users").child(tkey);
          tref.on("value", snapshot => {
            var tdatas = [];
            snapshot.forEach(function(childSnapShot){
              var tdr = childSnapShot.val();
                  tdatas.push(tdr);
            })
            console.log(snapshot.val());
            let fn = snapshot.val();
            this.setState({tdata: fn})
          })

        let pkey = locker.PackageId;
        let pref = firebase.database().ref("packages").child(pkey);
          pref.on("value", snapshot => {
            // var pdatas = [];
            // snapshot.forEach(function(childSnapshot) {
            //   var item = childSnapshot.val();
            //   pdatas.push(item);
            // })
            let pdatas = snapshot.val();
            this.setState({pdata: pdatas})
          })
        
      })

      this.setState(prevState => {
        return { data: [...prevState.data, ...data] };
      });

    })
  }

  

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
        columnKey: 'TraderId',
      },
    });
  };

  render(){
    let {sortedInfo, filteredInfo} = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [{
        title: 'Key ID',
        dataIndex: 'key',
        key: 'key',
        filteredValue: filteredInfo.key || null,
        onFilter: (value, record) => record.key.includes(value),
        sorter: (a, b) => a.key.length - b.key.length,
        sortOrder: sortedInfo.columnKey === 'key' && sortedInfo.order,
      }, {
        title: 'Trader Id',
        dataIndex: 'TraderId',
        key: 'TraderId',
        sorter: (a, b) => a.TraderId - b.TraderId,
        sortOrder: sortedInfo.columnKey === 'TraderId' && sortedInfo.order,
      }, {
        title: 'Package Id',
        dataIndex: 'PackageId',
        key: 'PackageId',
        filteredValue: filteredInfo.PackageId || null,
        onFilter: (value, record) => record.PackageId.includes(value),
        sorter: (a, b) => a.PackageId.length - b.PackageId.length,
        sortOrder: sortedInfo.columnKey === 'PackageId' && sortedInfo.order,
      }, {
        title: 'Invoice No',
        dataIndex: 'InvoiceId',
        key: 'InvoiceId',
        sorter: (a, b) => a.InvoiceId - b.InvoiceId,
        sortOrder: sortedInfo.columnKey === 'InvoiceId' && sortedInfo.order,
      }
    ];

    console.log(this.state.data);
    console.log(this.state.tdata);
    console.log(this.state.pdata);

    // const invoices = this.state.tdata.map((item, i) => {
    //   return(
    //     <p>{item.key}</p>
    //   )
    // });

    return(
      <Card title="Billing">
        <Table className="gx-table-responsive" columns={columns} dataSource={this.state.data} onChange={this.handleChange}/>

        <table className="gx-table-responsive">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Trader Name</th>
              <th>Package Name</th>
              <th>Invoice Id</th>
              <th>Action</th>
            </tr>
          </thead>
          
          <tbody>
            <tr>
              <td>1</td>
              <td>{this.state.tdata.Name}</td>
              <td>{this.state.pdata.Name}</td>
              <td>SIG1234</td>
              <td>View</td>
            </tr>
          </tbody>
        </table>

        {/* <p>{invoices}</p> */}
      </Card>
    )
  }
}

export default ResetFilter;