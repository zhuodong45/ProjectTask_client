const initState = {
    authenticated: true,
    user: {
        id: 3,
        firstName: 'Jon',
        lastName: 'Chan'
    }
};

const authReducer = (state = initState, action) => {
    return state;
};

export default authReducer;
