import React, { useState } from 'react';
import { Layout } from 'antd';
import logo  from "./images/logo.png"

import Headr from './layout/Headr'

import Menus from './layout/Menus'
import Events from './components/Events';

const { Header, Content, Footer, Sider } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div style={{backgroundColor:'#F4F9FD'}}>
    <Layout style={{ minHeight: '100vh',backgroundColor:'#F4F9FD'}}>
    <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={toggleCollapsed}
          style={{ marginLeft: '10px', marginTop: '10px', backgroundColor: '#FFFF', color: 'white' }} // Changed color to black
        >
          <div className="logo" style={{ height: 64, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={logo} alt="Logo" style={{ maxWidth: '70%', maxHeight: '70%' }} />
          </div>
          <Menus collapsed={collapsed} onCollapse={toggleCollapsed} />
        </Sider>
      
      <Layout className="site-layout" style={{backgroundColor:'#F4F9FD'}}>
        <Header style={{backgroundColor:'#F4F9FD',marginLeft: '10px',marginTop:'10px', color: 'white'}} >
        <Headr/>

        </Header>
        <Content style={{backgroundColor:'#F4F9FD', margin: '0 16px', }}>
          <div className="site-layout-background" style={{backgroundColor:'#F4F9FD', padding: 24, minHeight: 360 }}>
          <Events/>          
          </div>
        </Content>
        <Footer style={{backgroundColor:'#F4F9FD', textAlign: 'center' }}></Footer>
      </Layout>
    </Layout>
    </div>
  );
};

export default App;
