import React from 'react';
import { Menu, Avatar } from 'antd';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CreateProjectModal from '../project/CreateProjectModal';

const SignInLink = () => {
    const user = useSelector(state => state.auth.user);
    const dispatch = useDispatch();

    return (
        <div>
            <Menu
                theme="light"
                mode="horizontal"
                defaultSelectedKeys={[]}
                style={{ lineHeight: '64px' }}
            >
                <Menu.Item
                    key="1"
                    onClick={() => dispatch({ type: 'SHOW_CREATE_MODAL' })}
                >
                    New Porject +
                </Menu.Item>
                <Menu.Item key="2">
                    <NavLink to="/signin">Log out</NavLink>
                </Menu.Item>
                <Menu.Item key="3">
                    <NavLink to="/">
                        <Avatar
                            style={{
                                backgroundColor: 'pink',
                                verticalAlign: 'middle'
                            }}
                            size="large"
                        >
                            {user.firstName.charAt(0) + user.lastName.charAt(0)}
                        </Avatar>
                    </NavLink>
                </Menu.Item>
            </Menu>

            <CreateProjectModal />
        </div>
    );
};

export default SignInLink;
