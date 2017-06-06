import React from 'react'

import './wrapper.scss'

function Content(props) {
  return (
    <div className="white-bg">
      {props.children}
    </div>
  )
}

Content.propTypes = {
  children: React.PropTypes.any,
}

export default Content
