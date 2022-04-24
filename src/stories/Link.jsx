import React from "react";
import PropTypes from 'prop-types'
import './Link.css'

export const Link = ({ size, url, text, svg, classNames, background, ...props }) => {
  return (
    <a className={['menu_item', `menu_item--${size}`, classNames].join(' ')} href={url} style={{ background: background }}>
      {svg && <svg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path opacity='0.3' d='M6 0L7.69706 4.30294L12 6L7.69706 7.69706L6 12L4.30294 7.69706L0 6L4.30294 4.30294L6 0Z' fill='white' />
      </svg>
    }
      &nbsp;
      {text}
    </a>
  )
}

Link.propTypes = {
  size: PropTypes.oneOf(['small', 'standard']),
  svg: PropTypes.bool,
  text: PropTypes.string.isRequired,
  url: PropTypes.string,
  classNames: PropTypes.string,
  onClick: PropTypes.func,
  background: PropTypes.string
}

Link.defaultProps = {
  onClick: undefined,
  size: 'standard',
  svg: true,
  background: 'none'
}