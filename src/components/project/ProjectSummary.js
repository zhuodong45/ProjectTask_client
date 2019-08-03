import React from 'react';
import { Card } from 'antd';
import { PropTypes } from 'prop-types';

const ProjectSummary = ({ project }) => {
  return (
    <div>
      <Card title={project.title} bordered={false}>
        <p>Post by {project.author.firstName}</p>
        <p>{project.createDate}</p>
      </Card>
      <br />
    </div>
  );
};

ProjectSummary.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    createDate: PropTypes.string,
    author: PropTypes.shape({
      firstName: PropTypes.string
    })
  }).isRequired
};

export default ProjectSummary;
