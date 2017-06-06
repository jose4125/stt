import React from 'react'
import { connect } from 'react-redux'

import { createStructuredSelector } from 'reselect'

import * as actions from 'containers/CategoriesPage/actions'

import TableItem from 'components/TableItem'
import TableHeadItem from 'components/TableHeadItem'
import { makeSelectAllCategories } from './selectors'

export class TableList extends React.PureComponent {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.renderTableData = this.renderTableData.bind(this)
  }

  componentWillMount() {
    this.props.fetchCategories()
  }

  handleChange() {
    // console.log('handle change', code, !active)
  }

  renderTableHead(item) {
    return (<TableHeadItem key={item} name={item} />)
  }

  renderTableData(key) {
    let item = null
    if (this.props.categories[key]) {
      item = (<TableItem
        key={this.props.categories[key].code}
        {...this.props.categories[key]}
        onChangeState={() => this.handleChange(this.props.categories[key].code,
          this.props.categories[key].active)}
      />)
    }
    return item
  }

  render() {
    const keys = Object.keys(this.props.categories)
    const headKeys = Object.keys(this.props.categories[keys[0]])
    headKeys.push('actions')
    return (
      <table className="categories-table">
        <thead>
          <tr>
            {headKeys.map(this.renderTableHead)}
          </tr>
        </thead>
        <tbody>
          {keys.map(this.renderTableData)}
        </tbody>
      </table>
    )
  }
}

TableList.propTypes = {
  fetchCategories: React.PropTypes.func,
  categories: React.PropTypes.object,
}

const mapStateToProps = createStructuredSelector({
  categories: makeSelectAllCategories(),
})

export default connect(mapStateToProps, actions)(TableList)
