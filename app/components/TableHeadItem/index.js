import React from 'react'

function TableHeadItem(props) {
  return (<td>{props.name}</td>)
}

TableHeadItem.propTypes = {
  name: React.PropTypes.string,
}

export default TableHeadItem
