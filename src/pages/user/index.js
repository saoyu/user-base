import { connect } from 'dva';
import styles from './index.less';
import { Button, Divider, Popconfirm, Table } from 'antd';
import React from 'react';
import Modal from './components/Modal';
import Link from 'umi/link';


function User({ user, dispatch }) {
  //从state中取出
  const { users = [], loading } = user;
  const dataSource = users;

  //删除
  function deleteHandler(id) {
    dispatch({
      type: 'user/remove',
      payload: id,
    });
  }

  // 改
  function editHandler(id, value) {
    // console.log('index----id:'+id+'value='+value);
    dispatch({
      type: 'user/patch',
      payload: { id, value },
    });
    // console.log('dispatch----id:'+id+'value='+value);
  }

  //增
  function createHandler(value) {
    dispatch({
      type: 'user/create',
      payload: { value },
    });
    console.log('index:' + value);
  }

  //表格结构
  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
      render: (text, record) => (
        <Link to={`user/${record.id}`}>{text}</Link>),

    },
    {
      title: 'Nickname',
      dataIndex: 'nickname',
      key: 'nickname',
    },
    {
      title: 'Province',
      dataIndex: 'province',
      key: 'province',
    },
    {
      title: 'City',
      dataIndex: 'city',
      key: 'city',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
          {/*编辑*/}

          <Modal
            record={record}
            onOk={editHandler.bind(null, record.id)}>
              <a>Edit</a>
           </Modal>

          <Divider type="vertical"/>

          {/*删除*/}
          <Popconfirm
            title={record.id}
            onConfirm={deleteHandler.bind(null, record.id)}>
            <a href=''>Delete</a>
          </Popconfirm>
      </span>
      ),
    },
  ];

  return (
    <div className={styles.normal}>
      {/*<h1>*/}
      {/*  {JSON.stringify(users)}*/}
      {/*</h1>*/}
      <div>
        <div className={styles.create}>
          <Modal record={{}} onOk={createHandler}>
            <Button type="primary">Create User</Button>
          </Modal>
        </div>
        <Table
          columns={columns}
          dataSource={dataSource}
          loading={loading}
          rowKey={record => record.id}
          pagination={true}
        />
      </div>
    </div>
  );
}

export default connect(({ user }) => ({ user }))(User);
