import React from 'react';
import { Menu, Button } from 'antd';
import { RocketOutlined, AppstoreOutlined, FolderOpenOutlined, TeamOutlined, CloseOutlined, CommentOutlined, CalendarOutlined, DropboxOutlined } from '@ant-design/icons';
import { v4 as uuidv4 } from 'uuid'; // Importer la fonction v4 de la bibliothèque uuid
import "../styles/menus.css"
import Support  from "../images/Support.png"


const { Item } = Menu;

interface CustomMenuProps {
  collapsed: boolean;
  onCollapse: () => void;
}

const Menus: React.FC<CustomMenuProps> = ({ collapsed, onCollapse }) => {
  return (
    <>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} style={{ backgroundColor: '#ffff', color: 'white' }}>
        <Item key={uuidv4()} icon={<AppstoreOutlined />}>
          Dashboard
        </Item>

        <Item key={uuidv4()} icon={<DropboxOutlined />}>
          Projects
        </Item>
        <Item key={uuidv4()} icon={<CalendarOutlined />}>
          Calendar
        </Item>


        <Item key={uuidv4()} icon={<RocketOutlined />}>
          Vactions
        </Item>
        <Item key={uuidv4()} icon={<TeamOutlined />}>
          Employees
        </Item>

        <Item key={uuidv4()} icon={<CommentOutlined />}>
          Messenger
        </Item>

        <Item key={uuidv4()} icon={<FolderOpenOutlined />}>
          Info Portal
        </Item>
        <img src={Support} alt="Support" style={{ maxWidth: '90%', maxHeight: '90%',marginLeft:'5px',marginBottom:"50px"}} />
      </Menu>
    </>
  );
}

export default Menus;
