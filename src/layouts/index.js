import { Layout, Menu ,Breadcrumb} from 'antd';
import { Component } from 'react';
import Link from 'umi/link';
import styles from './index.css';

const { Header, Content, Footer, Sider } = Layout;

const menuData = [
  { route: '/user', name: '用户' },
  { route: '/', name: '关于' },
];


class BasicLayout extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };


  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        {/*头*/}
        <Header>*/}
          <div className={styles.logo}>
            <Link to='/'>信息管理</Link>
          </div>
        </Header>
        <Layout>
          <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
            <div className="logo"/>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              {menuData.map(menu => (
                <Menu.Item key={`/${menu.route}`}>
                  <Link to={menu.route}>{menu.name}</Link>
                </Menu.Item>
              ))}
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ margin: '0 16px' }}>
              {/*<Breadcrumb style={{ margin: '16px 0' }}>*/}
              {/*  <Breadcrumb.Item>User</Breadcrumb.Item>*/}
              {/*  <Breadcrumb.Item>Bill</Breadcrumb.Item>*/}
              {/*</Breadcrumb>*/}
              <div style={{ padding: 24, background: '#fff', minHeight: 120 }}>
                {this.props.children}
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design</Footer>
          </Layout>
        </Layout>

      </Layout>
    );
  }
}

export default BasicLayout;
