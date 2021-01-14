import React, {useState} from 'react';
import './Main.css';

const Main = (props) => {
    const {currentQuestion} = props;

    return (
        <div className="main">
            <div className="main__header">
                <span className="main_question">{currentQuestion.question}</span>
            </div>
            <div className="main__answers">
                {
                    currentQuestion.type === 'list' ? (
                        <ul className="main__list">
                            {currentQuestion.answers.map((answer) => (
                                <li>
                                    <span className="main__answer">{answer}</span>
                                </li>
                            ))}
                        </ul>
                    ) : null
                }
            </div>
        </div>
    );
};

export default Main;
