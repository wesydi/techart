import React, {useState} from 'react';
import {connect} from "react-redux";
import './App.css';
import Main from "./components/Main/Main";
import Button from "./components/Button/Button";
import answersActions from "./actions/answersActions";

const mapStateToProps = (state) => {
  return {
      answers: state.answers
  }
};

const questions = [
    {
        type: 'list',
        name: 'building',
        question: 'Что будем строить?',
        answers: ['Жилой дом', 'Гараж'],
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
            1: ['Кирпич', 'Шлакоблок', 'Деревянный брус'],
            2: ['Шлакоблок', 'Металл', 'Сендвич-панели'],
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
    const {answers, dispatch} = props;

    const [currentMove, changeCurrentMove] = useState(1);
    const [indexQuestion, changeIndexQuestion] = useState(0);
    const [inputValues, changeInputValues] = useState({});
    const currentQuestion = questions[indexQuestion];

    const checkOnDisabled = () => {
      if (currentQuestion.type === 'list') return true;
      const filledInputValues = Object.keys(inputValues).filter((key) => inputValues[key].trim().length > 0);
      return currentQuestion.answers.length !== filledInputValues.length;
    };

    const handleClick = (answer) => {
        answersActions(dispatch).addAnswer(currentQuestion.name, answer);
        changeCurrentMove(currentMove + 1);
        if (answer === 2 && currentQuestion.name === 'building') {
            changeIndexQuestion(indexQuestion + 2);
            return;
        }
        changeIndexQuestion(indexQuestion + 1)
    };

    const handleChangeInput = (target) => {
        changeInputValues({...inputValues, [target.getAttribute('type')]: target.value});
    };

    return (
    <div className="app">
        <h3>Калькулятор цены конструкций</h3>
        <span className="move">Шаг {currentMove}</span>
        <Main handleChangeInput={handleChangeInput} handleClick={handleClick} currentQuestion={currentQuestion} answers={questions[indexQuestion].name === 'material' ? currentQuestion.answers[answers.building] : currentQuestion.answers}/>
        <div className="buttons">
            <Button handleClick={() => {
                answersActions(dispatch).clearAnswers();
                changeCurrentMove(1);
                changeIndexQuestion(0);
                changeInputValues({});
            }} text="Отмена"></Button>
            <Button disabled={checkOnDisabled()} text={currentQuestion === questions[questions.length - 1] ? 'Результат' : 'Далее'}></Button>
        </div>
    </div>
)};

export default connect(mapStateToProps)(App);
