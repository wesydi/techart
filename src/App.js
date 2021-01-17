import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './App.css';
import Main from './components/Main/Main';
import Button from './components/Button/Button';
import answersActions from './actions/answersActions';

const mapStateToProps = (state) => ({
  answers: state.answers,
});

const questions = [
  {
    type: 'list',
    name: 'building',
    question: 'Что будем строить?',
    answers: {
      1: 'Жилой дом',
      2: 'Гараж',
    },
  },
  {
    type: 'input',
    name: 'height',
    question: 'Количество этажей (число):',
    answers: ['height'],
  },
  {
    type: 'list',
    name: 'material',
    question: 'Материал стен:',
    answers: {
      1: { 1: 'Кирпич', 2: 'Шлакоблок', 3: 'Деревянный брус' },
      2: { 2: 'Шлакоблок', 4: 'Металл', 5: 'Сендвич-панели' },
    },
  },
  {
    type: 'input',
    name: 'sizes',
    question: 'Длина стен (в метрах):',
    answers: ['sizex', 'sizey'],
  },
];

const App = (props) => {
  const { answers, dispatch } = props;

  const [currentMove, changeCurrentMove] = useState(1);
  const [indexQuestion, changeIndexQuestion] = useState(0);
  const [inputValues, changeInputValues] = useState({});
  const [isLast, changeIsLast] = useState(false);
  const [result, changeResult] = useState(null);

  useEffect(async () => {
    if (isLast) {
      try {
        const response = await axios.get('https://data.techart.ru/lab/json/', {
          params: answers,
        });
        changeResult(response.data);
      } catch (error) {
        changeResult({ result: 'error', message: 'Возникли проблемы с соединением.' });
      }
    }
  }, [answers, isLast]);

  const currentQuestion = questions[indexQuestion];

  const checkOnDisabled = () => {
    if (currentQuestion.type === 'list') return true;
    const filledInputValues = Object.keys(inputValues).filter((key) => String(inputValues[key]) > 0);
    return currentQuestion.answers.length !== filledInputValues.length;
  };

  const handleClick = (answer, parent) => {
    if (!answer && parent.tagName !== 'BUTTON') return;
    if (parent.tagName === 'BUTTON') {
      Object.keys(inputValues).forEach((key) => {
        answersActions(dispatch).addAnswer(key, inputValues[key]);
      });
    } else {
      answersActions(dispatch).addAnswer(currentQuestion.name, answer);
    }
    if (indexQuestion === questions.length - 1) {
      changeIsLast(true);
      return;
    }
    changeCurrentMove(currentMove + 1);
    if (currentQuestion.name === 'building' && answer === 2) {
      changeIndexQuestion(indexQuestion + 2);
      return;
    }
    changeIndexQuestion(indexQuestion + 1);
    changeInputValues({});
  };

  const handleChangeInput = (target) => {
    changeInputValues({ ...inputValues, [target.getAttribute('data-name')]: Number(target.value) });
  };

  const clear = () => {
    answersActions(dispatch).clearAnswers();
    changeCurrentMove(1);
    changeIndexQuestion(0);
    changeInputValues({});
    changeIsLast(false);
    changeResult(null);
  };

  return (
    <div className="app">
      <h3>Калькулятор цены конструкций</h3>
      <span className="move">Шаг {currentMove}</span>
      <Main summary={result} handleChangeInput={handleChangeInput} handleClick={handleClick} currentQuestion={currentQuestion} answers={questions[indexQuestion].name === 'material' ? currentQuestion.answers[answers.building] : currentQuestion.answers} />
      <div className="buttons">
        {result ? <Button text="Новый расчет" handleClick={() => clear()} /> : (
          <>
            <Button handleClick={() => clear()} text="Отмена" />
            <Button handleClick={(event) => handleClick(null, event.currentTarget)} disabled={checkOnDisabled()} text={currentQuestion === questions[questions.length - 1] ? 'Результат' : 'Далее'} />
          </>
        )}
      </div>
    </div>
  );
};

App.defaultProps = {
  answers: [],
  dispatch: () => {},
};

App.propTypes = {
  answers: PropTypes.array || PropTypes.objectOf(PropTypes.object),
  dispatch: PropTypes.func,
};

export default connect(mapStateToProps)(App);
