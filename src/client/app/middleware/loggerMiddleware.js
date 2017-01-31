export default store => next => action => {
    console.info('Dispatching: ', action);
    let result = next(action);
    console.info('Next state: ', store.getState());
    
    return result;
};