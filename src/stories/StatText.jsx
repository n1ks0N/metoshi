import React from "react";
import PropTypes from "prop-types";
import './StatText.css'

export const StatText = ({ type }) => {
  const statsArray = [
    {
      type: 'common',
      chance: 50
    },
    {
      type: 'unique',
      chance: 30
    },
    {
      type: 'rare',
      chance: 20
    }
  ]
  return (
    <div className={`stat_item ${type}`}>
      <div className="stat_item_icon"></div>
      <p>{statsArray.find((item) => item.type === type).chance} %</p>
      <span>{type[0].toUpperCase() + type.slice(1, type.length)}</span>
    </div>
  );
};

StatText.propTypes = {
  type: PropTypes.oneOf(['common', 'rare', 'unique']),
}

StatText.defaultProps = {
  type: 'common'
}