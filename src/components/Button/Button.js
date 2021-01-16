import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = (props) => {
  const { text, handleClick, disabled } = props;

  return (
    <button type="button" disabled={disabled} onClick={handleClick}>{text}</button>
  );
};

Button.defaultProps = {
  text: '',
  handleClick: () => {},
  disabled: false,
};

Button.propTypes = {
  text: PropTypes.string,
  handleClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Button;
