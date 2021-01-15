import React from 'react';
import './Input.css';

const Input = (props) => {
    const {handleChangeInput, type} = props;

    return (
        <input className="input" onChange={(event) => handleChangeInput(event.target)} type={type}></input>
    );
};

export default Input;
