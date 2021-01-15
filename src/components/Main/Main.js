import React from 'react';
import Input from "../Input/Input";
import './Main.css';

const Main = (props) => {
    const {currentQuestion, answers, handleClick, handleChangeInput} = props;
    const render = () => {
      if (currentQuestion.type === 'list') {
          return (
              <ul className="main__list" onClick={(event) => {
                  if (event.target.innerText === 'Жилой дом') {
                      handleClick(1);
                      return;
                  }
                  if (event.target.innerText === 'Гараж') {
                      handleClick(2);
                      return;
                  }
                  handleClick(event.target.innerText)
              }}>
                  {answers.map((answer) => (
                      <li key={answer}>
                          <span className="main__answer">{answer}</span>
                      </li>
                  ))}
              </ul>
          )
      }
      if (currentQuestion.type === 'input') {
          return (
              <div className="inputBlock">
                  {answers.map((answer, index) => (
                      <>
                          <Input handleChangeInput={handleChangeInput} type={answer} key={answer}/>
                          {index !== answers.length - 1 ? <span className="inputBlock__divider">X</span> : null}
                      </>
                  ))}
              </div>
          )
      }
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

export default Main;
