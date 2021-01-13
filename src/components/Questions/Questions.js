import React from 'react';
import './Questions.css';

const Questions = () => {
    return (
        <div className="questions">
            <div className="questions__header">
                <span className="questions_question">Что будем строить?</span>
            </div>
            <div className="questions__answers">
                <ul className="questions__list">
                    <li>
                        <span className="questions__answer">Жилой дом</span>
                    </li>
                    <li>
                        <span className="questions__answer">Гараж</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Questions;
