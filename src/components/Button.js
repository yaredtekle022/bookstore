import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, handleAddBook }) => (
  <button type="button" onClick={handleAddBook} className="button-form">
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  handleAddBook: PropTypes.func.isRequired,
};

export default Button;
