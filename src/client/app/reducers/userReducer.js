const userReducer = function(state = [], action) {
    if(action.type === 'ADD_USER') {
        return [...state, action.user];
    }

    return state;
}

export default userReducer;