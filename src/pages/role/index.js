import { connect } from 'dva';
import styles from './index.less';
import { Button, Divider, Popconfirm, Table } from 'antd';
import React from 'react';
import Modal from './components/Modal';
import Link from 'umi/link';


function Role({ role, dispatch }) {
  //从state中取出
  const { roles = [] } = role;
  const dataSource = roles;

  console.log('222' + JSON.stringify(role));

  //删除
  function deleteHandler(id) {
    dispatch({
      type: 'role/remove',
      payload: id,
    });
  }

  // 改
  function editHandler(id, value) {
    // console.log('index----id:'+id+'value='+value);
    dispatch({
      type: 'role/patch',
      payload: { id, value },
    });
    // console.log('dispatch----id:'+id+'value='+value);
  }

  //增
  function createHandler(value) {
    dispatch({
      type: 'role/create',
      payload: { value },
    });
  }

  //表格结构
  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => (
        <Link to={`role/${record.id}`}>{text}</Link>),

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
              <a>编辑</a>
           </Modal>

          <Divider type="vertical"/>

          {/*删除*/}
          <Popconfirm
            title={record.id}
            onConfirm={deleteHandler.bind(null, record.id)}>
            <a href=''>删除</a>
          </Popconfirm>
      </span>
      ),
    },
  ];

  return (
    <div className={styles.normal}>
      <div>
        <div className={styles.create}>
          <Modal record={{}} onOk={createHandler}>
            <Button type="primary">Create role</Button>
          </Modal>
        </div>
        <Table
          columns={columns}
          dataSource={dataSource}
          rowKey={record => record.id}
        />
      </div>
    </div>
  );
}

export default connect(({ role }) => ({ role }))(Role);
