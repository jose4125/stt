import React from 'react'

import './switch.scss'

function Switch(props) {
  if (props.changeState) {
    return (
      <div>
        <input
          id={props.id}
          className={props.className}
          type="checkbox"
          {...props.field}
          onChange={props.changeState}
          checked={props.active}
        />
        <label htmlFor={props.id}></label>
      </div>
    )
  }
  return (
    <div>
      <input
        id={props.id}
        className={props.className}
        type="checkbox"
        {...props.field}
      />
      <label htmlFor={props.id}></label>
    </div>
  )
}

Switch.propTypes = {
  changeState: React.PropTypes.func,
  id: React.PropTypes.string,
  className: React.PropTypes.string,
  field: React.PropTypes.any,
  active: React.PropTypes.bool,
}

export default Switch
