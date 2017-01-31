const widgetReducer = function(state = [], action) {
    if(action.type === 'ADD_WIDGET') {
        return [...state, action.widget];
    }

    return state;
};

export default widgetReducer;