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
      <section className="container">
        <div className="submenu"></div>
        <div className="content-data">
          {React.Children.toArray(props.children)}
        </div>
      </section>
    </div>
  )
}

App.propTypes = {
  children: React.PropTypes.node,
}

export default App
