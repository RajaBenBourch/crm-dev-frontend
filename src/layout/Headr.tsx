import React, { useState, useEffect } from 'react';
import { Button, notification, Input, Avatar, Space } from 'antd';
import { UserOutlined, BellOutlined } from '@ant-design/icons';

const { Search } = Input;

interface UserData {
  plac: string; 
  accountInfo: string;
}

const openNotification = () => {
  notification.open({
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is just a sample message.',
    onClick: () => {
      console.log('Notification Clicked!');
    },
  });
};

const handleSearch = (value: string) => {
  console.log('Searched:', value);
};

const handleLogout = () => {
  console.log('Logout');
};

const Headr: React.FC = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [plac, setPlac] = useState<string>("User's Place");

  useEffect(() => {
    fetchUserData()
      .then((data: UserData) => {
        setUserData(data); 
        setPlac(data.plac); 
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  const fetchUserData = async () => {
    return new Promise<UserData>((resolve, reject) => {

      setTimeout(() => {
        const userData: UserData = {
          plac: "", 
          accountInfo: ""
        };
        resolve(userData);
      }, 1000); 
    });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '15px' }}>
      <div>
        <Search
          placeholder="Search"
          onSearch={handleSearch}
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Space size="large">
          <Button type="text" icon={<BellOutlined />} onClick={openNotification} />
          <Avatar icon={<UserOutlined />} />
          <span>{plac}</span> 
        
        </Space>
      </div>
    </div>
  );
};

export default Headr;
