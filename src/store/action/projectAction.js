import axios from 'axios';

export const createProject = (project, history, initialValue, resetForm) => {
  return dispatch => {
    const body = {
      ...project,
      author: {
        id: 3,
        firstName: 'Jon',
        lastName: 'Chan'
      },
      createDate: new Date()
    };

    axios
      .post('http://localhost:8080/api/project/createproject', body)
      .then(response => {
        dispatch({ type: 'CLEAN_ERROR' });
        dispatch({ type: 'CLOSE_CREATE_MODAL' });
        dispatch({ type: 'CREATE_PROJECT', payload: response.data });
        resetForm(initialValue);
        history.push('/');
      })
      .catch(err => {
        dispatch({
          type: 'CREATE_PROJECT_ERROR',
          payload: 'Unable to create project, try later.'
        });
      });
  };
};

export const fetchProjects = () => {
  return dispatch => {
    axios
      .get('http://localhost:8080/api/project/')
      .then(response => {
        dispatch({ type: 'FETCH_PROJECTS', payload: response.data });
      })
      .catch(error => {
        dispatch({ type: 'FETCH_PROJECTS_ERROR', payload: error });
      });
  };
};

export const fetchOneProject = id => {
  return dispatch => {
    // async call to database

    axios
      .get(`http://localhost:8080/api/project/${id}`)
      .then(response => {
        dispatch({ type: 'FETCH_ONE_PROJECT', payload: response.data });
      })
      .catch(error => {
        dispatch({ type: 'FETCH_ONE_PROJECT_ERROR', payload: error });
      });
  };
};
