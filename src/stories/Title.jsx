import React from "react";
import PropTypes from "prop-types"

export const Title = ({ size, text }) => {
  return (
    <h2 className="h2" style={{ fontSize: `${size}px` }}>{text}</h2>
  )
}

Title.propTypes = {
  size: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired
}

Title.defaultProps = {
  size: 96
}