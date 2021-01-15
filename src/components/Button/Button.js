import React from 'react';
import './Button.css';

const Button = (props) => {
    const {text, handleClick, disabled} = props;

    return (
         <button disabled={disabled} onClick={handleClick}>{text}</button>
    );
};

export default Button;
