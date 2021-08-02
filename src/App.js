import { Layout, Menu, Breadcrumb } from 'antd';
import {
  TeamOutlined,
  DollarOutlined,
} from '@ant-design/icons';
import { useState } from 'react';
import './App.css'
import Cashier from './pages/cashier/caixa';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <div className="logo"> <DollarOutlined style={{ fontSize: '2rem', color: '#FEC63E' }} /> </div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <SubMenu key="sub1" icon={<TeamOutlined />} title="Usuários">
            <Menu.Item key="Tom">Tom</Menu.Item>
            <Menu.Item key="Bill">Bill</Menu.Item>
            <Menu.Item key="Alex">Alex</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>  </Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <Cashier />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Market Cashier © 2021 Created by Jorge de Souza</Footer>
      </Layout>
    </Layout>
  )
}

export default App