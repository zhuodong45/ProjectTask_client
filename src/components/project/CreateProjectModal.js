import React from 'react';
import { useSelector } from 'react-redux';
import { Modal } from 'antd';
import WrappedCreateProjectForm from './form/CreateProjectForm';

const CreateProjectModal = () => {
  const visible = useSelector(state => state.project.showCreateModal);

  return (
    <Modal
      title="Create Project"
      visible={visible}
      footer={null}
      closable={false}
    >
      <WrappedCreateProjectForm />
    </Modal>
  );
};

export default CreateProjectModal;
