import React, { Component } from 'react';
import {Card, Divider, Table, Input, InputNumber, Popconfirm, Form, Button} from 'antd';
import {Link} from "react-router-dom";
import * as firebase from 'firebase';


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

class PackageTbl extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [], editingKey: '' };
        this.columns = [
          {
            title: 'Name',
            dataIndex: 'Name',
            width: '20%',
            editable: true,
          },
          {
            title: 'Description',
            dataIndex: 'Description',
            width: '20%',
            editable: true,
          },
          {
            title: 'Price',
            dataIndex: 'Price',
            width: '20%',
            editable: true,
          },
          {
            title: 'Duration',
            dataIndex: 'Duration',
            width: '20%',
            editable: true,
          },
          {
            title: 'Action',
            dataIndex: 'operation',
            width: '20%',
            render: (text, record) => {
              const editable = this.isEditing(record);
              return (
                <div>
                  {editable ? (
                    <span>
                      <EditableContext.Consumer>
                        {form => (
                          <a href="javascript:;"
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
                  <a onClick={() => this.delete(record.key)}>Delete</a>
                </div>
              );
            },
          },
        ];
    }

    componentDidMount() {
      const database = firebase.database().ref("packages");
  
      database.on("value", snapshot => {
        const data = [];
  
        snapshot.forEach(childSnapShot => {
          const locker = {
            key         : childSnapShot.key.toString(),
            Name        : childSnapShot.val().Name,
            Description : childSnapShot.val().Description,
            Price       : childSnapShot.val().Price,
            Duration    : childSnapShot.val().Duration
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
    //   console.log(key);
      form.validateFields((error, row) => {
        // console.log(row.Name);
        
        if (error) {
          return;
        }

        firebase.database().ref("packages").child(key).update({
        "Name"        : row.Name,
        "Description" : row.Description,
        "Price"       : row.Price,
        "Duration"    : row.Duration,
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
    }
  
    edit(key) {
      this.setState({ editingKey: key });
    }

    delete(key){
      console.log(key);
      firebase.database().ref("packages/"+key).remove();
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
        <Card title="Packages">
          <div className="components-table-demo-control-bar">
            <Form layout="inline">
                <Link to="/components/table/create-package">
                    <Button type="primary">Create Package</Button>
                </Link>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/custom-views/extras/pricing-table">
                    <Button type="primary">View Packages</Button>
                </Link>
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

export default PackageTbl;