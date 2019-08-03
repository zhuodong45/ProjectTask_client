import React from 'react';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';

const SignOutLink = () => {
  return (
    <Menu
      theme="light"
      mode="horizontal"
      defaultSelectedKeys={['1']}
      style={{ lineHeight: '64px' }}
    >
      <Menu.Item key="1">
        <NavLink to="/signin">Log in</NavLink>
      </Menu.Item>
      <Menu.Item key="2">
        <NavLink to="/signup">Sign up</NavLink>
      </Menu.Item>
    </Menu>
  );
};

export default SignOutLink;
