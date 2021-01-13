import React from 'react';
import './App.css';
import Questions from "./components/Questions/Questions";
import Button from "./components/Button/Button";

const App = () => (
    <div className="app">
        <h3>Калькулятор цены конструкций</h3>
        <span className="move">Шаг 1</span>
        <Questions />
        <div className="buttons">
            <Button text="Отмена"></Button>
            <Button text="Далее"></Button>
        </div>
    </div>
);

export default App;
