import React from 'react'

import './content.scss'

function Content(props) {
  return (
    <div className="content">
      {props.children}
    </div>
  )
}

Content.propTypes = {
  children: React.PropTypes.any,
}

export default Content
