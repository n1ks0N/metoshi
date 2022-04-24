import React from "react";
import PropTypes from "prop-types"
import "./Switcher.css"

export const Switcher = ({ id, selected, toggle, text }) => {
  return (
    <a
      className={['switcher-option-item-button', `switcher-option-item-button${selected ? '--selected' : ''}`].join(' ')}
      onClick={() => toggle(id)}
    >
      {text}
    </a>
  );
};

Switcher.propTypes = {
  text: PropTypes.string.isRequired,
  toggle: PropTypes.func,
  selected: PropTypes.bool,
  id: PropTypes.number.isRequired
}

Switcher.PropTypes = {
  selected: false
}
