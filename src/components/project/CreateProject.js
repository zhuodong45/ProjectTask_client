import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { createProject } from '../../store/action/projectAction';

const CreateProject = ({ history }) => {
  const [project, setProject] = useState({ title: '', content: '' });
  const dispatch = useDispatch();

  const handleChange = e => {
    const { id, value } = e.target;
    setProject({ ...project, [id]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(createProject(project));
    setProject({ title: '', content: '' });
    history.push('/');
  };

  return (
    <div className="container">
      <form className="white" onSubmit={e => handleSubmit(e)}>
        <h5 className="grey-text text-darken-3">Create Project</h5>
        <div className="input-field">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={project.title}
            onChange={e => handleChange(e)}
          />
        </div>
        <div className="input-field">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            className="materialize-textarea"
            value={project.content}
            onChange={e => handleChange(e)}
          />
        </div>
        <div className="input-field">
          <button type="submit" className="btn pink lighten-1 z-depth-0">
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

CreateProject.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default CreateProject;
