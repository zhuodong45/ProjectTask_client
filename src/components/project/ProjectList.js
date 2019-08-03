import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProjectSummary from './ProjectSummary';
import { fetchProjects } from '../../store/action/projectAction';

const ProjectList = () => {
  const projects = useSelector(state => state.project.projects);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  return (
    <div>
      {projects &&
        projects.map(project => {
          return (
            <Link to={`/project/${project.id}`} key={project.id}>
              <ProjectSummary project={project} />
            </Link>
          );
        })}
    </div>
  );
};

export default ProjectList;
