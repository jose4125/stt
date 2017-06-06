import React from 'react'

import Switch from 'components/Switch'

function TableItem(props) {
  return (
    <tr key={props.code}>
      <td>{props.code}</td>
      <td>{props.name}</td>
      <td>
        <Switch
          className="cmn-toggle cmn-toggle-round"
          changeState={props.onChangeState}
          id={props.code}
          active={props.active}
        />
      </td>
      <td>
        <button>editar</button>
        <button>elimiar</button>
      </td>
    </tr>
  )
}

TableItem.propTypes = {
  code: React.PropTypes.string,
  name: React.PropTypes.string,
  active: React.PropTypes.bool,
  onChangeState: React.PropTypes.func,
}

export default TableItem
