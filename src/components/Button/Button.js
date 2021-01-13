import React from 'react';
import './Button.css';

const Button = (props) => {
    const {text, handleClick} = props;

    return (
         <button onClick={handleClick}>{text}</button>
    );
};

export default Button;
