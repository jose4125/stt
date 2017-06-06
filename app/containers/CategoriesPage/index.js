import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Field, reduxForm } from 'redux-form/immutable'

import Wrapper from 'components/Wrapper'
import Header from 'components/Header'
import Content from 'components/Content'
import Switch from 'components/Switch'
import TableList from 'containers/TableList'

import 'components/Switch/switch.scss'
import * as actions from './actions'
import './categories.scss'

export class CategoriesPage extends React.PureComponent {
  constructor(props) {
    super(props)
    this.renderField = this.renderField.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  shouldComponentUpdate() {
    return false
  }

  onSubmit() {
    this.props.createCategory()
    this.props.syncCategory()
  }

  renderField({
                input,
                label,
                type,
                className,
                labelClassName,
                id,
  }) {
    if (type === 'checkbox') {
      return (
        <Switch id={id} field={input} className={className} />
      )
    }

    return (
      <div>
        <label htmlFor={id} className={labelClassName}>{label}</label>
        <input {...input} type={type} className={className} />
      </div>
    )
  }

  render() {
    // console.log('route', this.props.routes)
    const { handleSubmit } = this.props
    return (
      <Wrapper>
        <Header title="Categorias">
          <Link to="/categorias/nueva">Nueva Categoria</Link>
        </Header>
        <Content>
          <TableList />
        </Content>
        <div>
          <h2>Nueva Categoria</h2>
          <form onSubmit={handleSubmit(this.onSubmit)}>
            <Field
              name="nombre"
              type="text"
              label="Nombre"
              component={this.renderField}
            />
            <Field
              name="codigo"
              type="text"
              label="Código"
              component={this.renderField}
            />
            <Field
              name="activo"
              type="checkbox"
              component={this.renderField}
              id="activeNew"
              className="cmn-toggle cmn-toggle-round"
            />
            <button type="submit">Guardar</button>
            <button type="button">Cancelar</button>
          </form>
        </div>
      </Wrapper>
    )
  }
}

CategoriesPage.propTypes = {
  createCategory: React.PropTypes.func,
  syncCategory: React.PropTypes.func,
  handleSubmit: React.PropTypes.func,
}

export default reduxForm({
  form: 'categoryNew',
})(
  connect(null, actions)(CategoriesPage)
)
