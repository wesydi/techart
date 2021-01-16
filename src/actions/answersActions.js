const answersActions = (dispatch) => ({
  addAnswer: (question, answer) => dispatch({ type: 'ADD_ANSWER', question, answer }),
  clearAnswers: () => dispatch({ type: 'CLEAR_ANSWERS' }),
});

export default answersActions;
