import React from 'react';
import { useSelector } from 'react-redux';
import { Modal } from 'antd';
import CreateProjectForm from './form/CreateProjectForm';

const CreateProjectModal = () => {
    const visible = useSelector(state => state.project.showCreateModal);

    return (
        <Modal
            title="Create Project"
            visible={visible}
            footer={null}
            closable={false}
        >
            <CreateProjectForm />
        </Modal>
    );
};

export default CreateProjectModal;
