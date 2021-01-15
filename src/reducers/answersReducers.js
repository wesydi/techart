const answersReducers = (state = {answers: {}}, action) => {
    switch (action.type) {
        case 'ADD_ANSWER':
            return {...state, answers: {
                ...state.answers,
                [action.question]: action.answer,
            }
            };
        case 'CLEAR_ANSWERS':
            return {...state, answers: {}}
        ;
        default:
            return state
    }
}

export default answersReducers;
