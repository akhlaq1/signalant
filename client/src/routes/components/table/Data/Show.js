import React, { Component } from 'react';
import * as firebase from 'firebase';
import {Card, Divider, Form, Icon, Radio, Switch, Table, Modal, Button, Input} from "antd";
import {connect} from "react-redux";

const FormItem = Form.Item;

const confirm = (Id) => {
  console.log(Id);
  firebase.database().ref("users/"+Id).remove();
};

const edit = (Id) => {
  console.log(Id);

  //Fetch Particular Data
  firebase.database().ref('users/'+Id).on('value', resp => {
    let info = resp;
    console.log(info);
  });

  //Update Particular Data
  firebase.database().ref('users/'+Id).update({});


};

const columns = [{
    title: 'Name',
    dataIndex: 'Name',
    key: 'name',
    width: 150,
    render: text => <span className="gx-link">{text}</span>,
  }, {
    title: 'Email',
    dataIndex: 'Email',
    key: 'email',
    width: 150,
  }, {
    title: 'Phone',
    dataIndex: 'Phone',
    key: 'phone',
    width: 150,
  }, {
    title: 'Action',
    key: 'action',
    width: 360,
    dataIndex:'Id',
    render: (text, record) => {
      return(
        <span>
          <a className="gx-link" onClick={() => edit(record.Id)}>Edit</a>
          <Divider type="vertical"/>
          <a className="gx-link" onClick={() => confirm(record.Id)}>Delete</a>          
        </span>
      )
    },
}];

const expandedRowRender = record => <p>{record.description}</p>;
const title = () => 'Here is title';
const showHeader = true;
const footer = () => 'Here is footer';
const scroll = {y: 240};
const pagination = {position: 'bottom'};

class Show extends Component {
    state = {
        bordered: true,
        loading: false,
        pagination,
        size: 'default',
        // expandedRowRender,
        title: undefined,
        showHeader,
        // footer,
        rowSelection: {},
        scroll: undefined,
        visible: false, 
        data: []
    };

    //Table Code
    handleToggle = (prop) => {
        return (enable) => {
          this.setState({[prop]: enable});
        };
    };
    
    handleSizeChange = (e) => {
      this.setState({size: e.target.value});
    };

    handleExpandChange = (enable) => {
      this.setState({expandedRowRender: enable ? expandedRowRender : undefined});
    };

    handleTitleChange = (enable) => {
      this.setState({title: enable ? title : undefined});
    };

    handleHeaderChange = (enable) => {
      this.setState({showHeader: enable ? showHeader : false});
    };

    handleFooterChange = (enable) => {
      this.setState({footer: enable ? footer : undefined});
    };

    handleRowSelectionChange = (enable) => {
      this.setState({rowSelection: enable ? {} : undefined});
    };

    handleScollChange = (enable) => {
      this.setState({scroll: enable ? scroll : undefined});
    };

    // handlePaginationChange = (e) => {
    //   const {value} = e.target;
    //   this.setState({
    //     pagination: value === 'none' ? false : {position: value},
    //   });
    // };

    componentDidMount() {
      const database = firebase.database().ref("users");
  
      database.orderByChild('role').equalTo("user").on("value", snapshot => {
        const data = [];
  
        snapshot.forEach(childSnapShot => {
          const locker = {
            Id:    childSnapShot.key.toString(),
            Name:  childSnapShot.val().FirstName,
            Email: childSnapShot.val().email,
            Phone: childSnapShot.val().Phone
          };
           console.log(childSnapShot.val().email);    
          data.push(locker);
        });
  
        this.setState(prevState => {
          return { data: [...prevState.data, ...data] };
        });

        
      });
    }

    delete(key){
      console.log(key);
      // const database = firebase.database().ref("users"+ key);
    }
  
    render() {
        console.log(this.state.data);
        
        const state = this.state;
        return (
            <Card title="Customers CRM">
                <div className="components-table-demo-control-bar">
                  <Form layout="inline">
                    {/* <FormItem label="Bordered">
                      <Switch checked={state.bordered} onChange={this.handleToggle('bordered')}/>
                    </FormItem> */}
                    {/* <FormItem label="loading">
                      <Switch checked={state.loading} onChange={this.handleToggle('loading')}/>
                    </FormItem>
                    <FormItem label="Title">
                      <Switch checked={!!state.title} onChange={this.handleTitleChange}/>
                    </FormItem> */}
                    {/* <FormItem label="Column Header">
                      <Switch checked={!!state.showHeader} onChange={this.handleHeaderChange}/>
                    </FormItem> */}
                    {/* <FormItem label="Footer">
                      <Switch checked={!!state.footer} onChange={this.handleFooterChange}/>
                    </FormItem> */}
                    {/* <FormItem label="Expandable">
                      <Switch checked={!!state.expandedRowRender} onChange={this.handleExpandChange}/>
                    </FormItem> */}
                    {/* <FormItem label="Checkbox">
                      <Switch checked={!!state.rowSelection} onChange={this.handleRowSelectionChange}/>
                    </FormItem> */}
                    {/* <FormItem label="Fixed Header">
                      <Switch checked={!!state.scroll} onChange={this.handleScollChange}/>
                    </FormItem>
                    <FormItem label="Size">
                      <Radio.Group size="default" value={state.size} onChange={this.handleSizeChange}>
                        <Radio.Button value="default">Default</Radio.Button>
                        <Radio.Button value="middle">Middle</Radio.Button>
                        <Radio.Button value="small">Small</Radio.Button>
                      </Radio.Group>
                    </FormItem> */}
                    {/* <FormItem label="Pagination">
                      <Radio.Group
                        value={state.pagination ? state.pagination.position : 'none'}
                        onChange={this.handlePaginationChange}
                      >
                        <Radio.Button value="top">Top</Radio.Button>
                        <Radio.Button value="bottom">Bottom</Radio.Button>
                        <Radio.Button value="both">Both</Radio.Button>
                        <Radio.Button value="none">None</Radio.Button>
                      </Radio.Group>
                    </FormItem> */}
                  </Form>
                </div>

                <Table className="gx-table-responsive" {...this.state} columns={columns} dataSource={this.state.data}/>
                
                {/* <div>
                    <ReactTable data={this.state.data} columns={columns} />
                </div> */}
            </Card>
        );
    }
}

const mapStateToProps = (state) =>{
  console.log(state.auth.authUser);
  
}

export default connect(mapStateToProps)(Show);