import React from 'react';
import { Row, Col } from 'antd';
import Notification from './Notification';
import ProjectList from '../project/ProjectList';

const Dashboard = () => {
    return (
        <div>
            <Row>
                <Col span={12}>
                    <ProjectList />
                </Col>
                <Col span={11} offset={1}>
                    <Notification />
                </Col>
            </Row>
        </div>
    );
};

export default Dashboard;
