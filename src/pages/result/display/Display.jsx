import { Table } from 'antd';

const columns = [
  
  {
    title: 'Entity Type',
    dataIndex: 'Entity',
    key: 'Entity',

  },
  {
    title: 'Company ID',
    dataIndex: 'ID',
    key: 'ID',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },

  {
    title: 'Corporation/LLC Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a className='text-sky-500 hover:underline'>{text}</a>,
  },
];
const data = [
  {
    key: '1',
    Entity: 'LLC ASE',
    ID: 32,
    address: 'New York No. 1 Lake Park',
    name: 'Startbucks',
  },
  {
    key: '2',
    Entity: 'LLC',
    ID: 42,
    address: 'London No. 1 Lake Park',
    name: 'McDonald',
  },
  {
    key: '3',
    Entity: 'LLC OLD',
    ID: 32,
    address: 'Sidney No. 1 Lake Park',
    name:'PizzaHut',
  },
];

const Display = () => <Table columns={columns} dataSource={data} />;

export default Display;