import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import { useSelector } from 'react-redux';
import SignInLink from './SignInLink';
import SignOutLink from './SignOutLink';

const Navbar = () => {
    const authenticated = useSelector(state => state.auth.authenticated);
    return (
        <Row>
            <Col span={12}>
                <Link to="/" className="logo">
                    Project Management
                </Link>
            </Col>
            {authenticated ? (
                <Col span={12} style={{ textAlign: 'right' }}>
                    <SignInLink />
                </Col>
            ) : (
                <Col span={12}>
                    <SignOutLink />
                </Col>
            )}
        </Row>
    );
};

export default Navbar;
