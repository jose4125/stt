import React from 'react'

import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router'

import './menu-item.scss'



function MenuItem(props) {
  const goTo = '/' + props.item
  console.log('props', props)
  const iconClass = 'fa ' + props.message.icon
  return (
    <li className="menu-list-item">
      <Link className="menu-list-link" to={goTo}>
        <span className={iconClass}></span>
        <FormattedMessage {...props.message} />
      </Link>
    </li>
  )
}

export default MenuItem
