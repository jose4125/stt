import React from 'react'
import Helmet from 'react-helmet'

export function App(props) {
  return (
    <div>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
        meta={[
          { name: 'description', content: 'A React.js Boilerplate application' },
        ]}
      />
      {React.Children.toArray(props.children)}
    </div>
  )
}

App.propTypes = {
  children: React.PropTypes.node,
}

export default App
