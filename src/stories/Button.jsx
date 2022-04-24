import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

export const Button = ({ classNames, text, popup, ...props }) => {
  return (
    <div
      className={['button', classNames, popup ? 'show-popup' : ''].join(' ')}
      {...props}
    >
      {text}
    </div>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  popup: PropTypes.bool
};

Button.defaultProps = {
  onClick: undefined,
  popup: false
};
