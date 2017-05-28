import React from 'react'
import { connect } from 'react-redux'

import MenuItem from 'components/MenuItem'
import messages from './messages'

import './menu.scss'

export class Menu extends React.PureComponent {
  renderMenuItems(item) {
    return (
      <MenuItem
        key={item}
        item={item}
        message={messages[item]}
      />
    )
  }

  render() {
    const items = Object.keys(messages)
    return (
      <ul className="menu-list">
        <li className="menu-list-header">
          <piture className="menu-list-avatar">
            <img className="menu-list-image" src="" alt=""/>
          </piture>
          <h3 className="menu-list-user">Jose David Lombana</h3>
          <p className="menu-list-date">27 - 05 - 2017</p>
        </li>
        {items.map(this.renderMenuItems)}
      </ul>
    )
  }
}

export default connect(null, null)(Menu)
