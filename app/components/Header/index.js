import React from 'react'

import './header.scss'

function Header(props) {
  const componentClass = `header ${props.className || ''}`
  return (
    <div className={componentClass}>
      <h2 className="header-title">{props.title}</h2>
      <div className="header-cta">
        {props.children}
      </div>
    </div>
  )
}

Header.propTypes = {
  className: React.PropTypes.string,
  title: React.PropTypes.string,
  children: React.PropTypes.any,
}

export default Header
