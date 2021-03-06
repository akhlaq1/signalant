import React, { Component } from 'react';
import SweetAlert from "react-bootstrap-sweetalert";
import * as firebase from 'firebase';
import {Card, Divider, Table, Input, InputNumber, Popconfirm, Form} from 'antd';
import IntlMessages from "util/IntlMessages";

// const data = [];
//   for (let i = 0; i < 100; i++) {
//       data.push({
//       key: i.toString(),
//       name: `Edrward ${i}`,
//       age: 32,
//     address: `London Park no. ${i}`,
//   });
// }
const FormItem = Form.Item;
const EditableContext = React.createContext();

const EditableRow = ({ form, index, ...props }) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);
// class SweetAlerts extends React.Component {

// }
class EditableCell extends React.Component {
  getInput = () => {
    if (this.props.inputType === 'number') {
      return <InputNumber />;
    }
    return <Input />;
  };
  

  render() {
    const {
      editing,
      dataIndex,
      title,
      inputType,
      record,
      index,
      ...restProps
    } = this.props;
    return (
      <EditableContext.Consumer>
        {(form) => {
          const { getFieldDecorator } = form;
          return (
            <td {...restProps}>
              {editing ? (
                <FormItem style={{ margin: 0 }}>
                  {getFieldDecorator(dataIndex, {
                    rules: [{
                      required: true,
                      message: `Please Input ${title}!`,
                    }],
                    initialValue: record[dataIndex],
                  })(this.getInput())}
                </FormItem>
              ) : restProps.children}
            </td>
          );
        }}
      </EditableContext.Consumer>
    );
  }
}

class EditableTable extends Component {
    constructor(props) {
        super(props);
      
        this.state = { data: [], editingKey: '' , alert: null };
        
        this.columns = [
          {
            title: 'Name',
            dataIndex: 'Name',
            width: '25%',
            editable: true,
          },
          {
            title: 'Email',
            dataIndex: 'Email',
            width: '25%',
            editable: true,
          },
          {
            title: 'Country',
            dataIndex: 'Country',
            width: '25%',
            editable: true,
          },
          {
            title: 'Action',
            dataIndex: 'operation',
            width: '25%',
            render: (text, record) => {
              const editable = this.isEditing(record);
              return (
                <div>
                  {editable ? (
                    <span>
                      <EditableContext.Consumer>
                        {form => (
                          <a
                            href="javascript:;"
                            onClick={() => this.save(form, record.key)}
                            style={{ marginRight: 8 }}
                          >
                            Save
                          </a>
                        )}
                      </EditableContext.Consumer>
                      <Popconfirm
                        title="Sure to cancel?"
                        onConfirm={() => this.cancel(record.key)}
                      >
                        <a>Cancel</a>
                      </Popconfirm>
                    </span>
                  ) : (
                    <a onClick={() => this.edit(record.key)}>Edit</a>
                  )}
                  <Divider type="vertical"/>
                  <Popconfirm
                        title="Sure to delete?"
                        onConfirm={() => this.delete(record.key)}
                      >
                        <a>Delete</a>
                      </Popconfirm> 
                      {/* <a onClick={() => this.delete(record.key)}>Delete</a> */}
                 
        {this.state.alert}
                </div>

              );
            },
          },
        ];
    }
  
    hideAlert() {
      console.log('Hiding alert...');
      this.setState({
        alert: null
      });
    }
  
    componentDidMount() {
      const database = firebase.database().ref("users");
  
      database.orderByChild('role').equalTo("user").on("value", snapshot => {
        const data = [];
  
        snapshot.forEach(childSnapShot => {
          const locker = {
            key     : childSnapShot.key.toString(),
            Name    : childSnapShot.val().Name,
            Email   : childSnapShot.val().Email,
            Country : childSnapShot.val().Country,
          };
          data.push(locker);
        });
  
        this.setState(prevState => {
          return { data: [...prevState.data, ...data] };
        });

        
      });
    }

    isEditing = record => record.key === this.state.editingKey;
  
    cancel = () => {
      this.setState({ editingKey: '' });
    };
  
    save(form, key) {
      console.log(key);
      form.validateFields((error, row) => {
        console.log(row.Name);
        
        if (error) {
          return;
        }

        firebase.database().ref("users").child(key).update({
        "Name"     : row.Name,
        "Email"    : row.Email,
        "Country"  : row.Country
        });

        const newData = [...this.state.data];
        const index = newData.findIndex(item => key === item.key);
        
        if (index > -1) {
          const item = newData[index];
          newData.splice(index, 1, {
            ...item,
            ...row,
          });
          console.log(newData);
          
          this.setState({ data: newData, editingKey: '' });
        } else {
          newData.push(row);
          this.setState({ data: newData, editingKey: '' });
        }
      });

      const getAlert = () => (
        <SweetAlert 
          success 
          title="Success" 
          onConfirm={() => this.hideAlert()}
        >
         Your data saved Successfully
        </SweetAlert>
      );
  
      this.setState({
        alert: getAlert()
      });
      
    }
  
    edit(key) {
      this.setState({ editingKey: key });
    }

    delete(key){
      console.log(key);
      firebase.database().ref("users/"+key).remove();
    }

    render() {
      const components = {
        body: {
          row: EditableFormRow,
          cell: EditableCell,
        },
      };
  
      const columns = this.columns.map((col) => {
        if (!col.editable) {
          return col;
        }
        return {
          ...col,
          onCell: record => ({
            record,
            inputType: col.dataIndex === 'age' ? 'number' : 'text',
            dataIndex: col.dataIndex,
            title: col.title,
            editing: this.isEditing(record),
          }),
        };
      });
  
      return (
        <Card title="Customers CRM">
          <div className="components-table-demo-control-bar">
            <Form layout="inline">
            </Form>
          </div>
          
          <Table
          className="gx-table-responsive"
          components={components}
          bordered
          dataSource={this.state.data}
          columns={columns}
          rowClassName="editable-row"
          pagination={{
            onChange: this.cancel,
          }}
          />

        </Card>
      );
    }
     
}

export default EditableTable;