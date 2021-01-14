const answersReducers = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_ANSWER':
            return {...state, [action.question]: action.answer};
        default:
            return state
    }
}

export default answersReducers;
