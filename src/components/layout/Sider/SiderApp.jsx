import React from "react";
import { Layout, Menu } from "antd";
import { AppstoreAddOutlined, HomeOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import './SiderApp.scss';

const { Sider } = Layout;

export const SiderApp = () => {
  return (
    <Sider className="sider fade-in" width={200} style={{ background: "#282c34" }}>
      <Menu 
        mode="inline" 
        defaultSelectedKeys={['1']} 
        style={{ height: "100%", borderRight: 0, background: 'linear-gradient(135deg, #2d3b50, #1f2b36)' }}
        items={[
          {
            key: "1",
            icon: <HomeOutlined />,
            label: <Link to="/">Home</Link>
          },
          {
            key: "2",
            icon: <AppstoreAddOutlined />,
            label: <Link to="/projects">Projects</Link>
          },
          {
            key: "3",
            icon: <UserOutlined />,
            label: <Link to="/about">About Me</Link>
          }
        ]}
      />
    </Sider>
  );
};