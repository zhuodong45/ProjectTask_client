const initState = {
  projects: [],
  currentProject: null,
  showCreateModal: false,
  error: null
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_PROJECTS':
      console.log('fetch projects');
      return {
        ...state,
        projects: action.payload
      };
    case 'FETCH_ONE_PROJECT':
      console.log('fetch one');
      return {
        ...state,
        currentProject: action.payload
      };
    case 'CREATE_PROJECT':
      console.log('create_project');
      return {
        ...state,
        projects: [...state.projects, action.payload]
      };
    case 'CREATE_PROJECT_ERROR':
      console.log('Error');
      return {
        ...state,
        error: action.payload
      };
    case 'CLEAN_ERROR':
      console.log('remove Error');
      return {
        ...state,
        error: null
      };
    case 'SHOW_CREATE_MODAL':
      console.log('show');
      return {
        ...state,
        showCreateModal: true
      };
    case 'CLOSE_CREATE_MODAL':
      console.log('close');
      return {
        ...state,
        showCreateModal: false
      };
    default:
      console.log('Default');
      return state;
  }
};

export default projectReducer;
