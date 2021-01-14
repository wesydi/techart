import React, {useState} from 'react';
import './App.css';
import Main from "./components/Main/Main";
import Button from "./components/Button/Button";

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
    },
    {
        type: 'list',
        name: 'material',
        question: 'Материал стен:',
        answers: {
            'Жилой дом': ['Кирпич', 'Шлакоблок', 'Деревянный брус'],
            'Гараж': ['Шлакоблок', 'Металл', 'Сендвич-панели'],
        },
    },
    {
        type: 'input',
        name: 'sizes',
        question: 'Длина стен (в метрах):',
    },
];

const App = () => {
    const [currentMove, changeCurrentMove] = useState(1);
    const [indexQuestion, changeIndexQuestion] = useState(0);

    return (
    <div className="app">
        <h3>Калькулятор цены конструкций</h3>
        <span className="move">Шаг {currentMove}</span>
        <Main currentQuestion={questions[indexQuestion]}/>
        <div className="buttons">
            <Button text="Отмена"></Button>
            <Button text="Далее"></Button>
        </div>
    </div>
)};

export default App;
