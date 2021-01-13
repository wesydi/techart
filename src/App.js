import React from 'react';
import './App.css';
import Questions from "./components/Questions/Questions";

const App = () => (
    <div className="app">
        <h3>Калькулятор цены конструкций</h3>
        <span className="move">Шаг 1</span>
        <Questions />
    </div>
);

export default App;
