import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import SignInLink from './SignInLink';
import SignOutLink from './SignOutLink';

const Navbar = () => {
  return (
    <Row>
      <Col span={8}>
        <Link to="/" className="logo">
          Project Management
        </Link>
      </Col>
      <Col span={8}>
        <SignInLink />
      </Col>
      <Col span={8}>
        <SignOutLink />
      </Col>
    </Row>
  );
};

export default Navbar;
