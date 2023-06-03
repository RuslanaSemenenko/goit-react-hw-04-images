import React from 'react';
import PropTypes from 'prop-types';
import { ButtonLoad } from './Button.module.jsx';

const Button = ({ onClick }) => {
  return (
    <ButtonLoad onClick={onClick}>
      Load more
    </ButtonLoad>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
