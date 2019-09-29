import styles from './index.css';
import { Layout, Menu } from 'antd';
import Link from 'umi/link';
import React from 'react';

const { Header, Content, Footer, Sider } = Layout;

const menuData = [
  { route: '/user', name: '用户' },
  { route: '/', name: '关于' },
];

function BasicLayout(props) {
  const {
    location: { pathname },
    children,
  } = props;

  return (
    <Layout>
      {/*<Header>*/}
      {/*  <div className={styles.logo}>*/}
      {/*    <Link to='/'>用户信息管理</Link>*/}
      {/*  </div>*/}
      {/*  <Menu*/}
      {/*    theme="dark"*/}
      {/*    mode="horizontal"*/}
      {/*    defaultSelectedKeys={[pathname]}*/}
      {/*    style={{ lineHeight: '64px' }}*/}
      {/*  >*/}
      {/*    {menuData.map(menu => (*/}
      {/*      <Menu.Item key={`/${menu.route}`}>*/}
      {/*        <Link to={menu.route}>{menu.name}</Link>*/}
      {/*      </Menu.Item>*/}
      {/*    ))}*/}
      {/*  </Menu>*/}
      {/*</Header>*/}
      {/*<Content style={{ padding: '0 50px' }}>*/}
      {/*  <div style={{ background: '#fff', padding: 10, minHeight: 480 }}>{children}</div>*/}
      {/*</Content>*/}
      {/*<Footer style={{ textAlign: 'center' }}>*/}
      {/*  <a href='https://umijs.org/zh/'>Powered By react</a>*/}
      {/*</Footer>*/}

      <Header>
        <div className={styles.logo}>
          <Link to='/'>鲸信息管理</Link>
        </div>
      </Header>
      <Layout>
        <Sider>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={[pathname]}
            // style={}
          >
            {menuData.map(menu => (
              <Menu.Item key={`/${menu.route}`}>
                <Link to={menu.route}>{menu.name}</Link>
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Content>
          <div style={{ background: '#fff', padding: 10, minHeight: 480 }}>{children}</div>
        </Content>
        {/*<Sider>right sidebar</Sider>*/}

        {/*<Footer style={{ textAlign: 'center' }}>*/}
        {/*  <a href='https://umijs.org/zh/'>Powered By react</a>*/}
        {/*</Footer>*/}
      </Layout>
    </Layout>
  );
}

export default BasicLayout;
