import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input/Input';
import './Main.css';

const Main = (props) => {
  const {
    currentQuestion, answers, handleClick, handleChangeInput, summary,
  } = props;
  const render = () => {
    if (summary) {
      console.log(summary);
      return (
        <span className={`main__text ${summary.result === 'error' ? 'main__text_error' : null}`}>{summary.message}</span>
      );
    }
    if (currentQuestion.type === 'list') {
      return (
        <ul
          className="main__list"
          onClick={(event) => {
            handleClick(Number(event.target.getAttribute('data-value')), event.currentTarget);
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
    if (currentQuestion.type === 'input') {
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
    }
  };

  const getHeaderText = () => {
    if (summary) {
      return summary.result === 'ok' ? 'Успешно' : 'Ошибка';
    }
    return currentQuestion.question;
  };

  return (
    <div className="main">
      <div className="main__header">
        <span className="main__text">{getHeaderText()}</span>
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
  summary: null,
};

Main.propTypes = {
  answers: PropTypes.array || PropTypes.objectOf(PropTypes.object),
  currentQuestion: PropTypes.shape({
    type: PropTypes.string,
    name: PropTypes.string,
    question: PropTypes.string,
    answers: PropTypes.array || PropTypes.objectOf(PropTypes.object),
  }),
  summary: PropTypes.object || PropTypes.instanceOf(null),
  handleClick: PropTypes.func,
  handleChangeInput: PropTypes.func,
};

export default Main;
