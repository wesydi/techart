import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

const Input = (props) => {
  const {
    handleChangeInput, type, min, name, pattern,
  } = props;

  return (
    <input className="input" onChange={(event) => handleChangeInput(event.target)} type={type} min={min} data-name={name} pattern={pattern} />
  );
};

Input.defaultProps = {
  handleChangeInput: () => {},
  type: '',
  min: 0,
  name: '',
  pattern: '',
};

Input.propTypes = {
  handleChangeInput: PropTypes.func,
  type: PropTypes.string,
  min: PropTypes.number,
  name: PropTypes.string,
  pattern: PropTypes.string,
};

export default Input;
