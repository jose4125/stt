import React from 'react'
import Helmet from 'react-helmet'

import Menu from 'containers/Menu'

export function App(props) {
  return (
    <div className="app">
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
        meta={[
          { name: 'description', content: 'A React.js Boilerplate application' },
        ]}
      />
      <section className="menu">
        <Menu />
      </section>
      <section className="content">
        {React.Children.toArray(props.children)}
      </section>
    </div>
  )
}

App.propTypes = {
  children: React.PropTypes.node,
}

export default App
