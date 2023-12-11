"use client"
// pages/admin/index.js
import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  UserOutlined,
  FileOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const Admin = () => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div style={{ height: '32px', background: 'rgba(255, 255, 255, 0.2)', margin: '16px', color: 'WHITE',textAlign: 'center', padding: "5px", borderRadius: "5px"}}>
          APPOINTMENT PORTAL
        </div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<DesktopOutlined />}>
            Dashboard
          </Menu.Item>
          {/* <SubMenu key="sub1" icon={<UserOutlined />} title="Users">
            <Menu.Item key="2">User 1</Menu.Item>
            <Menu.Item key="3">User 2</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<FileOutlined />} title="Files">
            <Menu.Item key="4">File 1</Menu.Item>
            <Menu.Item key="5">File 2</Menu.Item>
          </SubMenu> */}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Patient</Breadcrumb.Item>
            <Breadcrumb.Item>Time</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            {/* Your admin content goes here */}
            Admin Panel
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Admin UI Footer</Footer>
      </Layout>
    </Layout>
  );
};

export default Admin;
