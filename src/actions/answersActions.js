const answersActions = (question, answer) => {
    return {
        type: 'ADD_ANSWER',
        question,
        answer
    }
};

export default answersActions;
