import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input/Input';
import './Main.css';

const Main = (props) => {
  const {
    currentQuestion, answers, handleClick, handleChangeInput,
  } = props;
  const render = () => {
    if (currentQuestion.type === 'list') {
      return (
        <ul
          className="main__list"
          onClick={(event) => {
            handleClick(event.target.getAttribute('data-value'), event.currentTarget);
          }}
        >
          {Object.keys(answers).map((key) => (
            <li key={key}>
              <span data-value={key} className="main__answer">{answers[key]}</span>
            </li>
          ))}
        </ul>
      );
    }
    return (
      <div className="inputBlock">
        {answers.map((answer, index) => (
          <>
            <Input handleChangeInput={handleChangeInput} name={answer} type="number" min={1} key={answer} />
            {index !== answers.length - 1 ? <span className="inputBlock__divider">X</span> : null}
          </>
        ))}
      </div>
    );
  };

  return (
    <div className="main">
      <div className="main__header">
        <span className="main_question">{currentQuestion.question}</span>
      </div>
      <div className="main__answers">
        {render()}
      </div>
    </div>
  );
};

Main.defaultProps = {
  answers: [],
  currentQuestion: {},
  handleClick: () => {},
  handleChangeInput: () => {},
};

Main.propTypes = {
  answers: PropTypes.array || PropTypes.objectOf(PropTypes.object),
  currentQuestion: PropTypes.shape({
    type: PropTypes.string,
    name: PropTypes.string,
    question: PropTypes.string,
    answers: PropTypes.array || PropTypes.objectOf(PropTypes.object),
  }),
  handleClick: PropTypes.func,
  handleChangeInput: PropTypes.func,
};

export default Main;
