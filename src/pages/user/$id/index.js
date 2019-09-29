import React from 'react';
import { connect } from 'dva';
import styles from './index.less';
import { Descriptions } from 'antd';

function UserDetail({ userDetail, match }) {
  console.log('userDetail' + userDetail);
  const { data } = userDetail;
  console.log(data);
  const content = [];
  for (let key in data) {
    if ({}.hasOwnProperty.call(data, key)) {
      content.push(
        <Descriptions.Item label={key}>{String(data[key])}</Descriptions.Item>
      );
    }
  }
  return (
    <div>
      {/*{match.params.id}*/}
      <Descriptions title="用户详细信息">
        {content}
      </Descriptions>
      {/*<div key={key} className={styles.item}>*/}
      {/*  <div>{key}</div>*/}
      {/*  <div>{String(data[key])}</div>*/}
      {/*</div>,*/}
      {/*<div className={styles.content}>{content}</div>*/}

    </div>

  );
}

export default connect(({ userDetail }) => ({ userDetail }))(UserDetail);
